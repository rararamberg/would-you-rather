
// get set for question and comments
// use question id to separate organize comments based on id

function CommentFeed(props) {
  return (
    <div className="comment-feed">
      {/* user can scroll through these functions */}
      <h6>Feed: comments shown here</h6>
      <p>Author: {props.comment.fields.author}</p>
      <p>Comment: {props.comment.fields.comment} </p>
      <p> question id: {props.comment.fields.questionId}</p>
    </div>
  )
}

export default CommentFeed;