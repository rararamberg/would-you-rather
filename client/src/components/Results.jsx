import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CommentFeed from "./CommentFeed";
import CommentForm from "./CommentForm";
import Majority from "./Majority";
import { findEmoji } from '../services';
import './Results.css';

function Results(props) {
  // const filterComments = (question) =>
  //   props.comments.filter(
  //     (comment) => question.fields.commentId === comment.fields.questionId
  //   );
  return (
    <main className="results-main">
      <h2 className="results-title">Results Are In!</h2>
      <p className="description">See below what scenario won over other</p>
      {/* questions.map()to display each Qs results */}
      {/* click or tap to show more and display comments section */}
      <div className="results-container">
        {props.questions.map((question) => {
          return (
            <Accordion>
              <Card
                key={question.id}
                className="question-result"
                style={{color: "#303841"}}
              >
                <Card.Header>
                  <Card.Title className="wyr">
                    WYR... {findEmoji(question.fields.category)}
                  </Card.Title>
                  <Card.Subtitle className="results-ab">
                    {question.fields.optionA}.. OR ..
                    {question.fields.optionB}
                  </Card.Subtitle>
                    {/* use percentages to display */}
                    <Majority question={question} />
                  {/* insert comment feed component */}
                  {/* insert comment form */}
                  <Accordion.Toggle
                    as={Button}
                    variant="link"
                    eventKey={question.id}
                    className="join"
                  >
                    Join Discussion
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={question.id}>
                  <Card.Body>
                    <div className="comments-section">
                      <div className="comment-feed">
                        {question.fields.comments.map((comment) => (
                          <CommentFeed comment={comment} />
                        ))}
                      </div>
                      {/* {filterComments(question).map((comment) => (
                        <div key={comment.id} className="comment">
                          <CommentFeed comment={comment} />
                        </div>
                      ))} */}
                      <CommentForm
                        question={question}
                        setToggleFetch={props.setToggleFetch}
                      />
                    </div>
                    {/* end comments section div */}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
            // end question result div
          );
        })}
      </div>
      {/* end results container div */}
    </main>
  );
}

export default Results;
