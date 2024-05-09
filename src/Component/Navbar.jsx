import { HashLink as Link } from 'react-router-hash-link';
import "../styles/App.css";

function Navbar() {
  return (
    <nav style={{backgroundColor:"black"}}>
      <h1 className='h1' style={{color:"yellow"}}>Rahul Gangwar</h1>
      <main className='main' style={{color:"yellow"}}>
        <Link className='a' smooth to="/#home">Home</Link>
        <Link className='a' smooth to="/about">About</Link>
        <Link className="a" smooth to="/projects">Projects</Link> 
        <Link className='a' smooth to="/contact">Contact</Link>
      </main>
    </nav>
  );
}

export default Navbar;
