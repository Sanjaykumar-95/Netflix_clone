import React, {useState} from "react";
import slide5 from "../Images/slide5.png"
import slide3 from "../Images/slide3.jpg"
import slide2 from "../Images/slide2-video.m4v"
import vslide from "../Images/slide4-video.m4v"
import slide4 from "../Images/slide4.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPlus } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useLocation } from "react-router-dom";

function FAQItem({ question, answer }) {

    const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

    const icon={
        fontSize: '20x',
        color: 'white',
        float: 'right', 
        fontWeight: 'bold',
      };
  
    return (
      <li className="ques">
        <span>{question}</span>
        
        {isOpen ? (
            <ImCross style={{fontWeight:'bold', float:'right', fontSize: '20px'}} onClick={toggleDropdown} />
        ) : (
            <FaPlus style={icon} onClick={toggleDropdown} />
        )}
  
        {isOpen && (
          <div className="dropdown-message">
            <p style={{backgroundColor:'#303030', fontSize: '1.2rem'}}>{answer}</p>
          </div>
        )}
      </li>
    );
  }

function Section(){

    const ans={
        marginTop:'-48px',
    }

    const faqData = [
        {
            question: "What is Netflix?",
            answer:(
                <div style={ans}>
                    Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more-on thousands of internet-connected devices.
                    <br></br>
                    <br></br>
                    You can watch as much as you want, whenever you want, without a single ad-all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
                </div>
            )
        },
        {
            question: "How much does Netflix cost?",
            answer:(
                <div style={ans}>
                    Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 649 to ₹ 149 a month. No extra costs, no contracts.
                </div>
            )
        },
        {
            question: "Where can I watch?",
            answer:(
                <div style={ans}>
                    Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
                    <br></br><br></br>
                    You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
                </div>
            )
        },
        {
            question: "How do I cancel?",
            answer:(
                <div style={ans}>
                    Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
                </div>
            )
        },
        {
            question: "What can I watch on Netflix?",
            answer:(
                <div style={ans}>
                    The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.
                    <br></br><br></br>
                    Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
                </div>
            )
        },
        {
            question: "Is Netflix good for kids?",
            answer:(
                <div style={ans}>
                    The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.  Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
                </div>
            )
        },
];

    const location=useLocation();
    const islocation=location.pathname==="/in";

    const inputStyle = {
        color: 'white',
        border: '1px solid white',
        with: '30%',
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
            <h1 style={{fontWeight:'bold'}}>Frequently Asked Questions</h1>
                
                <ul className="questions">
                    {faqData.map((item,index) =>(
                        <FAQItem key={index} question={item.question} answer={item.answer}/>
                    ))}
                </ul>

            <div className="input">
                <form>
                    <p className="section-p" style={{ fontSize: '20px' }}>Ready to watch? Enter your email to create or restart your membership.</p>
                    <div className="input-group mb-5 textstart" style={{width: '100%', textAlign: 'center', position: 'absolute', left: '0', paddingLeft: '0.5rem',display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center'}}>
                    <div className="input-group mb-3 text" style={{width: '50%',justifyContent:'center'}}>

                    {islocation || (
                    <input type="email" className="form-control" placeholder="Email address" aria-label="Recipient's username" aria-describedby="button-addon2" style={inputStyle} required/>
                )}

                {islocation ||(
                    <button className="btn btn-lg btn-danger" style={{ backgroundColor: 'red' }}> Get Started &emsp; <span style={{ fontSize: '25px' }}> > </span></button>
                )}

                {islocation && (
                    <button className="btn btn-lg btn-danger" style={{ backgroundColor: 'red', fontWeight:'bold', marginTop:'15px'}}> Finish Sign Up &emsp; <span style={{ fontSize: '25px' }}> > </span></button>        
                )}

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