import styled from "styled-components";

interface StyledProps {
  $width?: string
  $minWidth?: string
  $margin?: string
  $gap?: string
}

export const Col = styled.div<StyledProps>`
  display: flex;
  flex-direction: column;
  gap: ${props => props.$gap || "1rem"} ;
  flex: 1 1 ${props => props.$width || "250px"};
  min-width: ${props => props.$minWidth};
  margin: ${props => props.$margin && props.$margin};
`