import "../styles/Projects.css";
import image from "../assets/Screenshot 2024-05-07 122514.png"
import img from "../assets/Screenshot 2024-05-06 145741.png"

function Projects() {
    return (
        <div className="container">
            {/* Card Wrapper */}
            <div className="card-wrapper">
                {/* Card 1 */}
                <div className="card">
                    <div className="card-front">
                        <img className="images" style={{backgroundSize:"cover"}} src={img} alt="dune part 1 movie poster" />
                    </div>
                    <div className="card-back">
                        <h3>Dune: Part One (2021)</h3>
                        <br />
                        <p>
                            A noble family becomes embroiled in a war for control over the galaxy s most valuable asset while its heir becomes troubled by visions of a dark future.
                        </p>
                    </div>
                </div>
                {/* Card 2 */}
                {/* <div className="card">
                    <div className="card-front">
                        <img src="https://image.tmdb.org/t/p/original/mFnF8tpPMqEwti2J2aMhYGZYdv0.jpg" alt="dune part 2 movie poster" />
                    </div>
                    <div className="card-back">
                        <h3>Dune: Part Two (2024)</h3>
                        <p>Denis Villeneuve</p>
                        <br />
                        <p>
                            Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.
                        </p>
                    </div>
                </div> */}
                {/* Card 3 */}
                <div className="card">
                    <div className="card-front">
                        <img className="box-img-1" src={image} alt="dune part 2 movie poster" />
                    </div>
                    <div className="card-back">
                        <h3>Calculator</h3>
                        <br />
                        <a href="https://gangwar22.github.io/Calculator/">Live App</a>
                        <br />
                        <br />
                        <p>
                        Certainly! Below is the HTML, CSS, and JavaScript code for a calculator with functions for deleting, clearing, adding, and calculating. The calculator is responsive.
                        </p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-front">
                        <img className="box-img-1" src="https://i.ibb.co/WPZf74s/Screenshot-from-2024-01-31-23-31-23.png" alt="dune part 2 movie poster" />
                    </div>
                    <div className="card-back">
                        <h3>Music Player</h3>
                        <br />
                        <p>
                        Full stack social media application built with <br/>HTML, CSS,JavaScript.
                        </p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-front">
                        <img className="box-img-1" src="https://i.ibb.co/s2tmz12/rock-paper-scissors-neon-icons-vector-copy.jpg" alt="dune part 2 movie poster" />
                    </div>
                    <div className="card-back">
                        <h3>Rock Paper & Sessior Game</h3>
                        <br />
                        <br />
                        <a href="https://gangwar22.github.io/Rock_paper_Scissor/">LIVE APP</a>
                        <br />
                        <br />
                        <p> 
                        simple rock paper scissors game. When the user clicks on one of the buttons, the computer will
                        randomly pick either a rock, a paper a scissors and a winner
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Projects;
