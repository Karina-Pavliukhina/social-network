import Style from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={Style.nav}>
      <div>
        <a className={`${Style.item} ${Style.active}`}
           href='#'>Profile</a>
      </div>
      <div>
        <a className={Style.item}
           href='#'>Message</a>
      </div>
      <div>
        <a className={Style.item}
           href='#'>News</a>
      </div>
      <div>
        <a className={Style.item}
           href='#'>Music</a>
      </div>
      <div>
        <a className={Style.item}
           href='#'>Settings</a>
      </div>
    </nav>
  );
}
export default Navbar;