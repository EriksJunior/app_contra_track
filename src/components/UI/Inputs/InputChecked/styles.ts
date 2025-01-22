import styled from "styled-components";
import { FaCheck } from "react-icons/fa6";

interface StyledProps {
  $colorLabel: string
}

export const Checked = styled.input.attrs({ type: "checkbox" })`
  display: none;
`

export const DefaultIconChecked = styled(FaCheck)`
  display: none;
`

export const FalseInputChecked = styled.label`
  width: 19px;
  height: 19px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 2px #47d2a9;
  border-radius: 5px;
  transition: ease all 0.1s;
  box-shadow: 0 0 2px 0px #47d2a9;
  cursor: pointer;

  ${Checked}:checked + & {
    background-color: #47d2a9!important;
  }

  ${Checked}:checked + & ${DefaultIconChecked} {
    display: block!important;
  }
`

export const Label = styled.label<StyledProps>`
  user-select: none;
  font-size: 12px;
  padding: 0 0.2em;
  white-space: nowrap !important;
  text-overflow: ellipsis;
  color: ${props => props.$colorLabel || '#a1a1a1'};
  font-weight: 500;
  cursor: pointer!important;

  @media screen and (min-width: 1980px){
    & {
      font-size: 13px;
    }
  }
`
