import styled from "styled-components";

interface StyledProps {
  $nowrap?: boolean
  $flexBasic?: string
  $alignCenter?: boolean
}

export const Row = styled.div<StyledProps>`
  width: 100%;
  display: flex;
  gap: 1rem;
  flex-wrap: ${props => props.$nowrap ? 'nowrap' : 'wrap'};
  align-items: center;

   ${(props) => props.$flexBasic &&
      `
        flex: 1 1 ${props.$flexBasic};
      `
    }

    ${(props) => props.$alignCenter &&
      `
        align-items: center;
      `
    }
`