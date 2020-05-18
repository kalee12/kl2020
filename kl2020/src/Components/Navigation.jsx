import React from "react";
import {Link} from "react-router-dom";

export default class Navigation extends React.Component {
    render() {
        let style = {
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'row',
            padding: '2% 5%',
            position: 'sticky',
            top: '0',
            zIndex: '1'
        }

        let end = {
            padding: '1%',
            marginRight: "10px"
        }
        return(
            <div style={style}>
                <h1 style={{flexGrow: '2'}}>KAREN LEE</h1>
                <Link to="/">work</Link>
                <div style={{marginLeft:"1%"}}></div>
                <Link to="/about">about</Link>
            </div>
        );
    }
}