import styled from "styled-components";

interface StyledProps {
  $width?: string
  $height?: string
  $backgroundColor?: string
  $hoverColor?: string
  $color?: string
  $disabled?: boolean
}

export const CustomButton = styled.button<StyledProps>`
  width: ${props => props.$width || "100%"};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: none;
  height: ${props => props.$height || "35px"} ;
  border-radius: 8px;
  font-size: 13px;
  box-shadow: 0 1px 4px 0 #00000026;
  padding: 0.375rem 0.75rem;
  cursor: pointer;
  transition: ease-in all 0.1s;
  color: ${props => props.$color || "white"}!important;
  background-color: ${props => props.$backgroundColor || "#40c29c"}!important;
  letter-spacing: 1px;
  position: relative;

  @keyframes rotating {
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
  }

  .spinner {
    animation: rotating 1.3s linear infinite;
  }

  ${props => props.$disabled ?
    `
      pointer-events: none;
    `
    :
    `
      &:hover {
        background-color: ${props.$hoverColor || "#3ab08d"}!important;
        transition: ease-in all 0.1s;
      }
    `
  }
`