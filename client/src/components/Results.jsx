import CommentFeed from "./CommentFeed";
import CommentForm from "./CommentForm";

// pass props to map through question 
function Results() {
  return (
    <main className="results">
      <h2>This is the Results Page</h2>
      <p>Poll results of questions and comments sections go here</p>
      {/* questions.map()to display each Qs results */}
      {/* will i need to create a new component for this div / its functionality */}
      {/* click or tap to show more and display comments section */}
      <div className="question-result">
        <h3>WYR </h3>
        <h4>(OptionA) or (OptionB)</h4>
        {/* use percentages to display */}
        <p>(voteA) vs. (voteB)</p>
        {/* insert comment feed component */}
        <CommentFeed />
        {/* insert comment form */}
        <CommentForm />
      </div>
      
    </main>
  )
}

export default Results;
