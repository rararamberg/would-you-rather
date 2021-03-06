import { useState } from 'react';
import Button from "react-bootstrap/Button";
import { commentsBaseURL, config } from '../services';
import axios from 'axios';
import './CommentForm.css';

// may combine to CommentFeed
function CommentForm(props) {
  const [author, setAuthor] = useState('');
  const [comment, setComment] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handle submit")
    const newComment = {
      author,
      comment,
      questions: [props.question.id]
    }
    await axios.post(commentsBaseURL, { fields: newComment }, config);
    props.setToggleFetch((curr) => !curr);
    setAuthor("")
    setComment("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="author">Name or Username:</label>
      <input
        required
        id="author"
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <label htmlFor="author">Comment:</label>
      <textarea
        required
        id="comment"
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <Button
        variant="dark"
        type="submit"
        className="submit-btn"
        >Add</Button>
    </form>
  )
}

export default CommentForm;