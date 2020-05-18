import React from "react";
import Navigation from "./Navigation";

import {Link} from "react-router-dom";

import icon from "../Icons/HH_icon_w.svg";

export default class HH extends React.Component {
    render() {
        return(
            <div style={{marginBottom:"5%"}}>
                <Navigation/>
                <div style={{backgroundColor:"#1FB3A9", height:"200px", margin:"1% 0 3% 0", opacity:".5", overflow:"hidden"}}>
                    <img src={icon} style={{height:"200%", width:"100%"}}/>
                </div>
                <div style={{margin:"auto", width:"50%"}}>
                    <h2 class="hh" style={{textAlign:"center"}}>Husky Hotspots</h2>
                    <div style={{textAlign:"center"}}>
                        <div style={{display:"inline", marginRight:"10%"}}>
                            <div style={{color:"#1FB3A9", display:"inline", fontWeight:"bold"}}>Timeframe: </div>
                            <div style={{display:"inline"}}>Feb - Mar 2018</div>
                        </div>
                        <div style={{display:"inline"}}>
                            <div style={{color:"#1FB3A9", display:"inline", fontWeight:"bold"}}>Tools: </div>
                            <div style={{display:"inline"}}>Adobe XD, Figma</div>
                        </div>
                    </div>
                    <div style={{marginTop:"5%"}}>
                        <div class="hh" style={{fontSize:"1.5em"}}>Context</div>
                        <div style={{paddingLeft:"5%"}}>
                            <div>This was a class project for INFO 360 - Design Thinking. Our theme for the class was transportation. 
                                "How do we create designs that alleviate transportation problems and congestion in Seattle?" 
                            </div>
                            <div class="hh" style={{fontSize:"1.2em", marginTop:"2%"}}>Research</div>
                            <div>
                            My partner and I conducted interviews and based on the fact that the majority were commuters, 
                            we decided our scope would be the UW campus. One of the problems facing UW students is not 
                            knowing which lesser known bus routes will take them to the same destination. Based on our 
                            research, UW students typically take the bus for only a few stops within the U district. 
                            However, students will tend to look for bus lines that are closest to them and are the most 
                            familiar with. This results in only a few routes that are in the highest demand in the UW area.
                            </div>
                        </div>
                        <div class="hh" style={{fontSize:"1.5em", marginTop:"2%"}}>Concept</div>
                        <div style={{paddingLeft:"5%"}}>
                            <div>To solve this issue, we propose Husky Hotspots, a series of interactive bus stops at highly trafficked 
                                areas within the U District. These are a series of touch-screen displays that shows a map of these 
                                “hotspots” throughout U-District where any UPASS holder can get a list of routes to other hotspots. 
                                We chose to map out “hotspots” instead of bus stops like OneBusAway and Google Maps because UW students 
                                that we interviewed were more familiar with general areas like the UW Medical Center, the HUB, Red Square, 
                                and U Village, rather than specific bus stops. Also, this allows for a less cluttered overview map of 
                                U District when showing hot spots because there are far less major destinations than there are bus stops. 
                            </div>
                            <div style={{marginTop:"2%", textAlign:"center"}}>
                                <a class="hhL" href="https://docs.google.com/document/d/1Z64GRsqMW57wetMQOA-X_HZSG_744dIDiszqStqBy8w/edit" target="_blank" 
                                    style={{marginRight:"5%"}}>View Design Spec</a>
                                <a class="hhL" href="https://drive.google.com/file/d/1gVpoXVEjEm2mVpPDaH2LLSDGeikgMUo8/view" target="_blank">View Video</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}