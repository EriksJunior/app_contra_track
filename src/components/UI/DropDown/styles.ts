import { darkTheme } from "@/components/themes/dark";
import styled from "styled-components";

interface StyledProps {
  $dropDownColor?: string
  $dropDownTextColor?: string
  $textColorHover?: string
  $colorButton?: string
  $colorTextButton?: string
}

export const Input = styled.input`
  &:checked ~ .containerSelect {
    opacity: 1;
    display: block;
  }

  display: none;
`;

export const Label = styled.label`
  font-size: 9px;
  color: white;
  user-select: none!important;
`

export const Container = styled.div<StyledProps>`
  opacity: 0;
  transition: ease-in 0.1s;
  display: none;
  position: absolute;
  background-color: ${(props) => props.$dropDownColor || "#7be8ef"};
  top: 22px;
  right: 0px;
  width: auto;
  white-space: nowrap;
  z-index: 9000;
  border-radius: 5px;
  box-shadow: 0px 0px 5px #8b87878f;
  max-height: 150px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 5px!important;
    height: 8px!important;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  &::-webkit-scrollbar-track {
    background: white!important;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${darkTheme.success};
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`

export const Ul = styled.ul`
  list-style-type: none;
  width: 100%;
  margin: 0;
  padding: 0;
`

export const Li = styled.li<StyledProps>`
  display: flex;
  align-items: center;
  color: ${(props) => props.$dropDownTextColor || "white"};
  font-weight: 500;
  font-size: 11px;
  min-height: 30px;
  width: 100%;
  padding: 0.5em 0.5em;
  cursor: pointer;
  transition: ease-in 0.1s all;
  padding: 0 1rem;
    
  &:hover {
    background-color: ${(props) => props.$textColorHover || "#44d2db"};
  }

  &:first-child {
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }

  &:last-child {
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
  }
`

export const ButtonCreate = styled.button<StyledProps>`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  box-shadow: 0px 0px 1px 0px #565555b8;
  background-color: ${props => props.$colorButton || "white"}!important;
  border-radius: 5px!important;
  border: none!important;
  color: ${props => props.$colorTextButton || "black"}!important;
  font-size: 12px!important;
  font-weight: 500;
  padding: 0.2rem;
  cursor: pointer!important;
  transition: ease-in 0.1s;
  box-shadow: 0px 0px 2px 0 #565555b8;


  &:hover {
    box-shadow: 0px 0px 4px 0 #565555b8;
  }
`

export const ContentButtonCreate = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0.8rem 0.5rem;
`