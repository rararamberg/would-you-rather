import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import { useState } from "react";
import CommentFeed from "./CommentFeed";
import CommentForm from "./CommentForm";

// pass props to map through question
function Results(props) {
  const [eventKey, setEventKey] = useState("");
  // const [showMore, setShowMore] = useState(true);
  // const [comments, setComments] = useState([]);

  // useEffect(() => {
  //   const fetchComments = async () => {
  //     const resp = await axios.get(commentsBaseURL, config)
  //     console.log(resp.data.records);
  //     setComments(resp.data.records);
  //   }
  //   fetchComments();
  // }, []);

  // console.log(props.comments);

  // create function that changes vote A and B to percentages
  // PMVP : use a pie graph to display percentages
  const stringify = (num) => {
    if (num) {
      console.log(num.toString())
      return (num.toString())
      
    } else {
      console.log("didn't work")
    }
  }

  return (
    <main className="results-main">
      <h2>This is the Results Page</h2>
      <p>Poll results of questions and comments sections go here</p>
      {/* questions.map()to display each Qs results */}
      {/* will i need to create a new component for this div / its functionality */}
      {/* click or tap to show more and display comments section */}
      <div className="results-container">
        {props.questions.map((question) => {
          // if (showMore === true) {
          return (
            <Card key={question.id} className="question-result">
              <Card.Header>
                <Card.Title>
                  <h3>WYR...</h3>
                </Card.Title>
                <Card.Subtitle>
                  (OptionA) {question.fields.optionA} or (OptionB){" "}
                  {question.fields.optionB}
                </Card.Subtitle>
                {/* use percentages to display */}
                <Card.Text>
                  (voteA) {question.fields.voteA} vs. (voteB){" "}
                  {question.fields.voteB}
                </Card.Text>
                <h4>comment id: {question.fields.commentId}</h4>
                {/* insert comment feed component */}
                {/* insert comment form */}
                <Accordion.Toggle as={Button} variant="link" eventKey="0" onClick={() => stringify(question.fields.commentId)}>
                  Join Discussion
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
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
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            // end question result div
          );
          // } else {
          //   return (
          //     <div key={question.id} className="question-result">
          //       <h3>WYR</h3>
          //       <h4>comment id: {question.fields.commentId}</h4>
          //       <h5>
          //         (OptionA) {question.fields.optionA} or (OptionB){" "}
          //         {question.fields.optionB}
          //       </h5>
          //       <p>
          //         (voteA) {question.fields.voteA} vs. (voteB){" "}
          //         {question.fields.voteB}
          //       </p>
          //       <button
          //         onClick={() => {
          //           setShowMore(!showMore);
          //         }}
          //       >
          //         More
          //       </button>
          //     </div>
          //   );
          // }
        })}
      </div>
      {/* end results container div */}
    </main>
  );
}

export default Results;

// <Accordion.Toggle as={Button} variant="link" eventKey={question.fields.commentId}>
//   Click me!
// </Accordion.Toggle>

// <Accordion.Collapse eventKey={question.fields.commentId}>
// </Accordion.Collapse>
