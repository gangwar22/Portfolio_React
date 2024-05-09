import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Component/Navbar";
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Projects from './Component/Projects';
import "./styles/home.css"; // Assuming the styles for Home component are shared

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path='*' element={<p>404 Page not found</p>} />
      </Routes>
    </Router>
  );
}

export default App;
