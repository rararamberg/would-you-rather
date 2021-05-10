import { useState } from 'react';

// may combine to CommentFeed
function CommentForm() {
  const [author, setAuthor] = useState('');
  const [comment, setComment] = useState('');

  
  return (
    <form>
      <h5>Form: Join the Discussion</h5>
      <label htmlFor="author">Name or Username:</label>
      <input
        id="author"
        type="text"
      />
      <label htmlFor="author">Comment:</label>
      <input
        id="comment"
        type="text"
      />
      <button>Add</button>
    </form>
  )
}

export default CommentForm;