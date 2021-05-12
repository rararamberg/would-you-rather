import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CommentFeed from "./CommentFeed";
import CommentForm from "./CommentForm";
import Majority from "./Majority";

function Results(props) {
  // const filterComments = (question) =>
  //   props.comments.filter(
  //     (comment) => question.fields.commentId === comment.fields.questionId
  //   );

  return (
    <main className="results-main">
      <h2>Results Are In!</h2>
      <p>See below what scenario won over other</p>
      {/* questions.map()to display each Qs results */}
      {/* click or tap to show more and display comments section */}
      <div className="results-container">
        {props.questions.map((question) => {
          return (
            <Accordion>
              <Card key={question.id} className="question-result">
                <Card.Header>
                  <Card.Title>
                    WYR...
                  </Card.Title>
                  <Card.Subtitle>
                    {question.fields.optionA}.. OR ..
                    {question.fields.optionB}
                  </Card.Subtitle>
                  <Card.Text>
                    {/* use percentages to display */}
                    <Majority question={question} />
                  </Card.Text>
                  {/* insert comment feed component */}
                  {/* insert comment form */}
                  <Accordion.Toggle
                    as={Button}
                    variant="link"
                    eventKey={question.id}
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
