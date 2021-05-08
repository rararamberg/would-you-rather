// confusing to call this componenet also questions?


function Questions() {
  // useState to set OptionA and optionB count
  // create incremement function for each A and B button
  // create function that takes you to next prompt
  return (
    <div className="question-prompt">
      <h3 className="wyr">Would you rather...</h3>
      <p className="option-a">Option A ...("question.fields.optionA")</p>
      <p className="or">OR</p>
      <p classname="option-b">Option B... ("question.fields.optionB")</p>
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
  )
}

export default Questions;