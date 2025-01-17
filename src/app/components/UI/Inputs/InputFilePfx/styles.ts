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
  border-radius: 10px;
  box-shadow: 0 0 3px 0 rgb(117, 129, 180);
  cursor: pointer;
  transition: ease-in all 0.2s;

  &:hover {
    box-shadow: 0 0 5px 1px rgb(117, 129, 180);
    transition: ease-in all 0.2s;
  }
`

export const Input = styled.input`
  display: none;
`

export const NameFile = styled.p<StyledProps>`
  width: 100%;
  text-align: center;
  margin: 0 0 0.5rem 0;
  color: #a1a1a1;
  max-width: ${props => props.$nameFileMaxWidth};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`