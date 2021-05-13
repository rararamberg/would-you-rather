import './CommentFeed.css'
// get set for question and comments
// use question id to separate organize comments based on id

function CommentFeed(props) {
  const {author, comment} = props.comment.fields
  return (
    <div key={props.comment.id} className="comment">
      {/* user can scroll through these functions */}
      <p>{comment}<span className="author"> - {author}</span></p>
      {/* <p> question id: {props.comment.fields.questionId}</p> */}
    </div>
  )
}

export default CommentFeed;