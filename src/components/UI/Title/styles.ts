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
  color: ${props => props.$color || '#a1a1a1'};
  font-weight: 600;

  @media screen and (min-width: 1500px){
    & {
      font-size: 1.43rem;
    }
  }
`