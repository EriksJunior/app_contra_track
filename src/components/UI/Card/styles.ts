import styled from "styled-components";
import { E_THEME } from "@/utils/enums/theme";

interface StyledProps {
  $theme: string
  $height?: string
  $flexBasic?: string
  $between?: string
  $gap?: string
  $pointer?: boolean
  $notHoverShadow?: boolean
}

export const ContainerCard = styled.div<StyledProps>`
  width: 100%;
  height: ${props => props.$height ? props.$height : 'auto'} ;
  flex: 1 1 ${props => props.$flexBasic || '250px'};
  /* height: 200px; */
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.$between && "space-between"};
  gap: ${props => props.$gap ? props.$gap : "2rem"};
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 0px 2px 1px #00000017;
  border: solid 1px #00000017;
  cursor: ${props => props.$pointer && "pointer"};
  transition: ease-in all 0.1s;
  overflow: auto;

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