import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import "../pages/sign.css";
import Nlogo from "../Images/Nlogo.png";

function Signin() {

    const navigate = useNavigate();
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");
    const [error,setError]= useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        if(email === "sanjayhema@gmail.com" && password==="Heku@1432"){
            navigate("/in");
        }
        else if(email === "sanjaykumark8855@gmail.com" && password==="Sanjay1234"){
            navigate("/in");
        }
        else{
            setError(true);
        }
    }
    

    return(
        <div className="login-form">
            <div className="sign-page-logo">
                <img src={Nlogo} alt="Netflix Logo" onClick={() => navigate("/")} style={{cursor: 'pointer'}}/>
            </div>
            <div>
                <div className="card" >
                    <div className="login-form-main">
                        <h1 className="login-form-title">Sign In</h1>

                        {error && (
                            <div className="error-message">
                                Incorrect password. Please try again or you can
                                &nbsp;
                                <a href="#" style={{color:'white'}}>reset your password</a>
                            </div>
                        )}

                        <div className="card-body">
                            <form onSubmit={handleLogin}>
                                <div className="form-group">
                                    <input type="email" className="form-control input1" placeholder="Email or Phone number" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                
                                <div className="form-group" style={{marginTop: '18px'}}>
                                    <input type="password" className="form-control input2" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
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
                        <a href="/" style={{textDecoration: 'none', color:'white', fontSize: '15px'}}>Sign up now.</a>
                        <p style={{fontSize: '13px', fontWeight: 'initial', color:'#737373'}}>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot. 
                        <span style={{color: '#0071eb'}}>Learn more.</span>
                        </p>
                    </div>
                </div>

                {error && (
                    <div className="error-message">
                        Invalid logins, backend was not used so present please try with username: "sanjaykumark8855@gmail.com" an password: "Sanjay1234".
                    </div>
                )}


            </div>
        </div>
    )
}

export default Signin;