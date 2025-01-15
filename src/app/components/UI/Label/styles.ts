import styled from "styled-components";

interface StyledProps {
  $fontSize?: string
  $colorLabel?: string
}

export const CustomLabel = styled.label<StyledProps>`
  position: relative;
  font-size: ${props => props.$fontSize || '12px'};
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