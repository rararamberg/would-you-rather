import { useState} from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { questionsBaseURL, config } from "../services";

function Play(props) {
  const [currQ, setCurrQ] = useState(0);
  const history = useHistory();

  // create function that takes you to next prompt
  // console.log(props.questions.length);
  // create vote function
  const vote = async (isA) => {
    if (isA) {
      const updatedQuestionA = {
        ...props.questions[currQ].fields,
        voteA: props.questions[currQ].fields.voteA + 1,
      };
      const specificQuestionsURL = `${questionsBaseURL}/${props.questions[currQ].id}`;
      await axios.put(
        specificQuestionsURL,
        { fields: updatedQuestionA },
        config
      );
    } else {
      const updatedQuestionB = {
        ...props.questions[currQ].fields,
        voteB: props.questions[currQ].fields.voteB + 1,
      };
      const specificQuestionsURL = `${questionsBaseURL}/${props.questions[currQ].id}`;
      await axios.put(
        specificQuestionsURL,
        { fields: updatedQuestionB },
        config
      );
    }
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
        // consider ternary statement?
        if (question === props.questions[currQ]) {
          return (
            <div key={question.id} className="question-prompt">
              <h3 className="wyr">Would you rather...</h3>
              <p className="option-a">Option A ...{question.fields.optionA}</p>
              <p className="or">OR</p>
              <p classname="option-b">Option B... {question.fields.optionB}</p>
              {/* test tag for opt a count */}
              {/* <p>TEST Opt A Count: ({question.fields.voteA})</p>
              <p>TEST Opt B Count: ({question.fields.voteB})</p> */}
              {/* buttons A and B go here */}
              <button onClick={() => vote(true)}>A</button>
              <button onClick={() => vote(false)}>B</button>
            </div>
          );
        }
      })}
    </main>
  );
}

export default Play;
