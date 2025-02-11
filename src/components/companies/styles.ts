import styled from "styled-components";

interface StyledProps {
  $borderLeftColor?: string
  $labelSize?: string
  $color?: string
  $fontWeight?: string
}

export const ContainerCard = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem ;
  overflow: auto;
  padding: 1.5rem 0;
`

export const Card = styled.div<StyledProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1 1 350px;
  max-width: 350px;
  box-shadow: 0 0px 2px 1px #00000017;
  border: solid 1px #00000017;
  border-radius: 10px;
  padding: 1rem;
  border-left: solid 5px ${props => props.$borderLeftColor || '#1be25d'};
  cursor: pointer;
  transition: ease-in all 0.1s;

  &:hover {
    background-color: rgba(173, 173, 173, 0.14);
    transition: ease-in all 0.1s;
  }

  @media screen and (max-width: 1366px){
    gap: 0.5rem;
  }
`

export const HeaderCard = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.3;
`

export const BodyCard = styled.div`
  display: flex;
  justify-content: space-between;
`

export const BodyItem = styled.div`
  display: flex;
  flex-Direction: column;
  width: 100px;
`

export const TitleBodyItem = styled.p`
  font-size: 11px;

  @media screen and (max-width: 1366px){
    font-size: 10px;
  }
`

export const ContentBodyItem = styled.div `
  display: flex;
  gap: 0.3rem;
  align-items: center;
`

export const BodyItemText = styled.p`
  font-size: 11px;
  font-weight: 600;

  @media screen and (max-width: 1366px){
    font-size: 10px;
  }
`

export const Divider = styled.div`
  border-right: solid 1px #6b6b6b62;
  height: 100%;
`

export const FooterCard = styled.div`
  display: flex;
  flex-direction: column;
`

export const ContentFooterItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`

export const FooterItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`

export const Label = styled.label<StyledProps>`
  position: relative;
  font-size: ${props => props.$labelSize + 'px' || '12px'};
  pointer-events: none;
  white-space: nowrap !important;
  text-overflow: ellipsis;
  color: ${props => props.$color || '#a1a1a1'};
  font-weight: ${props => props.$fontWeight || 500};

  @media screen and (min-width: 1980px){
    & {
      font-size: 0.81rem;
    }
  }

  @media screen and (max-width: 1366px){
    font-size: ${props => Number(props.$labelSize) - 1.5 + 'px'};
  }
`