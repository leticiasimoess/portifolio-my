// eslint-disable-next-line no-unused-vars
import React from 'react';

import{Link} from "react-router-dom";

import{ NavbarContainer, NavMenu, Caixa, Header, Text, SocialIcons, ButtonsContainer, ImageContainer, Image} from "../Style/inicioStyle";
import Insta from "../assets/insta.png";
import Linkedin from "../assets/linkedin.png";
import Github from "../assets/github.png";
import fotoPerfil from "../assets/fotoPerfil.png";
import logo from "../assets/logo.png"


function Inicio()  {
const handleClick= (e) =>{
    console.log(e);
    console.log("Executou");
};

    return (
        <>
        <Caixa>
            
            <NavbarContainer>
               <NavMenu>
                <li>
                <Link to="/">
              <div className="logo-container">
                <img className="logo" src={logo}  alt="Logo" />
              </div>
            </Link>
                </li>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/sobre"> Sobre</Link>
                </li>
                <li>
                    <Link to="/projetos">Projetos</Link>
                </li>
                <li>
                    <Link to="/contato">
                    <button className="gradient-button">Contact-me </button>
                     </Link>
                </li>
             </NavMenu>
            </NavbarContainer>
            <Header>
             <Text>
               <h1>Hello  👋🏾, I&apos;m Letícia</h1>
                <h3>Desenvolvedora Front-End</h3>
                </Text>

                <SocialIcons>
                    <a href="#" target="_blank">
                        <img src={Insta} alt="" />
                    </a>
                    <a href="#" target="_blank">
                        <img src={Linkedin} alt="" />
                    </a>
                    <a href="#" target="_blank">
                         <img src={Github} alt="" />
                    </a>
                </SocialIcons>
                <ButtonsContainer>
                    <div>
                <button  onClick={() => console.log("Testando evento")} className="gradient-button"> Curriculo</button>
                </div>
               
                <div>
                        <button onClick={handleClick}className="white-button"> Portifólio</button>
                        </div>
                          </ButtonsContainer>
                     </Header>
        <ImageContainer>
              <Image src={fotoPerfil} alt="Minha foto" />
        </ImageContainer>
        </Caixa>
      
       
    </>

  
);
}


export default Inicio;