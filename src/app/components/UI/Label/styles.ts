import styled from "styled-components";

interface StyledProps {
  $fontSize?: string
  $color?: string
}

export const CustomLabel = styled.label<StyledProps>`
  position: relative;
  font-size: ${props => props.$fontSize || '12px'};
  pointer-events: none;
  white-space: nowrap !important;
  text-overflow: ellipsis;
  color: ${props => props.$color || '#a1a1a1'};
  font-weight: 500;

  @media screen and (min-width: 1980px){
    & {
      font-size: 13px;
    }
  }
`