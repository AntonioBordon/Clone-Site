import React from "react";
import "./styles.css"
import { IoIosArrowDown } from "react-icons/io";
import imagen2 from "./img/blades-nav-art.jpg";
import imagen1 from "./img/ESO_Blackwood_small.jpg";
import imagen4 from "./img/legends-nav-art.jpg";
import imagen3 from "./img/Skyrim_Anniversary_Edition_box_nav.jpg";

const Dropdown_extenso = () => {

    return(
        <div className="dropdownn">
            <li className="lista-de-links_li dropbtnn"><a href="/">JOGOS<IoIosArrowDown /></a></li>
            <div className="dropdown-contentt">
                <ul>
                    <li>
                        <span>NOVOS LANÇAMENTOS</span>
                    </li>
                    <li>
                        <span>LEGADO</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Dropdown_extenso;