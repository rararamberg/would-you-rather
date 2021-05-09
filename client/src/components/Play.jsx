import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { questionsBaseURL, config } from '../services';

function Play(props) {
  const [voteA, setVoteA] = useState(0);
  const [voteB, setVoteB] = useState(0);
    // useState to set OptionA and optionB count
  // create +1 incremement function for each A and B button
  // create function that takes you to next prompt
  // user answer post request to tally optionA and optionB
  // useParams?
  // useHistory?? for results and module?
  const params = useParams();

  useEffect(() => {
    if (params.id && props.questions.length) {
      const question = props.questions.find((question) => question.id === params.id);   
      if (question) {
        setVoteA(question.fields.voteA);
        setVoteB(question.fields.voteB);
      }
    }
  }, [props.questions, params.id]);

  const incrementA = () => {
    // e.preventDefault();
    console.log("voteA + 1")
    // if (params.id) {
    //   const specificQuestionsURL = `${questionsBaseURL}/params.id`;
    //   await axios.put(specificQuestionsURL, {voteA: setVoteA(voteA + 1)}, config )
    // } else {
    //   console.log("it didn't work")
    // }
  }

  const incrementB = async (e) => {
    // e.preventDefault();
    // setVoteA(voteB + 1)
    console.log("voteB + 1")
  }


  return (
    <main className="play">
      <h2>This is the Play Page</h2>
      <p>Here players will get taken through each question and input their decision of WYR</p>
      {/* first set all questions here */}
      {/* goal: display one question at a time. when user selects next question appears  */}
      {/* map questions with a prop of  and display each question with */}
      {props.questions.map((question) => (  
        <div key={question.id} className="question-prompt">
          <h3 className="wyr">Would you rather...</h3>
          <p className="option-a">Option A ...{question.fields.optionA}</p>
          <p className="or">OR</p>
          <p classname="option-b">Option B... {question.fields.optionB}</p>
          {/* buttons A and B go here */}
          {/* do i need to submit in a form */}
          {/* test tag for opt a count */}
          <p>TEST Opt A Count: {question.fields.voteA}</p>
          <p>TEST Opt B Count: {question.fields.voteB}</p>
          {/* <form className="choice-submit"></form> */}
            {/* Onclick run increment function optionA or optionB by one */}
            {/* onClick move to the next question */}
            {/* onClick={() => {incrementA()  nextModule}} */}
            <button onClick={incrementA}>A</button>
          {/* onClick={() => setVoteB(voteB + 1)} */}
          {/* how would we post this change to module */}
            <button onClick={incrementB}>B</button>
        </div>
      ))}
    </main>
  )
}

export default Play;