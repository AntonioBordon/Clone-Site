import React from "react";
import "./styles.css";
import logo from './img/skyrim-logo.webp';

const Body = () => {
    return(
        <body>
            <div className="logoprincipal" >
                <img src={logo}></img>
            </div>
        </body>
    )
}

export default Body;