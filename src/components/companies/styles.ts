import styled from "styled-components";

export const ContainerCard = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem ;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  flex: 1 1 300px;
  max-width: 300px;
  box-shadow: 0 0px 2px 1px #00000017;
  border: solid 1px #00000017;
  border-radius: 10px;
  padding: 1rem;
  border-left: solid 5px #1be25d;
  cursor: pointer;
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

export const TitleBodyItem = styled.div`
  color: #6b6b6be4;
  font-size: 11px;
`

export const ContentBodyItem = styled.div `
  display: flex;
  gap: 0.3rem;
  align-items: center;

  p {
    color: #454545;
    font-size: 11px;
    font-weight: 600;
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