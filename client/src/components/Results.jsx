import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CommentFeed from "./CommentFeed";
import CommentForm from "./CommentForm";
import PieGraph from "./PieGraph"

function Results(props) {
  const filterComments = (question) =>
    props.comments.filter(
      (comment) => question.fields.commentId === comment.fields.questionId
    );

  return (
    <main className="results-main">
      <h2>This is the Results Page</h2>
      <p>Poll results of questions and comments sections go here</p>
      {/* questions.map()to display each Qs results */}
      {/* will i need to create a new component for this div / its functionality */}
      {/* click or tap to show more and display comments section */}
      <div className="results-container">
        {props.questions.map((question) => {
          return (
            <Accordion>
              <Card key={question.id} className="question-result">
                <Card.Header>
                  <Card.Title>
                    <h3>WYR...</h3>
                  </Card.Title>
                  <Card.Subtitle>
                    {question.fields.optionA} OR{" "} 
                    {question.fields.optionB}
                  </Card.Subtitle>
                  {/* use percentages to display */}
                  <Card.Text>
                    <PieGraph question={question} />
                  </Card.Text>
                  <h6> TEMP comment id: {question.fields.commentId}</h6>
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
                      {filterComments(question).map((comment) => (
                        <div key={comment.id} className="comment">
                          <CommentFeed comment={comment} />
                        </div>
                      ))}
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
