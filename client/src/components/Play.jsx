import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { questionsBaseURL, config } from "../services";
import { lastWord } from "../services";

function Play(props) {
  const [currQ, setCurrQ] = useState(0);
  const history = useHistory();

  // create function that takes you to next prompt
  // console.log(props.questions.length);
  // create vote function
  const vote = async (isA) => {
    const updatedQuestion = {
      ...props.questions[currQ].fields,
      voteA: props.questions[currQ].fields.voteA + (isA ? 1 : 0),
      voteB: props.questions[currQ].fields.voteB + (isA ? 0 : 1),
    };
    const specificQuestionsURL = `${questionsBaseURL}/${props.questions[currQ].id}`;
    await axios.put(specificQuestionsURL, { fields: updatedQuestion }, config);
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
      <h2>This is the Play Page</h2>
      <p>
        Here players will get taken through each question and input their
        decision of WYR
      </p>
      {/* first set all questions here */}
      {/* map questions with a prop of  and display each question with */}
      {props.questions.map((question) => {
        {
          /* goal: display one question at a time. when user selects next question appears  */
        }
        if (question === props.questions[currQ]) {
          return (
            <div key={question.id} className="question-prompt">
              <h3 className="wyr">Would you rather...</h3>
              <p className="option-a">{question.fields.optionA}</p>
              <p className="or">OR</p>
              <p classname="option-b">{question.fields.optionB}</p>
              {/* test tag for opt a count */}
              {/* <p>TEST Opt A Count: ({question.fields.voteA})</p>
              <p>TEST Opt B Count: ({question.fields.voteB})</p> */}
              {/* buttons A and B go here */}
              <Button
                size="lg"
                style={{ backgroundColor: "#00adb5", fontWeight: "bold" }}
                onClick={() => vote(true)}
              >
                {lastWord(question.fields.optionA)}
              </Button>
              <Button
                size="lg"
                style={{ backgroundColor: "#ff5722", fontWeight: "bold" }}
                onClick={() => vote(false)}
              >
                {lastWord(question.fields.optionB)}
              </Button>
            </div>
          );
        }
      })}
    </main>
  );
}

export default Play;
