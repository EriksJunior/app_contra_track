import styled from "styled-components";

interface StyledProps {
  $nowrap?: boolean
  $flexBasic?: string
}

export const Row = styled.div<StyledProps>`
  width: 100%;
  display: flex;
  gap: 1rem;
  flex-wrap: ${props => props.$nowrap ? 'nowrap' : 'wrap'};
  flex: 1 1 ${props => props.$flexBasic || "250px"};
`