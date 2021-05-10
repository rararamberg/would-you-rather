import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { questionsBaseURL, config } from "../services";

function Play(props) {
  // useState to set OptionA and optionB count
  // or just one useState for question?
  // const [voteA, setVoteA] = useState(0);
  // const [voteB, setVoteB] = useState(0);
  const [currQ, setCurrQ] = useState(0);
  // useParams?
  const params = useParams();
  const history = useHistory();

  // create function that takes you to next prompt
  console.log(props.questions.length);
  // (for let i = 0 ; i < props.questions.length; i++){
  //  play game starts props.question[0]
  // once player clicks button of their 'rather'
  // prompt moves to next question (i++)
  // example: user then answers  props.question[1]
  // props.question[curr] => user selects => props.question[curr++]
  // }
  // useHistory?? for results and module?

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

  // useEffect(() => {
  //   if (params.id && props.questions.length) {
  //     const question = props.questions.find((question) => question.id === params.id);
  //     if (question) {
  //       setVoteA(question.fields.voteA);
  //       setVoteB(question.fields.voteB);
  //     }
  //   }
  // }, [props.questions, params.id]);

  // create +1 incremement function for each A and B button
  // user answer post request to tally optionA and optionB
  // use PUT or PATCH ???
  // const incrementA = () => {
  //   e.preventDefault();
  //   console.log("voteA + 1")
  //   setVoteA(voteA + 1)
  //   if (params.id) {
  //     const specificQuestionsURL = `${questionsBaseURL}/params.id`;
  //     await axios.put(specificQuestionsURL, {voteA: setVoteA(voteA + 1)}, config )
  //   } else {
  //     console.log("it didn't work")
  //   }
  // }

  // const incrementB = () => {
  //   // e.preventDefault();
  //   console.log("voteB + 1")
  //   setVoteB(voteB + 1)
  // }

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
      {/* goal: display one question at a time. when user selects next question appears  */}
        if (question === props.questions[currQ]) {
          return (
            <div key={question.id} className="question-prompt">
              <h3 className="wyr">Would you rather...</h3>
              <p className="option-a">Option A ...{question.fields.optionA}</p>
              <p className="or">OR</p>
              <p classname="option-b">Option B... {question.fields.optionB}</p>
              {/* test tag for opt a count */}
              <p>TEST Opt A Count: ({question.fields.voteA})</p>
              <p>TEST Opt B Count: ({question.fields.voteB})</p>
              
              {/* buttons A and B go here */}
              {/* Onclick run increment function optionA or optionB by one */}
              {/* onClick move to the next question */}
              <button onClick={() => vote(true)}>A</button>
              {/* onClick={incrementA} */}
              {/* onClick={() => setVoteB(voteB + 1)} */}
              {/* how would we post this change to module */}
              {/* onClick={incrementB} */}
              <button onClick={() => vote(false)}>B</button>
            </div>
          );
        } else {
          return (<h2>Page Loading...</h2>)
        }
      })}
    </main>
  );
}

export default Play;
