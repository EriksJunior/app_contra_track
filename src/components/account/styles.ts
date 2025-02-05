import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: white;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (max-width: 1020px) {
    overflow: auto;
  }
`

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  backdrop-filter: blur( 13.5px );
  -webkit-backdrop-filter: blur( 13.5px );
  background: rgba( 255, 255, 255, 0.35 );


  @media screen and (max-width: 1366px) {
    height: 100%;
    max-width: none;
    gap: 0;
  }
`

export const Left = styled.div`
  width: 40%;
  height: 100%;
  background-color: rgb(31, 39, 59);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  border-radius: 30px;
  clip-path: polygon(0 0, 100% 0, 100% 90%, 80% 100%, 0% 100%);

  @media screen and (max-width: 1366px) {
    box-shadow: 5px 0 3px 0 #00000024;
    width: 35%;
  }

  @media screen and (max-width: 1020px) {
    display: none;
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

  @media screen and (max-width: 1366px) {
    padding: 0.1rem 0.5rem 0.1rem 0.8rem; 
    gap: 0.3rem;
  }
`

export const BackToSite = styled.p`
  font-size: 0.8rem;

  @media screen and (max-width: 1366px) {
    font-size: 0.7rem;
  }
`

export const TextName = styled.p`
  color: whitesmoke;
  font-size: 1.5rem;

  @media screen and (max-width: 1366px) {
    font-size: 1rem;
  }
`

export const ContentRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #ffffffd1;
  border-radius: 50px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  border: solid 1px #cecece!important;
  max-width: 600px;

  @media screen and (max-width: 1366px) {
    width: 65%;
    padding-top: 1rem;
  }

  @media screen and (min-width: 1366px) {
    width: 50%;
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