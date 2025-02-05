import styled from "styled-components";

export const Right = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.3rem;


  @media screen and (max-width: 1020px) {
    height: 100%;
  }

  @media screen and (max-width: 500px) {
    width: 100%;
    padding: 0 1.8rem;
  }
`

export const CreateAccountText = styled.p`
  margin: 0;
  font-size: 2rem;
  color: black;
  

  @media screen and (max-width: 1366px) {
    font-size: 1.5rem;
  }
`

export const TextAddCompany = styled.p`
  font-size: 0.7rem;
  color: black;
`

export const ItemsCreateAccount = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  @media screen and (max-width: 600px){
    overflow: auto;
    padding: 0.5rem  0.5rem 1rem 0;
  }
`