import React from "react";
import {Link} from "react-router-dom";

export default class Project extends React.Component {
    render() {
        return(
            <div class="col-2 outer">
                <div class="inner" style={{width: "100%", paddingTop: "100%", backgroundColor: this.props.color}}>
                    <div style={{position:"absolute", top: this.props.top, left: this.props.left, 
                                    bottom: this.props.bottom, right: this.props.right}}>
                        <img style={{width: this.props.width}} src={this.props.icon}/>
                    </div>
                </div>
            </div>
        );
    }
}