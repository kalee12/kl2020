import React from "react";
import Navigation from "./Navigation";

import {Link} from "react-router-dom";

import icon from "../Icons/SH_icon_w.svg";

export default class SH extends React.Component {
    render() {
        return(
            <div style={{marginBottom:"5%"}}>
                <Navigation/>
                <div style={{backgroundColor:"#43B5E6", height:"200px", margin:"1% 0 3% 0", opacity:".5", overflow:"hidden"}}>
                    <img src={icon} style={{height:"200%", width:"100%"}}/>
                </div>
                <div style={{margin:"auto", width:"50%"}}>
                    <h2 class="sh" style={{textAlign:"center"}}>Second Home</h2>
                    <div style={{textAlign:"center"}}>
                        <div style={{display:"inline", marginRight:"10%"}}>
                            <div style={{color:"#43B5E6", display:"inline", fontWeight:"bold"}}>Timeframe: </div>
                            <div style={{display:"inline"}}>Feb - Mar 2017</div>
                        </div>
                        <div style={{display:"inline"}}>
                            <div style={{color:"#43B5E6", display:"inline", fontWeight:"bold"}}>Tools: </div>
                            <div style={{display:"inline"}}>R, Shiny</div>
                        </div>
                    </div>
                    <div style={{marginTop:"5%"}}>
                        <div class="sh" style={{fontSize:"1.5em"}}>Context</div>
                        <div style={{paddingLeft:"5%"}}>
                            <div>This was a class project for INFO 201 - Technical Foundations. For about two weeks,
                                my team designed and developed a web application about nursing homes with Medicare's data.  
                            </div>
                            <div class="sh" style={{fontSize:"1.2em", marginTop:"2%"}}>Tasks</div>
                            <ul>
                                <li>center on a data set of sufficient complexity to explore</li>
                                <li>developed as an interactive platform using R</li>
                                <li>demonstrate a nuanced understanding of the important features of the data set</li>
                                <li>include visual representation(s) of your data</li>
                                <li>effectively targeted and tailored to a specific audience</li>
                            </ul>
                        </div>
                        <div class="sh" style={{fontSize:"1.5em", marginTop:"2%"}}>Role</div>
                        <div style={{paddingLeft:"5%"}}>
                            <div>I worked on developing the base UI and focused on data wrangling for everyone
                                to use. I also worked on the logic of the map and plotting the data.  
                            </div>
                            <div style={{marginTop:"2%", textAlign:"center"}}>
                                <a class="shL" href="https://liorlevy.shinyapps.io/info201-final-project-AB4/" target="_blank" 
                                    style={{marginRight:"5%"}}>View Application</a>
                                <a class="shL" href="https://github.com/kalee12/info201-final-project-AB4" target="_blank">View GitHub Repo</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}