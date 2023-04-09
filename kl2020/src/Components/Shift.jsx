import React from "react";
import Navigation from "./Navigation";

import {Link} from "react-router-dom";

import icon from "../Icons/shift_icon_w.svg";

export default class Shift extends React.Component {
    render() {
        return(
            <div style={{marginBottom:"5%"}}>
                <Navigation/>
                <div style={{backgroundColor:"#8D89B1", height:"200px", margin:"1% 0 3% 0", opacity:".5", overflow:"hidden"}}>
                    <img src={icon} style={{height:"200%", width:"100%"}}/>
                </div>
                <div style={{margin:"auto", width:"50%"}}>
                    <h2 class="shift" style={{textAlign:"center"}}>Shift</h2>
                    <div style={{textAlign:"center"}}>
                        <div style={{display:"inline", marginRight:"10%"}}>
                            <div style={{color:"#8D89B1", display:"inline", fontWeight:"bold"}}>Timeframe: </div>
                            <div style={{display:"inline"}}>Oct. - Dec. 2017 (10 weeks)</div>
                        </div>
                        <div style={{display:"inline"}}>
                            <div style={{color:"#8D89B1", display:"inline", fontWeight:"bold"}}>Tools: </div>
                            <div style={{display:"inline"}}>Adobe XD</div>
                        </div>
                    </div>
                    <div style={{marginTop:"2%", textAlign:"center"}}>
                                <a class="shiL" href="https://drive.google.com/file/d/1-cmaf38jxaAbFwuaFGnRtR_OkOOEes7H/view" target="_blank" 
                                    style={{marginRight:"5%"}}>View Screens</a>
                                <a class="shiL" href="https://docs.google.com/presentation/d/1ylorLpDZUnmdCqOS1pe-VWpAEfEE1lkUPLRI5fJcXXI/edit#slide=id.p3" target="_blank">View Doc</a>
                            </div>
                    <div style={{marginTop:"5%"}}>
                        <div class="shift" style={{fontSize:"1.5em"}}>Context</div>
                        <div style={{paddingLeft:"5%"}}>
                            <div>This was a class project for INFO 365 - Mobile App Design.
                                I was part of a seven-person team designing our own operating system. We played
                                with color and the idea of our system adjusting with a user's surroundings.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}