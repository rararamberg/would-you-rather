import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { questionsBaseURL, config, lastWord, findEmoji} from "../services";
import "./Play.css";

function Play(props) {
  const [currQ, setCurrQ] = useState(0);
  const history = useHistory();

  // create function that takes you to next prompt
  // create vote function
  const vote = async (isA) => {
    const updatedQuestion = {
      voteA: props.questions[currQ].fields.voteA + (isA ? 1 : 0),
      voteB: props.questions[currQ].fields.voteB + (isA ? 0 : 1),
    };
    const specificQuestionsURL = `${questionsBaseURL}/${props.questions[currQ].id}`;
    await axios.patch(specificQuestionsURL, { fields: updatedQuestion }, config);
    props.setToggleFetch((curr) => !curr);

    if (currQ === props.questions.length - 1) {
      console.log("game completed, forward to results page");
      history.push("/results");
    } else {
      setCurrQ(currQ + 1);
    }
  };

  return (
    <main className="play">
      <h2 className="head-title">Now it's Your Turn..</h2>
      <p className="description">
        Go with your heart!  Your gut?  Your logic?  Either way, you choose!
      </p>
      <div className="question-container">
      {/* first set all questions here */}
      {/* map questions with a prop of  and display each question with */}
      {props.questions.map((question) => {
        {
          /* goal: display one question at a time. when user selects next question appears  */
        }
        if (question === props.questions[currQ]) {
          return (
            <Card
              key={question.id}
              className="question-prompt"
              style={{color: "#303841"}}
            >
              <Card.Header>
                <Card.Title as="h1" className="wyr">Would you rather... {findEmoji(question.fields.category)} </Card.Title>
                <Card.Subtitle as="h2" className="play-subtitle">
                  <span className="option-a">{question.fields.optionA}</span>
                  <span className="or">OR</span>
                  <span className="option-b">{question.fields.optionB}</span>
                </Card.Subtitle>
                </Card.Header>
                <Card.Body>
                <Button
                  variant="dark"
                    size="lg"
                    style={{ backgroundColor: "#FF5721" }}
                    onClick={() => vote(true)}
                  >
                    {lastWord(question.fields.optionA)}
                  </Button>
                <Button
                  variant="dark"
                    size="lg"
                    style={{ backgroundColor: "#01ACB5"}}
                    onClick={() => vote(false)}
                  >
                    {lastWord(question.fields.optionB)}
                  </Button>
                </Card.Body>
              </Card>
          );
        }
      })}
      </div>
    </main>
  );
}

export default Play;
