import React from "react";
import {Link} from "react-router-dom";

export default class Project extends React.Component {
    render() {
        return(
            <div class="outer" style={{backgroundColor: this.props.color, borderRadius: "10px"}}>
                <div class="inner">
                    <div style={{ top: this.props.top, left: this.props.left, 
                                    bottom: this.props.bottom, right: this.props.right}}>
                        <img style={{width: this.props.width}} src={this.props.icon}/>
                    </div>
                </div>
            </div>
        );
    }
}