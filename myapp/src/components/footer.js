import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {

    const paragraphStyle = {
        color: "rgba(255, 255, 255, 0.7)",
      };
    
      const underlineStyle = {
        textDecorationLine: "underline",
      };

    return(
        <footer className="footer" style={{marginTop: '100px', padding:'37px'}}>
            <div className="footer-cols">
                <div className="container">
                <p style={paragraphStyle}>Questions?{" "}
                    <span style={underlineStyle}>Call 000-800-040-1843</span>
                </p>
                    <div className="row">
                        <div className="col-md-4">
                            <ul>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Media Center</a></li>
                                <li><a href="#">Ways to Watch</a></li>
                                <li><a href="#">Cookie Preferences</a></li>
                                <li><a href="#">Speed Test</a></li>
                            </ul>
                        </div>

                        <div className="col-md-4">
                            <ul>
                                <li><a href="#">Help Centre</a></li>
                                <li><a href="#">Investor Relations</a></li>
                                <li><a href="#">Terms of Use</a></li>
                                <li><a href="#">Corporate Information</a></li>
                                <li><a href="#">Legal Notices</a></li>
                            </ul>
                        </div>

                        <div className="col-md-4">
                            <ul>
                                <li><a href="#">Account</a></li>
                                <li><a href="#">Jobs</a></li>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">Only on Netflix</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;