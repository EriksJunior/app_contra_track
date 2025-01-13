import styled from "styled-components";

interface StyledProps {
  $colorLabel?: string;
  $isDisabled?: boolean;
  $colorBackgroundLabel?: string
}

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 0.1rem;
`

export const Label = styled.label<StyledProps>`
  position: relative;
  font-size: 12px;
  padding: 0 0.2em;
  pointer-events: none;
  white-space: nowrap !important;
  text-overflow: ellipsis;
  color: ${props => props.$colorLabel || '#a1a1a1'};
  font-weight: 500;

  @media screen and (min-width: 1980px){
    & {
      font-size: 13px;
    }
  }
`

export const RequiredField = styled.span`
  display: none;
  width: auto;
  position: absolute;
  background-color: red;
  z-index: 200;
  left: 0;
  top: -0.2rem;
  border-radius: 5px;
  padding: 0.2rem 0.3rem;
  color: white;
  font-size: 10px;

  &::after {
    content: '';
    position: absolute;
    left: 20%;
    bottom: -0.3rem;
    transform: translateX(-50%);
    border-width: 0.4rem 0.4rem 0;
    border-style: solid;
    border-color: red transparent transparent;
    display: block;
    width: 0;
  }
`

export const InputText = styled.input<StyledProps>`
  font-size: 14px;
  width: 100%;
  height: 40px;
  border: 1px solid #d5d3d3;
  outline: none;
  transition: ease-in 0.1s all;
  padding-left: 5px;
  padding-right: 4px;
  color: #5f5c5b;
  background-color: white; /*#e9e9e9*/
  border-radius: 5px!important;

  &:focus {
    transition: ease-in 0.1s all;
  }

  &:required {
    border: 1px solid red!important;
    box-shadow: 0 0 2px 1px #00000052;
  }

  &:required ~ ${Label} {
    color: transparent!important;
    user-select: none!important;

    .requiredField {
      display: block!important;
    }
  }

  &:not(:focus) {
    transition: ease-in 0.1s all;
  }

  @media screen and (min-width: 1980px){
    & {
      font-size: 15px;
    }
  }

  ${(props) => props.$isDisabled && `
    background-color: #fafafa;
    pointer-events: none;
    color: #949290!important;
  `}
`;

export const InputTextArea = styled.textarea<StyledProps>`
  font-size: 14px;
  width: 100%;
  height: 100px;
  border: 1px solid #d5d3d3;
  outline: none;
  transition: ease-in 0.1s all;
  padding-top: 5px;
  padding-left: 5px;
  padding-right: 4px;
  color: #5f5c5b;
  background-color: white;
  border-radius: 5px!important;
  resize: none;

  &:focus {
    transition: ease-in 0.1s all;
  }

  &:required {
    border: 1px solid red!important;
    box-shadow: 0 0 2px 1px #00000052;
  }

  &:required ~ ${Label} {
    color: transparent!important;
    user-select: none!important;

    .requiredField {
      display: block!important;
    }
  }

  &:not(:focus) {
    transition: ease-in 0.1s all;
  }

  @media screen and (min-width: 1980px){
    & {
      font-size: 15px;
    }
  }

  ${(props) => props.$isDisabled && `
    background-color: #fafafa;
    pointer-events: none;
    color: #949290!important;
  `}
`;
