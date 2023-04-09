import React from "react";
import Navigation from "./Navigation";
import Karen from "../Images/Karen.jpg";

import { Scrambler, Cycler } from "react-text-scrambler";

export default class About extends React.Component {
    render() {
        const strings = ["a web developer", "an android developer", "a library specialist", "a landscape photographer",
                    "a philosopher"];
        return(
            <div style={{marginBottom:"5%"}}>
                <Navigation/>
                <div style={{margin: "auto", textAlign: "", width:"70%"}}>
                    <h3>
                        <div style={{display:"inline", marginRight: "1%"}}>Hi, I am</div>
                        <Cycler
                            duration={ 2000 }
                            strings={ strings } />
                    </h3>
                    <img src={Karen} style={{float: "right", padding: "0px 10% 5% 5%", width: "40%"}}/>
                    <div>
                        <div>
                            I'm currently at Seattle University's library as a Library Specialist
                            - Technology Access and Affordability! My role is to bridge the Systems and the Circulation departments.
                            Some days, I am reviewing and troubleshooting devices such as laptops and AV equipment.
                            Some days, I am analyzing systems, reviewing processes, designing, and implementing changes.
                        </div>
                        <div class="text">
                            I'm looking to bridge gaps between technology and people. Whether that means better understanding people,
                            writing documentations, or critiquing designs. 
                        </div>
                        <div class="text">
                            In 2019, I graduated with a B.A. in Philosophy with a Minor in Informatics from the University of Washington. My skills focus 
                            on solutions that are mindful, user-centered, and simple.
                        </div>
                        <div class="text">
                            In my free time, I'm out in nature skiing, cycling, or hiking. My current artistic adventures include
                            sketching birds, acrylic painting, polymer clay, and potentially hand building pottery soon!
                        </div>    
                    </div>
                    
                    <div style={{margin: "5% 0%"}}>
                        contact: leekaren888@gmail.com 
                    </div>
                    <a class="button" href="https://drive.google.com/file/d/1Ml2VhazDZEQmUmDWmvpmwGxce9iZBAjl/view?usp=share_link">resume</a>

                </div>
            </div>
        );
    }
}