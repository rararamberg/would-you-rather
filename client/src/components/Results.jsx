// import axios from 'axios';
// import { commentsBaseURL, config } from '../services';
import { useState } from "react";
import CommentFeed from "./CommentFeed";
import CommentForm from "./CommentForm";

// pass props to map through question
function Results(props) {
  const [showMore, setShowMore] = useState(false);
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
    <main className="results-main">
      <h2>This is the Results Page</h2>
      <p>Poll results of questions and comments sections go here</p>
      {/* questions.map()to display each Qs results */}
      {/* will i need to create a new component for this div / its functionality */}
      {/* click or tap to show more and display comments section */}
      <div className="results-container">
        {props.questions.map((question) => {
          if (showMore === true) {
            return (
              <div key={question.id} className="question-result">
                <h3>WYR</h3>
                <h4>comment id: {question.fields.commentId}</h4>
                <h5>
                  (OptionA) {question.fields.optionA} or (OptionB){" "}
                  {question.fields.optionB}
                </h5>
                {/* use percentages to display */}
                <p>
                  (voteA) {question.fields.voteA} vs. (voteB){" "}
                  {question.fields.voteB}
                </p>
                {/* insert comment feed component */}
                {/* insert comment form */}
                <div className="comments-section">
                  {props.comments.map((comment) => {
                    if (
                      comment.fields.questionId === question.fields.commentId
                    ) {
                      return (
                        <div key={comment.id} className="comment">
                          <CommentFeed comment={comment} />
                        </div>
                      );
                    }
                  })}
                  <CommentForm
                    question={question}
                    setToggleFetch={props.setToggleFetch}
                  />
                </div>
                {/* end comments section div */}
                <button
                  onCLick={() => {
                    setShowMore(!showMore);
                  }}
                >
                  Show Less
                </button>
              </div>
              // end question result div
            );
          } else {
            return (
              <div key={question.id} className="question-result">
                <h3>WYR</h3>
                <h4>comment id: {question.fields.commentId}</h4>
                <h5>
                  (OptionA) {question.fields.optionA} or (OptionB){" "}
                  {question.fields.optionB}
                </h5>
                <p>
                  (voteA) {question.fields.voteA} vs. (voteB){" "}
                  {question.fields.voteB}
                </p>
                <button
                  onCLick={() => {
                    setShowMore(!showMore);
                  }}
                >
                  Show More
                </button>
              </div>
            );
          }
        })}
      </div>
      {/* end results container div */}
    </main>
  );
}

export default Results;
