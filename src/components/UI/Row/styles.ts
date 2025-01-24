import styled from "styled-components";

interface StyledProps {
  $flexBasic?: string
  $justifyContent?: string
  $nowrap?: boolean
  $alignCenter?: boolean
}

export const Row = styled.div<StyledProps>`
  width: 100%;
  display: flex;
  gap: 1rem;
  flex-wrap: ${props => props.$nowrap ? 'nowrap' : 'wrap'};
  align-items: center;
  justify-content: ${props => props.$justifyContent || 'flex-start'};

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