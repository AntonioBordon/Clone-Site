import React from "react";
import "../dropdown/styles.css";

const Dropdown = () => {
    return(
        <div className="dropdown">
            <li className="lista-de-links_li dropbtn"><a href="/">SKYRIM 10</a></li>
            <div className="dropdown-content">
                <a href="/">HOME</a>
                <a href="/">MUSEU</a>
                <a href="/">COMPRAR AGORA</a>
            </div>
        </div>
    )
}

export default Dropdown;