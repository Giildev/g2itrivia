import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

:root {
  //Color Palette
  --primary: #1e9fff; 
  --primaryDark: #1e6fff;
  --primaryDarkest: #1e3fff;
  --red: #bd2130;
  --redDark: #822222;
  --grey: #bebebe;
  --black: #202020;
  --white: #ffffff;
}

body {
  background-color: white;
  height: 100%;
}

html {
  box-sizing: border-box;
  font-size: 52.5%; // 1rem = 10px, 10px/16px = 62.5%
  font-family: "Lato", sans-serif;
  font-weight: 100 !important;
  scroll-behavior: smooth;
}
a {
  color: inherit; 
  text-decoration: inherit;
}
`;
