import React from "react";
import "./styles.css";
import logo from './img/skyrim-logo.webp';
import img1 from './img/SKY_Dragon_LCARD.webp';
import img2 from './img/SKY10_Constellation_LCARD.webp';
import img3 from './img/BGS_December_2020_Mods_LCARD.webp';

const Body = () => {
    return(
        <body>
            <section className="backgroud">
                <div className="logoprincipal" >
                    <img className="logoprincipal" src={logo}></img>
                </div>
                <div className="button-logoprincipal">
                    <button className="button-trailer">ASSISTIR A0 TRAILER</button>
                </div>
            </section>

            <section className="backgroud-latest">
                <div className="organizadora">
                    <div className="container-latest">
                            <h1 className="latest">Latest</h1>
                        <div className="card">
                            <img src={img1}></img>
                            <h2>COMO A BETHESDA GAME STUDIOS CRIOU A LÍNGUA DOS DRAGÕES DE SKYRIM</h2>
                            <h3>DESTAQUES / THE ELDER SCROLLS V: SKYRIM ANNIVERSARY EDITION / 19 DE AGOSTO DE 2021</h3>
                            <p>Mergulhem nos bastidores de uma das muitas criações que deram vida a The Elder Scrolls V: Skyrim – a língua falada por seus poderosos dragões.</p>
                            <a>LER MAIS</a>
                        </div>

                        <div className="card">
                            <img src={img2}></img>
                            <h2>JUNTEM-SE A NÓS NA CELEBRAÇÃO DOS FÃS DO 10º ANIVERSÁRIO DE SKYRIM EM 11/11!</h2>
                            <h3>ANÚNCIOS / THE ELDER SCROLLS V: SKYRIM ANNIVERSARY EDITION / 19 DE AGOSTO DE 2021</h3>
                            <p>Façam parte da comemoração de uma década desde que Skyrim foi lançado com o Museu de Skyrim, um concerto ao vivo e mais!</p>
                            <a>LER MAIS</a>
                        </div>

                        <div className="card">
                            <img src={img3}></img>
                            <h2>FALLOUT 4 E SKYRIM SPECIAL EDITION – MODS EM DESTAQUE DE DEZEMBRO</h2>
                            <h3>MODS / THE ELDER SCROLLS V: SKYRIM - SPECIAL EDITION / 4 DE DEZEMBRO DE 2020</h3>
                            <p>Os mods da comunidade para Fallout 4 e Skyrim Special Edition em destaque este mês incluem alguns companheiros incríveis com direito a dublagem, e não falta conteúdo inspirado no inverno. Expandam suas opções na ilha nevada de Solstheim ou explorem a Comunidade com estilo usando um traje de boneco de neve só seu!</p>
                            <a>LER MAIS</a>
                        </div>
                    </div>
                </div>
                <button className="button-ewe">Еще</button>
            </section>
        </body>
    )
}

export default Body;