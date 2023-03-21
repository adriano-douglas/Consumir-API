import './Post.css'

const Post = (props) => {
  return (
    <div className='postContainer'>
      <h3 className="title">{props.title}</h3>
      <p className="body">{props.body}</p>
    </div>
  )
}

export default Post