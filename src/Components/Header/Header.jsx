import Style from './Header.module.css'

const Header = () => {
  return (
    <header className={Style.header}>
      <img
        src='http://rockretrospektive.ru/wp-content/uploads/2020/05/cropped-rock-retrospektive-white.png'
        alt='head'/>
    </header>
  )
}
export default Header;