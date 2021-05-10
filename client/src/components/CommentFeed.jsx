
// get set for question and comments
// use question id to separate organize comments based on id

function CommentFeed(props) {
  return (
    <div className="comment-feed">
      {/* user can scroll through these functions */}
      <p>Feed: comments shown here</p>
      <p>Author: {props.comment.fields.author}</p>
      <p>Comment: {props.comment.fields.comment} </p>
    </div>
  )
}

export default CommentFeed;