import styled from "styled-components";

interface StyledProps {
  $nameFileMaxWidth: string
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const CustomInputFile = styled.label`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  cursor: pointer;
  transition: ease-in all 0.1s;
`

export const Input = styled.input`
  display: none;
`

export const NameImage = styled.p<StyledProps>`
  width: 100%;
  text-align: center;
  margin: 0.5rem 0 0 0;
  color: #a1a1a1;
  height: 24px;
  max-width: ${props => props.$nameFileMaxWidth};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`