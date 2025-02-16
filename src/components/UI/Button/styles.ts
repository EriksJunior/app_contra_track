import styled from "styled-components";

interface StyledProps {
  $width?: string
  $height?: string
  $backgroundColor?: string
  $hoverColor?: string
  $color?: string
  $fontSize?: string
  $border?: string
  $borderRadius?: string
  $disabled?: boolean
  $isLoginButton?: boolean
  $containsIcon?: boolean
}

export const CustomButton = styled.button<StyledProps>`
  width: ${props => props.$width || "100%"};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: none;
  height: ${props => props.$height || "35px"} ;
  border-radius: ${props => props.$borderRadius || '8px'};
  font-size: ${props => props.$fontSize || '13px'};
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

  ${props => props.$border && `
    border: ${props.$border}!important;
  `}

  ${props => props.$isLoginButton &&
    `
      height: 50px;
      font-size: 20px;
      
      @media screen and (max-width: 1366px){
        & {
            height: 40px;
            font-size: 15px;
        }
      }
    `
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

  ${props => props.$containsIcon && `
    line-height: 1.3;
  `
  }
`