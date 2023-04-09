import React from "react";
import Navigation from "./Navigation";

import {Link} from "react-router-dom";

import icon from "../Icons/ambulo_icon_w.svg";

export default class Ambulo extends React.Component {
    render() {
        return(
            <div style={{marginBottom:"5%"}}>
                <Navigation/>
                <div style={{backgroundColor:"#90DAB9", height:"200px", margin:"1% 0 3% 0", opacity:".5", overflow:"hidden"}}>
                    <img src={icon} style={{height:"200%", width:"100%"}}/>
                </div>
                <div style={{margin:"auto", width:"50%"}}>
                    <h2 class="ambulo" style={{textAlign:"center"}}>Ambulo</h2>
                    <div style={{textAlign:"center"}}>
                        <div style={{display:"inline", marginRight:"10%"}}>
                            <div style={{color:"#90DAB9", display:"inline", fontWeight:"bold"}}>Timeframe: </div>
                            <div style={{display:"inline"}}>Nov. - Dec. 2017 (2 weeks)</div>
                        </div>
                        <div style={{display:"inline"}}>
                            <div style={{color:"#90DAB9", display:"inline", fontWeight:"bold"}}>Tools: </div>
                            <div style={{display:"inline"}}>React, Bootstrap, Firebase</div>
                        </div>
                        <div>
                            <div style={{color:"#90DAB9", display:"inline", fontWeight:"bold"}}>APIs: </div>
                            <div style={{display:"inline"}}>Google Map, Google Place, TrailAPI, Flickr</div>
                        </div>
                        <div style={{marginTop: "2%"}}>
                            <a class="amL" href="https://info343-aut17.github.io/Ambulo/#/" target="_blank" 
                                style={{marginRight:"5%"}}>View Application</a>
                            <a class="amL" href="https://github.com/INFO343-aut17/Ambulo" target="_blank">View GitHub Repo</a>
                        </div>
                    </div>
                    <div style={{marginTop:"5%"}}>
                        <div class="ambulo" style={{fontSize:"1.5em"}}>Context</div>
                        <div style={{paddingLeft:"5%"}}>
                            <div>This was a class project for INFO 343 - Client-side Development. My team designed and 
                                developed a web application about hiking catering to photographers.  
                            </div>
                            <div class="ambulo" style={{fontSize:"1.2em", marginTop:"2%"}}>Components</div>
                            <ul>
                                <li>Design: We wanted a simple one, taking inspiration from Airbnb</li>
                                <li>Search Engine: Limited by Place API</li>
                                <li>Trail Information: Based on the coordinates given by Place API, using TrailAPI</li>
                                <li>Photos: Using Flickr API, organizing trail results based on photo activity</li>
                                <li>Map: Using Google Map API to preview trail information</li>
                                <li>Accounts: Using Firebase, allows users to favorite trails</li>
                            </ul>
                        </div>
                        <div class="ambulo" style={{fontSize:"1.5em", marginTop:"2%"}}>Role</div>
                        <div style={{paddingLeft:"5%"}}>
                            <div>I was the Dev Lead connecting and cleaning the data between APIs, as well as tackling
                                on bugs my teammates had.  
                            </div>
                            <div style={{marginTop:"2%", textAlign:"center"}}>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}