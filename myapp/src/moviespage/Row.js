import React from "react";
import image1 from "../Images/the-meg-2.jpg";
import image2 from "../Images/the-nun-2.jpg";
import image3 from "../Images/missshettymrpolishetty-posterart.jpg"
import image4 from "../Images/jailer.jpg";
import image5 from "../Images/Bro.jpg";
import image6 from "../Images/samajavaragamana.jpg";
import image7 from "../Images/baby.png";
import "./row.css";

function Row(){

    const imagestyle={
        height: '300px',
        ObjectFit: 'cover',
    }

    return(
        
        <div class="row">
            <ul>
                <li>
                    <a data-toggle="modal" data-target="#myModal1" href="https://youtu.be/dG91B3hHyY4?si=beM968vD9re1-L4l"><img src={image1} alt="" style={imagestyle}/></a>
                </li>
                <li>
                    <a data-toggle="modal" data-target="#myModal1" href="https://youtu.be/QF-oyCwaArU?si=dqpsj08GFx3I7sqm"><img src={image2} alt="" style={imagestyle}/></a>
                </li>
                <li>
                    <a data-toggle="modal" data-target="#myModal1" href="https://youtu.be/HcAjTg8fpOM?si=1QJfbCvxXKX0d658"><img src={image3} alt="" style={imagestyle}/></a>
                </li>
                <li>
                    <a data-toggle="modal" data-target="#myModal1" href="https://youtu.be/xenOE1Tma0A?si=yGMMed9mjWsbIP8k"><img src={image4} alt="" style={imagestyle}/></a>
                </li>
                <li>
                    <a data-toggle="modal" data-target="#myModal1" href="https://youtu.be/4UP0lI1awvU?si=qZco-u8pp_asdF6k"><img src={image5} alt="" style={imagestyle}/></a>
                </li>
                <li>
                    <a data-toggle="modal" data-target="#myModal1" href="https://youtu.be/NrRhdApPgmQ?si=5-wXpP2GfMjvym3S"><img src={image6} alt="" style={imagestyle}/></a>
                </li>
                <li>
                    <a data-toggle="modal" data-target="#myModal1" href="https://youtu.be/_npN4uwDMLk?si=jvyJ8ZQ-JJs1-8CN"><img src={image7} alt="" style={imagestyle}/></a>
                </li>
                <li>
                    <a data-toggle="modal" data-target="#myModal1" href="https://youtu.be/_npN4uwDMLk?si=jvyJ8ZQ-JJs1-8CN"><img src={image7} alt="" style={imagestyle}/></a>
                </li>
                <li>
                    <a data-toggle="modal" data-target="#myModal1" href="https://youtu.be/4UP0lI1awvU?si=qZco-u8pp_asdF6k"><img src={image5} alt="" style={imagestyle}/></a>
                </li>
                <li>
                    <a data-toggle="modal" data-target="#myModal1" href="https://youtu.be/HcAjTg8fpOM?si=1QJfbCvxXKX0d658"><img src={image3} alt="" style={imagestyle}/></a>
                </li>
                <li>
                    <a data-toggle="modal" data-target="#myModal1" href="https://youtu.be/dG91B3hHyY4?si=beM968vD9re1-L4l"><img src={image1} alt="" style={imagestyle}/></a>
                </li>
                <li>
                    <a data-toggle="modal" data-target="#myModal1" href="https://youtu.be/QF-oyCwaArU?si=dqpsj08GFx3I7sqm"><img src={image2} alt="" style={imagestyle}/></a>
                </li>
                <li>
                    <a data-toggle="modal" data-target="#myModal1" href="https://youtu.be/NrRhdApPgmQ?si=5-wXpP2GfMjvym3S"><img src={image6} alt="" style={imagestyle}/></a>
                </li>
                <li>
                    <a data-toggle="modal" data-target="#myModal1" href="https://youtu.be/xenOE1Tma0A?si=yGMMed9mjWsbIP8k"><img src={image4} alt="" style={imagestyle}/></a>
                </li>
                <li>
                    <a data-toggle="modal" data-target="#myModal1" href="https://youtu.be/xenOE1Tma0A?si=yGMMed9mjWsbIP8k"><img src={image4} alt="" style={imagestyle}/></a>
                </li>
                <li>
                    <a data-toggle="modal" data-target="#myModal1" href="https://youtu.be/HcAjTg8fpOM?si=1QJfbCvxXKX0d658"><img src={image3} alt="" style={imagestyle}/></a>
                </li>
                <li>
                    <a data-toggle="modal" data-target="#myModal1" href="https://youtu.be/QF-oyCwaArU?si=dqpsj08GFx3I7sqm"><img src={image2} alt="" style={imagestyle}/></a>
                </li>
                <li>
                    <a data-toggle="modal" data-target="#myModal1" href="https://youtu.be/_npN4uwDMLk?si=jvyJ8ZQ-JJs1-8CN"><img src={image7} alt="" style={imagestyle}/></a>
                </li>
                <li>
                    <a data-toggle="modal" data-target="#myModal1" href="https://youtu.be/NrRhdApPgmQ?si=5-wXpP2GfMjvym3S"><img src={image6} alt="" style={imagestyle}/></a>
                </li>
                <li>
                    <a data-toggle="modal" data-target="#myModal1" href="https://youtu.be/4UP0lI1awvU?si=qZco-u8pp_asdF6k"><img src={image5} alt="" style={imagestyle}/></a>
                </li>
                <li>
                    <a data-toggle="modal" data-target="#myModal1" href="https://youtu.be/dG91B3hHyY4?si=beM968vD9re1-L4l"><img src={image1} alt="" style={imagestyle}/></a>
                </li>
            </ul>
        </div>
    )
}

export default Row;