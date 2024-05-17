import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Home/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
