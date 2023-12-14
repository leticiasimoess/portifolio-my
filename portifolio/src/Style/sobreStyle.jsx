import styled from "styled-components"

export const Caixa = styled.div`
width: 98%;//largura da caixa branca
  display: flex;
     height: 7vh; //altura
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
 border-radius: 45px;
    margin: auto; 
    margin-top:20px;
    justify-content: space-between;
  padding: 10px;
`;


export const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  
`;

export const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  font-size:22px;
  margin-top: -28px;

  li {
    margin-right: 20vh;

    &:last-child {
      margin-right: 0;
    }

    a {
      text-decoration: none;
      color: #333;
      font-weight: bold;

      &:hover {
        color: #ff66c4;
      }
    }

    .logo-container {
      margin-right: 40vh;
    }

    .logo {
      width: 5vw; /* Adjust the width as needed */
      height: 12vh;
     
    }

    .gradient-button {
      background: linear-gradient(45deg, #5170FF, #ff66c4);
      color: #fff;
      border: none;
      padding: 10px 20px;
      cursor: pointer;

      &:hover {
        background: linear-gradient(45deg, #ff66c4, #5170FF);
      }
    }
  }
`;
export const Section = styled.div`
  /* Estilos para Section aqui */
  margin-top: 20px;

  h2 {
    text-align: center;
    font-family: 'Inter', sans-serif;
    weight: 700;
    font-size: 35px;
   margin-top: 90px;
   color:white;
  }

  p {
    font-size: 30px;
    color:white;
  }

  .imagem-container {
    /* Estilos para o container da imagem aqui */
    margin-top: 10px;
  }

  .imagem {
    /* Estilos para a imagem aqui */
    max-width: 100%;
    height: auto;
  }
`;
