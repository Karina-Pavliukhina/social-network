import './App.css';
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Profile from "./Components/Profile";


const App = () => {
  return (
    <div className='wrapper'>
      <Header/>
      <Navbar/>
      <Profile/>
    </div>
  )
    ;
}

export default App;
