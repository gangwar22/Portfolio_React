import image from '../assets/WhatsApp Image 2024-05-06 at 16.19.56_ff70f6bb.jpg'; // Import the image
import "../styles/home.css";

function Home() {
  return (
    <>
    <div className="home" id="home" style={{ height: "100vh", width: "100%", backgroundSize: "cover", backgroundColor: "black" }}>
      <div className='img'>
        <img src={image} alt="image"  style={{height:"500px" , width:"500px", borderRadius:"50%",marginTop:"25vh",marginLeft:"120px",border:"20px solid white"}} />
      </div>
      <div className="heading" style={{marginLeft:"200px"}}>
        <h1>Hello, I’m <span style={{color:"yellow"}}>Rahul Gangwar</span> <br />I’m a full stack web developer</h1>
        <a href="/projects"><button className="work-button" style={{marginLeft:"330px"}}>View My Work</button></a>
      </div>
    </div>
    
    </>
  );
}

export default Home;
