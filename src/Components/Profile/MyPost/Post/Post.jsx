import Style from './Post.module.css'

const Post = (props) => {
  return (
    <div className={Style.item}>
      <img
        src='https://www.planetaexcel.ru/upload/main/fc3/721.jpg.png'
        alt='avatarka'/>
      {props.message}
      <span>My post</span>
      <button>Like</button>

    </div>
  )
}

export default Post;