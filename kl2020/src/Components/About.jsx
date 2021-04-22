import React from "react";
import Navigation from "./Navigation";

import { Scrambler, Cycler } from "react-text-scrambler";

export default class About extends React.Component {
    render() {
        const strings = ["a web developer", "an android developer", "a library technician", "a landscape photographer",
                    "a philosopher"];
        return(
            <div style={{marginBottom:"5%"}}>
                <Navigation/>
                <div style={{marginLeft:"5%", width:"70%"}}>
                    <h3>
                        <div style={{display:"inline", marginRight: "1%"}}>Hi, I am</div>
                        <Cycler
                            duration={ 2000 }
                            strings={ strings } />
                    </h3>
                    <div>
                        I graduated from the University of Washington with a BA in Philosophy, Minor in Informatics. My core value
                        is "context is everything". With that, our perception always need to be challenged and expanded. 
                        How I approach problems is a matter of finding better ways to understand people and mindfully utilize technology.   
                    </div>
                    <div style={{marginTop: "5%"}}>
                        contact: leekaren888@gmail.com 
                    </div>
                </div>
            </div>
        );
    }
}