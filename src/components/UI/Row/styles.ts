import styled from "styled-components";

interface StyledProps {
  $flexBasic?: string
  $justifyContent?: string
  $nowrap?: boolean
  $alignCenter?: boolean
  $height?: string
  $gap?: string
}

export const Row = styled.div<StyledProps>`
  width: 100%;
  height: ${props => props.$height && props.$height};
  display: flex;
  gap: ${props => props.$gap || '1rem'};
  flex-wrap: ${props => props.$nowrap ? 'nowrap' : 'wrap'};
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