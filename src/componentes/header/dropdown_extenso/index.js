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
                    <li id="lançamentos">
                        <span>NOVOS LANÇAMENTOS</span>
                    </li>
                    <li id="legado">
                        <span>LEGADO</span>
                    </li>
                </ul>
                <div className="dropdown-imagens">
                    <a>
                        <img className="jogos-img" src={imagen1}></img>
                        <span>BLACKWOOD</span>
                    </a>
                    <a>
                        <img className="jogos-img" src={imagen2}></img>
                        <span>BLADES</span>
                    </a>
                    <a>
                        <img className="jogos-img" src={imagen3}></img>
                        <span>SKYRIM</span>
                    </a>
                    <a>
                        <img className="jogos-img" src={imagen4}></img>
                        <span>LEGENDS</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Dropdown_extenso;