import styled from "styled-components"

export const Caixa = styled.div`
width: 95%;//largura da caixa branca
  display: flex;
  height: 80vh; //altura
  position: relative;
background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
 border-radius: 65px;
    margin: auto; 
    margin-top:80px;
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
  font-size: 15px;
  font-family: 'Inter', sans-serif;

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
      width: 8vw; /* Adjust the width as needed */
      height: auto;
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

   
export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  margin-top:120px;
`;

export const Text = styled.div`
  text-align: center;
  margin-bottom: 10px;
  

  h1 {
    font-size: 2rem;
    margin-bottom: 5px;
    margin-right: 80vh;
  }

  h3 {
    font-size: 1.8rem;
    color: #666;
    margin-right: 80vh;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  margin-right: 90vh;

  a {
    margin: 0 10px;

    img {
      width: 45px; /* Adjust the size as needed */
      height: auto;
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  margin-top:20px;
  margin-right: 90vh;

  button {
    margin: 0 40px;
    padding:20px 35px;
    cursor: pointer;
    
    border-radius: 8px;
    font-weight: bold;
    text-transform: uppercase;
  }

  .white-button {
    background-color: white;
    color: #ff66c4;
    border-color: #ff66c4;
    border-radius: 5px;

  }

  .gradient-button {
    background: linear-gradient(45deg, #5170FF, #ff66c4);
    color: #fff;
    border: none;
  }
`;

export const ImageContainer = styled.div`
 flex: 1;
 margin-top:-320px;
  `;

export const Image = styled.img`
  width: 20vw; /* Adjust the size as needed */
  height: auto;
  border-radius: 50%;
  margin-left: 80vh;
 

`;


/*Sobre */
export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const Titulo = styled.h1`
  color: #333;
  font-size: 2em;
  margin-bottom: 20px;
`;

export const Paragrafo = styled.p`
  color: #555;
  font-size: 1.1em;
  line-height: 1.5;
`;


