import React from "react";
import slide5 from "../Images/slide5.png"
import slide3 from "../Images/slide3.jpg"
import slide2 from "../Images/slide2-video.m4v"
import vslide from "../Images/slide4-video.m4v"
import slide4 from "../Images/slide4.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPlus } from "react-icons/fa";

function Section(){

    const icon={
      fontSize: '20x',
      color: 'white',
      float: 'right', 
      fontWeight: 'bold',
    };

    const inputStyle = {
        color: 'white',
        border: '1px solid white',
        with: '3    0%',
      };

    return(
        <section className="style-cards">
            <div className="card-0">
            <img src={slide5} alt="Netflix Mobile"/>
            <div className="desc-0">
                <h1>Create profiles for kids.</h1>
                <h3>Send kids on adventures with their favourite characters in a space made just for them—free with your membership.</h3>
            </div>
        </div>
        <div className="card-1">
            <div className="desc-1">
                <h1>Enjoy on your TV.</h1>
                <h3>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h3>
            </div>
            <video className="video-1" autoPlay playsInline muted loop>
                <source src={slide2} type="video/mp4"/>
            </video>
        </div>
        <div class="card-2">
            <img src={slide3} alt="Netflix Mobile"/>
            <div class="desc-2">
                <h1>Download your shows to watch offline.</h1>
                <h3>Save your favourites easily and always have something to watch.</h3>
            </div>
        </div>
        <div class="card-3">
            <div class="desc-3">
                <h1>Watch everywhere.</h1>
                <h3>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h3>
            </div>
            <img src={slide4} alt="Device-Pile-In"/>
            <video className="video-2" autoPlay playsInline muted loop>
                <source src={vslide} type="video/mp4"/>
            </video>
        </div>

        <div className="lastsec">
            <div className="faq">
            <h1>Frequently Asked Questions</h1>
            <ul className="questions">
                <li>
                <span>What is Netflix?</span>
                <FaPlus style={icon}/>
                </li>
                <li>
                <span>How much does Netflix cost?</span>
                <FaPlus style={icon}/>
                </li>
                <li>
                <span>Where can I watch?</span>
                <FaPlus style={icon}/>
                </li>
                <li>
                <span>How do I cancel?</span>
                <FaPlus style={icon}/>
                </li>
                <li>
                <span>What can I watch on Netflix?</span>
                <FaPlus style={icon}/>
                </li>
                <li>
                <span>Is Netflix good for kids?</span>
                <FaPlus style={icon}/>
                </li>
            </ul>
            <div className="input">
                <form>
        <p className="section-p" style={{ fontSize: '20px' }}>Ready to watch? Enter your email to create or restart your membership.</p>
        <div className="input-group mb-5 textstart" style={{width: '100%', textAlign: 'center', position: 'absolute', left: '0', paddingLeft: '0.5rem',display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
            <div className="input-group mb-3 text" style={{width: '50%'}}>
                <input type="text" className="form-control" placeholder="Email address" aria-label="Recipient's username" aria-describedby="button-addon2" style={inputStyle}/>
                <button className="btn btn-lg btn-danger" style={{ backgroundColor: 'red' }}> Get Started &emsp; <span style={{ fontSize: '25px' }}> > </span></button>        
            </div>
            </div>
        </form>
            </div>
            </div>
        </div>
        </section>
    )
}

export default Section;