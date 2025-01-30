import styled from "styled-components";

interface StyledProps {
  $fontSize?: string
  $color?: string
}

export const ContentTabText = styled.div`
  border-radius: 5px;
  padding: 0.8rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1366px){
    & {
      padding: 0.6rem 0.8rem;
    }
  }
`

export const TabText = styled.label<StyledProps>`
  position: relative;
  font-size: ${props => props.$fontSize || '12px'};
  pointer-events: none;
  white-space: nowrap !important;
  text-overflow: ellipsis;
  color: ${props => props.$color || '#a1a1a1'};
  font-weight: 600;
  line-height: 0.5;

  @media screen and (min-width: 1980px){
    & {
      font-size: 0.81rem;
    }
  }

  @media screen and (max-width: 1366px){
    & {
      font-size: 0.60rem;
    }
  }
`