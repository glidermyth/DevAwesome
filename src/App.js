import './App.css';
import Navbar from './components/Navbar';
import MainBody from './components/MainBody';
import ContactUs from './components/ContactUs';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Services from './components/Services';
import {Routes,Route} from 'react-router-dom';
import {useState} from 'react';

function App() {

  const [darkMode,setDarkMode] = useState(false);
  const darkModeHandler = (val) =>{
      setDarkMode(val);
  }

  return (
    <>
      <Navbar darkModeHandler={darkModeHandler} darkMode={darkMode}/>
      <Routes>
        <Route path="/contact" element={<ContactUs darkMode={darkMode}/>} />
        <Route path="/signup" element={<SignUp darkMode={darkMode}/>} />
        <Route path="/services" element={<Services darkMode={darkMode}/>} />
        <Route path="/login" element={<Login darkMode={darkMode}/>} />
        <Route path="/" element={<MainBody darkMode={darkMode}/>} />
      </Routes>
    </>
  );
}

export default App;
