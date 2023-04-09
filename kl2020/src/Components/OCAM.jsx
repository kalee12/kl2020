import React from "react";
import Navigation from "./Navigation";

import {Link} from "react-router-dom";

import icon from "../Icons/default_icon_w.svg";

export default class OCAM extends React.Component {
    render() {
        return(
            <div style={{marginBottom:"5%"}}>
                <Navigation/>
                <div style={{backgroundColor:"#3d1070", height:"200px", margin:"1% 0 3% 0", opacity:".5", overflow:"hidden"}}>
                    <img src={icon} style={{height:"200%", width:"100%"}}/>
                </div>
                <div style={{margin:"auto", width:"50%"}}>
                    <h2 class="ocam" style={{textAlign:"center"}}>Orbis Cascade Alliance Map</h2>
                    <div style={{textAlign:"center"}}>
                        <div style={{display:"inline", marginRight:"10%"}}>
                            <div style={{color:"#3d1070", display:"inline", fontWeight:"bold"}}>Timeframe: </div>
                            <div style={{display:"inline"}}>Mar - Apr 2020</div>
                        </div>
                        <div style={{display:"inline"}}>
                            <div style={{color:"#3d1070", display:"inline", fontWeight:"bold"}}>Tools: </div>
                            <div style={{display:"inline"}}>HTML5, CSS, JS, JSON, LibGuides CMS</div>
                        </div>
                    </div>
                    <div style={{marginTop: "2%", textAlign:"center"}}>
                                <a class="ocamL" href="https://kalee12.github.io/OCAM/" target="_blank" 
                                    style={{marginRight:"5%"}}>Current Version</a>
                                <a class="ocamL" href="https://github.com/kalee12/OCAM" target="_blank">View GitHub Repo</a>
                            </div>
                    <div style={{marginTop:"5%"}}>
                        <div class="ocam" style={{fontSize:"1.5em"}}>Context</div>
                        <div style={{paddingLeft:"5%"}}>
                            <div>Five weeks into working at Seattle University, the library had to close
                                due to COVID-19. Due to my experience, the dean wanted to let me in to their preparations to create a map in the case a SU student is stuck in another area but has access to one
                                of the alliance members.
                            </div>
                        </div>
                        <div class="ocam" style={{fontSize:"1.5em", marginTop:"2%"}}>The Task at Hand</div>
                        <div style={{paddingLeft:"5%"}}>
                            <div style={{marginBottom:"2%"}}>
                                The Orbis Cascade Alliance already has a map of their own.
                            </div>

                            <a class="ocamL" href="https://www.orbiscascade.org/member/" target="_blank" 
                            style={{display:"block", textAlign:"center"}}>View Orbis Cascade Alliance's Map</a>

                            <div style={{marginTop:"2%"}}>
                                <div class="ocam" style={{fontSize:"1.2em", marginTop:"2%"}}>Main Issues</div>
                                <ul>
                                    <li>Lack of responsive design: creates redundancies</li>
                                    <li>Clicking a pointer displays an empty info window</li>
                                    <li>Pointers' coordinates are based on the campus rather than libraries</li>
                                    <li>Links to websites are to the universities' main site rather than their library</li>
                                    <li>Map doesn't consider multiple campuses within a university</li>
                                    <li>Map isn't a standalone asset to embed into other websites</li>
                                </ul>
                            </div>
                        </div>
                        <div class="ocam" style={{fontSize:"1.5em", marginTop:"2%"}}>My Solution</div>
                        <div style={{paddingLeft:"5%", marginTop:"2%"}}>
                            <div class="ocam" style={{fontSize:"1.2em", marginTop:"2%"}}>Components</div>
                            <ul>
                                <li>Data is structured as JSON</li>
                                <li>Google Maps API</li>
                                <li>HTML5, CSS, JavaScript</li>
                            </ul>

                            <div class="ocam" style={{fontSize:"1.2em", marginTop:"2%"}}>Improvements</div>
                            <ul>
                                <li>Map space doesn't feel taken up due to member selection being to the side</li>
                                <li>Clicking pointers: pans and / or zooms map, point changes focus for current selection</li>
                                <li>Navigate between different campuses for one alliance member</li>
                                <li>Responsive Design: reduces UX components and gives a straightforward experience</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}