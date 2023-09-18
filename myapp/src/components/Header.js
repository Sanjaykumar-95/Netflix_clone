import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Nlogo from "../Images/Nlogo.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../components/netflix.css"

function Header() {
      const navigate = useNavigate();
      const location=useLocation();

      const islocation=location.pathname==="/in";


    const inputStyle = {
        border: '1px solid white',
      };


  return (
    <header className="showcase">
      
      <div className="showcase-top">
      <img src={Nlogo} alt="Netflix Logo" onClick={() => navigate("/")} style={{cursor: 'pointer'}}/>
        {islocation && (
          <button className="btn btn-danger sign" onClick={() => navigate("/")}>Sign out</button>
        )}

        {islocation || (
          <button className="btn btn-danger sign" onClick={() => navigate("/signin")}>Sign In</button>
        )}
      </div>

      <div className="showcase-content">

        {islocation && (
          <p style={{fontSize:'28px', fontWeight: '100'}}>Welcome back!</p>
          )}

        <h1>Laughter. Tears. Thrills. Find it all on Netflix.</h1>
        <p style={{ fontSize: '25px' }}>Endless entertainment starts at just ₹ 149. Cancel anytime.</p>

        <form>
          
        {islocation || (
          <p style={{ fontSize: '20px' }}>Ready to watch? Enter your email to create or restart your membership.</p>
        )}

        <div className="input-group mb-5 textstart">
            <div className="input-group mb-5 text">

              {islocation || (
                <input type="email" className="form-control" placeholder="Email address" aria-label="Recipient's username" aria-describedby="button-addon2" style={inputStyle} required/>
              )}

              {islocation ||(
                <button className="btn btn-lg btn-danger" style={{ backgroundColor: 'red' }}> Get Started &emsp; <span style={{ fontSize: '25px' }}> > </span></button>
              )}

              {islocation && (
                <button className="btn btn-lg btn-danger" style={{ backgroundColor: 'red' }}> Finish Sign Up &emsp; <span style={{ fontSize: '25px' }}> > </span></button>        
              )}

            </div>
            </div>
        </form>
      
      </div>
    </header>
  );
}

export default Header;
