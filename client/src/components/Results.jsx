import axios from 'axios';
import { commentsBaseURL, config } from '../services';
import { useEffect, useState } from 'react';
import CommentFeed from "./CommentFeed";
import CommentForm from "./CommentForm";


// pass props to map through question 
function Results(props) {
  // const [comments, setComments] = useState([]);
  
  // useEffect(() => {
  //   const fetchComments = async () => {
  //     const resp = await axios.get(commentsBaseURL, config)
  //     console.log(resp.data.records);
  //     setComments(resp.data.records);
  //   }
  //   fetchComments();
  // }, []);

  console.log(props.comments);

  // create function that changes vote A and B to percentages
  // PMVP : use a pie graph to display percentages
  

  return (
    <main className="results">
      <h2>This is the Results Page</h2>
      <p>Poll results of questions and comments sections go here</p>
      {/* questions.map()to display each Qs results */}
      {/* will i need to create a new component for this div / its functionality */}
      {/* click or tap to show more and display comments section */}

      {props.questions.map((question) => (
        <div key={question.id} className="question-result">
          <h3>WYR </h3>
          <h5>(OptionA) {question.fields.optionA} or (OptionB) {question.fields.optionB}</h5>
          {/* use percentages to display */}
          <p>(voteA) {question.fields.voteA} vs. (voteB) {question.fields.voteB}</p>
          {/* insert comment feed component */}
          {/* {comments.map((comment) => (
            <CommentFeed comment={comment} />
          ))} */}
          {/* insert comment form */}
          {props.comments.map((comment) => (
            <div key={question.id} className="comments-section"> 
            <CommentForm question={question} comment={comment}/>
            <CommentFeed question={question} comment={comment} />
            </div>
          ))}
        </div>        
      ))}
      
    </main>
  )
}

export default Results;
