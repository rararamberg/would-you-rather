
// import {useState, useEffects} from 'react'

function Play(props) {

  return (
    <main className="play">
      <h2>This is the Play Page</h2>
      <p>Here players will get taken through each question and input their decision of WYR</p>
      {/* first set all questions here */}
      {/* goal: display one question at a time. when user selects next question appears  */}
      {/* map questions with a prop of  and display each question with */}
      {props.questions.map((question) => (  
          <div className="question-prompt">
          <h3 className="wyr">Would you rather...</h3>
          <p className="option-a">Option A ...{question.fields.optionA}</p>
          <p className="or">OR</p>
          <p classname="option-b">Option B... {question.fields.optionB}</p>
          {/* buttons A and B go here */}
          {/* do i need to submit in a form */}
          <form className="choice-submit">
            {/* Onclick run increment function optionA or optionB by one */}
            {/* onClick move to the next question */}
            {/* onClick={() => {incrementA()  nextModule}} */}
            <button>A</button>
            <button>B</button>
          </form>
        </div>
      ))}
    </main>
  )
}

export default Play;