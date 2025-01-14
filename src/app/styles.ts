import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { LightTheme } from "@/app/components/themes/light/styles";
import { DarkTheme } from "@/app/components/themes/dark/styles";

export const Container = styled.div`
  width: 100%;
`
export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  padding-right: 16px;
  padding-left: 16px;
  padding-bottom: 3rem;
`

export const Divider = styled.div`
  padding: 0 32px;
  color: #717171;
`

export const GlobalStyle = createGlobalStyle`
  * {
    margin : 0;
    padding: 0;
    box-sizing: border-box;
  }

  #root {
    height: 100%;
  }

  html {
    height: 100vh;
  }

  body {
    height: 100%;
    font-family: 'Poppins', sans-serif;
    overflow: hidden;
    ${LightTheme}
    ${DarkTheme}
  }
`;
