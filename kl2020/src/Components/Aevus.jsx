import React from "react";
import Navigation from "./Navigation";

import {Link} from "react-router-dom";

import icon from "../Icons/aevus_icon_w.svg";

export default class Aevus extends React.Component {
    render() {
        return(
            <div style={{marginBottom:"5%"}}>
                <Navigation/>
                <div style={{backgroundColor:"#90DAC7", height:"200px", margin:"1% 0 3% 0", opacity:".5", overflow:"hidden"}}>
                    <img src={icon} style={{height:"200%", width:"100%"}}/>
                </div>
                <div style={{margin:"auto", width:"50%"}}>
                    <h2 class="aevus" style={{textAlign:"center"}}>Aevus</h2>
                    <div style={{textAlign:"center"}}>
                        <div style={{display:"inline", marginRight:"10%"}}>
                            <div style={{color:"#90DAC7", display:"inline", fontWeight:"bold"}}>Timeframe: </div>
                            <div style={{display:"inline"}}>Ongoing</div>
                        </div>
                        <div style={{display:"inline"}}>
                            <div style={{color:"#90DAC7", display:"inline", fontWeight:"bold"}}>Tools: </div>
                            <div style={{display:"inline"}}>Adobe Illustrator, XD</div>
                        </div>
                    </div>
                    <div style={{marginTop:"5%"}}>
                        <div class="aevus" style={{fontSize:"1.5em"}}>Context</div>
                        <div style={{paddingLeft:"5%"}}>
                            <div>I've dealt with eczema for as long as I could remember. I had a really terrible
                                flare while I was learning Android development. I learned that consuming dairy
                                was a major catalyst to my episodes. I struggled the first year having to give
                                up the foods I liked. I've been wanting to design and develop my own app for this
                                sort of problem.
                            </div>
                        </div>
                        <div class="aevus" style={{fontSize:"1.5em", marginTop:"2%"}}>The Task</div>
                        <div style={{paddingLeft:"5%"}}>
                            <div class="aevus" style={{fontSize:"1.2em", marginTop:"2%"}}>Currently Working On</div>
                            <ul>
                                <li>Research: Gamification, habit development, different causes of eczema, hippa</li>
                                <li>Conceptualizing: Tracking experience (diet? lotions?)</li>
                                <li>Design: Experience vs functionality?</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}