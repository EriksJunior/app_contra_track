import styled from "styled-components";

export const ContentRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media screen and (max-width: 1366px) {
    width: 65%;
    padding-top: 1rem;
  }

  @media screen and (max-width: 1020px) {
    height: 100%;
    width: 100%;
  }

  @media screen and (max-width: 825px) {
    width: 100%;
  }

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`

export const Right = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.3rem;

  @media screen and (max-width: 1366px) {
    width: 75%;
  }


  @media screen and (min-width: 1366px) {
    width: 75%;
  }

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
  font-weight: 600;

  @media screen and (max-width: 1366px) {
    font-size: 1.5rem;
  }
`

export const TextRecoverPass = styled.p`
  font-size: 0.7rem;
  color: #2246b1;
  border-bottom: solid 1px #2246b1;
  cursor: pointer;
`

export const TextAlert = styled.p`
  font-size: 0.7rem;
  color: brown;
`

export const TextCreateAccount = styled.p`
  font-size: 0.7rem;
  margin-top: 0.5rem;
  color: black;

  span {
    color: #2246b1;
    border-bottom: solid 1px #2246b1;
    cursor: pointer;
  }
`