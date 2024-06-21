import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before{
    box-sizing: border-box;
  }

  img{
    display: block;
    max-width: 100%;
  }
  
  body{
    margin: 0;
    color: white;
    font-family: 'Poppins';
    background-color: #FF7979;
    background-image: url(/images/bg-intro-mobile.png);

    @media (min-width: 1024px){
      background-image: url(/images/bg-intro-desktop.png);
    }
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  ul{
    list-style: none;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
  }  
`;
