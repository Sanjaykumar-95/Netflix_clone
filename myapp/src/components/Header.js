import React from "react";
import Nlogo from "../Images/Nlogo.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../components/netflix.css"

function Header() {
    const inputStyle = {
        color: 'white',
        border: '1px solid white',
      };

      const logoStyle = {
        filter: 'brightness(100%)', // Increase brightness as needed
      };

  return (
    <header className="showcase">
      <div className="showcase-top">
        <img src={Nlogo} alt="Netflix Logo" style={logoStyle} />
        <button className="btn btn-danger sign">Sign In</button>
      </div>
      <div className="showcase-content">
        {/* <p>Welcome back!</p> */}
        <h1>Laughter. Tears. Thrills. Find it all on Netflix.</h1>
        <p style={{ fontSize: '25px' }}>Endless entertainment starts at just ₹ 149. Cancel anytime.</p>

        <form>
        <p style={{ fontSize: '20px' }}>Ready to watch? Enter your email to create or restart your membership.</p>
        <div className="input-group mb-5 textstart">
            <div className="input-group mb-5 text">
                <input type="text" className="form-control" placeholder="Email address" aria-label="Recipient's username" aria-describedby="button-addon2" style={inputStyle}/>
                <button className="btn btn-lg btn-danger" style={{ backgroundColor: 'red' }}> Get Started &emsp; <span style={{ fontSize: '25px' }}> > </span></button>        
            </div>
            </div>
        </form>
      </div>
    </header>
  );
}

export default Header;
