import './App.css';
import Navbar from './components/Navbar';
import MainBody from './components/MainBody';
import ContactUs from './components/ContactUs';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Services from './components/Services';
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<MainBody/>} />
      </Routes>
    </>
  );
}

export default App;
