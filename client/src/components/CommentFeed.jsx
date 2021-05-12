
// get set for question and comments
// use question id to separate organize comments based on id

function CommentFeed(props) {
  const {author, comment} = props.comment.fields
  return (
    <div className="comment-feed">
      {/* user can scroll through these functions */}
      <p>{comment}<em> - {author}</em></p>
      {/* <p> question id: {props.comment.fields.questionId}</p> */}
    </div>
  )
}

export default CommentFeed;