import styled from "styled-components";

interface StyledProps {
  $width?: string
}

export const Col = styled.div<StyledProps>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1 1 ${props => props.$width || "250px"};
`