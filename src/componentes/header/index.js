import React from "react";
import "../header/styles.css";
import logo from "./Bethesda_Softworks_Logo.svg";
import logo2 from "./franchise-icon-elderscrolls.svg";
import { IoIosSearch, IoIosMenu } from "react-icons/io";
import Dropdown from "../dropdown";

const Header = () => {
    return (
        <header>

            <div className="container">
                <p className="icon-menu"><IoIosMenu /></p>
                <a href="/" ><img className="logo" src={logo} /></a>
                <p className="icon-search"><IoIosSearch /></p>
                <button className="button-entrar">ENTRAR / INSCREVER-SE</button>
            </div>

            <div className="container2">
                <ul className="lista-de-links">
                    <li className="lista-de-links_li"><a href="/"><img src={logo2} /></a></li>
                    <li className="lista-de-links_li"><a href="/">JOGOS</a></li>
                    <li className="lista-de-links_li"><a href="/">NOVIDADES</a></li>
                    <li className="lista-de-links_li"><a href="/">SUPORTE</a></li>
                    <li className="lista-de-links_li"><a href="/">COMUNIDADE</a></li>
                    <Dropdown />
                </ul>
            </div>

        </header>
    )
}

export default Header;