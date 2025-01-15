import styled from "styled-components";
import { E_THEME } from "@/utils/enums/theme";
import { lightTheme } from "../../themes/light";
import { darkTheme } from "../../themes/dark";

interface StyledProps {
  $theme: string
  $height?: string
  $flexBasic?: string
  $between?: string
  $pointer?: boolean
  $notHoverShadow?: boolean
}

export const Container = styled.div<StyledProps>`
  width: 100%;
  height: ${props => props.$height ? props.$height : 'auto'} ;
  flex: 1 1 ${props => props.$flexBasic || '250px'};
  /* height: 200px; */
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.$between && "space-between"};
  gap: 2rem;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 0px 2px 1px #00000017;
  border: solid 1px #00000017;
  cursor: ${props => props.$pointer && "pointer"};
  transition: ease-in all 0.1s;
  background-color: ${props => props.$theme === E_THEME.lightMode ? lightTheme.light : darkTheme.secondary};

  &:hover {
    ${(props) => props.$notHoverShadow && props.$theme === E_THEME.lightMode ?
    `
        box-shadow: 0 2px 4px 0 #00000017!important;
        background-color: white!important
      `
    :
    props.$notHoverShadow && props.$theme === E_THEME.darkMode &&
    `
        box-shadow: 0 2px 4px 0 #00000017!important;
        background-color: #181818!important;
      `
  } 
  }
`