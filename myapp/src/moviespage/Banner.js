import React, {useEffect, useState} from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import Nlogo from "../Images/Nlogo.png";
import "./Banner.css"
import Row from './Row';
import Footer from '../components/footer';


function Banner() {

    const navigate = useNavigate();
      const location=useLocation();

      const islocation=location.pathname==="/";


    const inputStyle = {
        border: '1px solid white',
      };


    return (
        <header className = "banner">

        <div className="showcase-top">
            <img src={Nlogo} alt="Netflix Logo" onClick={() => navigate("/")} style={{cursor: 'pointer'}}/>
            
            {islocation || (
            <button className="btn btn-danger sign" onClick={() => navigate("/")}>Sign out</button>
            )}

            {islocation && (
            <button className="btn btn-danger sign" onClick={() => navigate("/signin")}>Sign In</button>
            )}
        
        </div>

            <div className = "banner__contents">
                <h1 className = "banner__title">
                    The Meg 2
                </h1>

                <div className = "banner__buttons">
                    <button className = "banner__button">Play</button>
                    <button className = "banner__button" onClick={() => navigate("/movies")}>My List</button>
                </div>
                <h1 className = "banner__description">A research team encounters multiple threats while exploring the depths of the ocean, including a malevolent mining operation.</h1>
            </div>

            <div className = "banner__fadeBottom" ></div>
            <Row/>
            <Footer/>
        </header>
    )
}

export default Banner