import React from "react";
import { useNavigate } from "react-router-dom";
import "../pages/sign.css";
import Nlogo from "../Images/Nlogo.png";

function Signin() {

    const navigate = useNavigate();

    return(
        <div className="login-form">
            <div className="sign-page-logo">
                <img src={Nlogo} alt="Netflix Logo" onClick={() => navigate("/")} style={{cursor: 'pointer'}}/>
            </div>
            <div>
                <div className="card" >
                    <div className="login-form-main">
                        <h1 className="login-form-title">Sign In</h1>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <input type="email" className="form-control input1" placeholder="Email or Phone number" />
                                </div>
                                
                                <div className="form-group" style={{marginTop: '18px'}}>
                                    <input type="password" className="form-control input2" placeholder="Enter password" />
                                </div>
                                <div className="form-group" style={{marginTop: '30px'}}>
                                    <button className="btn btn-danger login-button">Signin</button>
                                </div>
                                
                                <div className="login-form-help" style={{marginTop: '10px'}}>
                                    <div className="login-form-forgotPass" style={{textAlign:'center'}}>
                                        <a href="#" style={{textDecoration: 'none', color:'white', fontSize: '15px'}}>Forgot password?</a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="login-form-option" style={{marginTop: '20px'}}>
                        <span style={{fontSize: '14px', color:'#737373'}}>New to Netflix? </span>
                        <a href="#" style={{textDecoration: 'none', color:'white', fontSize: '15px'}}>Sign up now.</a>
                        <p style={{fontSize: '13px', fontWeight: 'initial', color:'#737373'}}>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot. 
                        <span style={{color: '#0071eb'}}>Learn more.</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin;