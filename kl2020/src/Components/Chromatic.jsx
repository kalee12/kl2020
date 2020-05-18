import React from "react";
import Navigation from "./Navigation";

import {Link} from "react-router-dom";

import icon from "../Icons/chromatic_icon_w.svg";

export default class Chromatic extends React.Component {
    render() {
        return(
            <div style={{marginBottom:"5%"}}>
                <Navigation/>
                <div style={{backgroundColor:"#668FBF", height:"200px", margin:"1% 0 3% 0", opacity:".5", overflow:"hidden"}}>
                    <img src={icon} style={{height:"200%", width:"100%"}}/>
                </div>
                <div style={{margin:"auto", width:"50%"}}>
                    <h2 class="chromatic" style={{textAlign:"center"}}>Chromatic</h2>
                    <div style={{textAlign:"center"}}>
                        <div style={{display:"inline", marginRight:"10%"}}>
                            <div style={{color:"#668FBF", display:"inline", fontWeight:"bold"}}>Timeframe: </div>
                            <div style={{display:"inline"}}>Nov - Dec 2017</div>
                        </div>
                        <div style={{display:"inline"}}>
                            <div style={{color:"#668FBF", display:"inline", fontWeight:"bold"}}>Tools: </div>
                            <div style={{display:"inline"}}>Java, Firebase, Adobe XD</div>
                        </div>
                    </div>
                    <div style={{marginTop:"5%"}}>
                        <div class="chromatic" style={{fontSize:"1.5em"}}>Context</div>
                        <div style={{paddingLeft:"5%"}}>
                            <div>This was a class project for INFO 448 - Android Development. For about four weeks,
                                we were tasked with the following
                            </div>
                            <ul>
                                <li>primarily use the Android SDK</li>
                                <li>one major activity per person</li>
                                <li>application must make significant use of some kind of mobile sensor or capability</li>
                                <li>usable across multiple configurations</li>
                                <li>user experience should be well-designed</li>
                            </ul>
                        </div>
                        <div class="chromatic" style={{fontSize:"1.5em", marginTop:"2%"}}>Role</div>
                        <div style={{paddingLeft:"5%"}}>
                            <div>I developed the interactions in which a users chooses to import their own photo. Afterwards,
                                A user can drag along the photo to pick out the colors they wanted in their palette.
                            </div>
                            <a class="chL" href="https://github.com/kalee12/chromatic" target="_blank" 
                                    style={{display:"block", textAlign:"center"}}>View GitHub Repo</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}