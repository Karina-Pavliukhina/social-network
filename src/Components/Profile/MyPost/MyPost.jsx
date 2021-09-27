import Style from './MyPost.module.css'

const MyPost = () => {
  return (
    <div className={Style.posts}>
      <div> my post</div>
      <textarea>  </textarea>
      <div>
        <button>Add new post</button>
        <button>Remove post</button>
      </div>
    </div>
  )
}
export default MyPost;