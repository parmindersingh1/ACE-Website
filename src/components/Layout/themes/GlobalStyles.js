import { createGlobalStyle } from "styled-components"

export const lightTheme = {
  bg: "#FFFFFF",
  font: "#324861",
  primary: "#EBF6FE",
  secondary: "#F3F0EC",
  active: "#FD925F",
}

export const darkTheme = {
  bg: "#171717",
  font: "#EBF6FE",
  primary: "#EBF6FE",
  secondary: "#F3F0EC",
  active: "#FD925F",
}

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500;600;700;800&display=swap');
  
  *, html, body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    transition: all 0.375 ease-in-out;
    font-family: "Roboto Slab";
    overflow-x: hidden;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  ::-webkit-scrollbar {
    width: 0px;
    display: none;
  }
  ::-webkit-scrollbar-track {
    background: ${props => props.theme.bg};
  }
  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.bg};
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.bg};
  }
  ::-moz-selection {
    background: ${props => props.theme.bg};
  }
  ::selection {
    background: ${props => props.theme.bg};
  }
  html.theming,
  html.theming * {
    transition: all 0.375s ease-in-out;
  }
  html,
  body {
    color: ${props => props.theme.font};
    background-color:  ${props => props.theme.bg};
  }
`
