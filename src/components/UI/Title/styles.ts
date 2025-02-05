import styled from "styled-components";

interface StyledProps {
  $fontSize?: string
  $color?: string
}

export const CustomTitle = styled.p<StyledProps>`
  position: relative;
  font-size: ${props => props.$fontSize || '12px'};
  pointer-events: none;
  white-space: nowrap !important;
  text-overflow: ellipsis;
  font-weight: 600;

  ${props => props.$color && `
    color: '${props.$color}!important';
  `}

  @media screen and (min-width: 1500px){
    & {
      font-size: 1.43rem;
    }
  }
`