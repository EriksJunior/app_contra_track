import styled from "styled-components";

interface StyledProps {
  $nameFileMaxWidth?: string
  $isSelected?: boolean
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

export const CustomInputFile = styled.label<StyledProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  border-radius: 10px;
  box-shadow: ${props => props.$isSelected ? '0 0 5px 1px #40c29c ' : '0 0 5px 1px rgb(117, 129, 180)'};
  cursor: pointer;
  transition: ease-in all 0.2s;

  &:hover {
    box-shadow: ${props => props.$isSelected ? '0 0 5px 1px #40c29c' : '0 0 5px 1px rgb(117, 129, 180)'};
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
  color:${props => props.$isSelected ? '#40c29c' : '#a1a1a1'} ;
  max-width: ${props => props.$nameFileMaxWidth};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`