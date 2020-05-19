import React from "react";
import {Link} from "react-router-dom";

import Project from "./Project";

export default class ProjectContainer extends React.Component {
    render() {
        return(
            <Link to={{pathname: this.props.link}}>
                <div class="row" style={{backgroundColor: this.props.bg, border:"1px solid rgba(0, 0, 0, .1)", marginBottom:"1%"}}>
                    <Project
                        bottom={this.props.bottom}
                        color={this.props.color}
                        icon={this.props.icon}
                        left={this.props.left}  
                        link={this.props.link}
                        right={this.props.right}
                        top={this.props.top}
                        width={this.props.width}
                    />
                    <div class="col" style={{padding:"2%"}}>
                        <div style={{marginBottom:"10px"}}>
                            <h2 style={{margin:"0"}}>{this.props.name}</h2> 
                            <div style={{opacity:".8"}}> {this.props.type}</div>
                        </div>
                        <div>{this.props.description}</div>
                    </div>
                </div>
            </Link>
        );
    }
}