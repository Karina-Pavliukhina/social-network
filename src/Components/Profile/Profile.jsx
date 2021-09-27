// import Style from './Profile.module.css'
import MyPost from "./MyPost/MyPost";
import Post from './MyPost/Post/Post'

const Profile = () => {
  return (
    <div className='wrapper-content'>
      {/*<img*/}
      {/*  src='https://cs5.pikabu.ru/images/previews_comm/2015-02_3/14237322009895.jpg'*/}
      {/*  alt='logo'/>*/}
      <div>
        ava + info
      </div>
      <MyPost/>
      <Post message='Hi! How are you?'/>
      <Post message='My first post'/>

    </div>
  )
}
export default Profile;