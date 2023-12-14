// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";
import { NavMenu, NavbarContainer, Caixa, Section } from "../Style/sobreStyle";

const Sobre = () => {
  return (
    <>
      <Caixa>
        <NavbarContainer>
          <NavMenu>
            <li>
              <Link to="/">
                <div className="logo-container">
                  <img className="logo" src={logo} alt="Logo" />
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
      </Caixa>
      <Section>
      <h2>Sobre Mim</h2>
      <p>Algum texto sobre você aqui...</p>
      <div className="imagem-container">
        {/* Substitua a URL da imagem pela sua */}
        <img className="imagem" src="url_da_imagem.jpg" alt="Imagem Sobre Mim" />
      </div>
    </Section>
  </>
  );
};

export default Sobre;
