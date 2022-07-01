import React from "react";
import "./styles.css";
import logo from "./svg/Bethesda_Softworks_Logo.svg";
import logo2 from "./svg/franchise-icon-elderscrolls.svg";
import { IoIosSearch, IoIosMenu } from "react-icons/io";
import Dropdown from "./dropdown";
import Dropdown_extenso from "./dropdown_extenso"

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
                    <li className="logo2"><a href="/"><img src={logo2} /></a></li>
                    <Dropdown_extenso />
                    <li className="lista-de-links_li"><a href="/">NOVITÀ</a></li>
                    <li className="lista-de-links_li"><a href="/">SUPORTE</a></li>
                    <li className="lista-de-links_li"><a href="/">COMUNIDADE</a></li>
                    <Dropdown />
                </ul>

                <div className="button-header">
                    <button className="button-atualizacoes">OBTER <br/> ATUALIZAÇÕES</button>
                    <button className="button-comprar">SKYRIM 10 - COMPRAR <br/>AGORA</button>
                </div>

            </div>


        </header>
    )
}

export default Header;