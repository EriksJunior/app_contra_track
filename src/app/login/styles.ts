import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: rgb(43, 42, 55);
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  width: 100%;
  height: 80%;
  max-width: 1200px;
  display: flex;
  gap: 2rem;

  @media screen and (max-width: 1366px) {
    height: 100%;
    max-width: none;
  }
`

export const Left = styled.div`
  width: 50%;
  height: 100%;
  background-color: rgb(31, 39, 59);
  padding: 2rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (max-width: 1366px) {
    border-radius: 0 50px 50px 0;
    box-shadow: 5px 0 3px 0 #00000024;
  }
`

export const ContentBack = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: rgba(97, 102, 117, 0.61);
  padding: 0.3rem 0.8rem 0.3rem 1rem; 
  border-radius: 50px;
  cursor: pointer;
  color: white;
  transition: ease-in all 0.1s;
  border: solid 1px rgba(255, 255, 255, 0.54);

  &:hover {
    background-color: rgba(97, 102, 117, 0.81);
    transition: ease-in all 0.1s;
  }
`

export const BackToSite = styled.p`
  font-size: 0.8rem;
`

export const Right = styled.div`
  width: 50%;
  height: 100%;
  padding: 3rem 3rem 2rem 3rem;
  display: flex;
  flex-direction: column;
  gap: 1.3rem;

  @media screen and (max-width: 1366px) {
    padding: 1rem 3rem;
  }
`

export const CreateAccountText = styled.p`
  margin: 0;
  font-size: 2rem;
  color: white;
`