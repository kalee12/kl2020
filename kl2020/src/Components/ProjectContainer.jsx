import React from "react";
import {Link} from "react-router-dom";

import Project from "./Project";

export default class ProjectContainer extends React.Component {
    render() {
        return(
            <Link to={{pathname: this.props.link}} style={{textAlign:"center"}}>
                    <Project
                        bottom={this.props.bottom}
                        color={this.props.color}
                        icon={this.props.icon}
                        // left={this.props.left}  
                        link={this.props.link}
                        // right={this.props.right}
                        // top={this.props.top}
                        width={this.props.width}
                    />
                    <div style={{color: "black", marginBottom:"10px"}}>
                        <div style={{margin:"0"}}>{this.props.name}</div> 
                        <div style={{opacity:".8"}}> {this.props.type}</div>
                    </div>
            </Link>
        );
    }
}