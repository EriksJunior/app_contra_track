import styled from "styled-components";
import { E_THEME } from "../../../utils/enums/theme";

interface StyledProps {
  $theme: string
  $maxHeight: string
}

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const Table = styled.table<StyledProps>`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 8px;
  table-layout: fixed;

  th {
    width: 100%;
    font-size: 12px;
    padding: 0 8px;
    text-align: start;
  }

  td {
    width: 100%;
    font-size: 13px;
    padding: 8px;
    color: ${props => props.$theme === E_THEME.lightMode ? '#3d3d3d' : 'white'};
    font-weight: 600;
    /* white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis; */
  }

  thead {
    display: block;
    background-color: rgb(96 96 96 / 9%);
    border-radius: 8px 8px 0 0;
    padding: 0.8rem 0;
    border: solid 1px rgba(130, 130, 130, 0.16);
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.23);
  }

  thead tr {
    display: flex;
    justify-content: space-between;
    color: ${props => props.$theme === E_THEME.lightMode ? '#3d3d3d' : '#a1a1a1'};
  }

  
  tbody tr {
    background-color: white;
    display: flex;
    justify-content: space-between;
    background-color: ${props => props.$theme === E_THEME.lightMode ? 'white' : '#494949'};
    padding: 0;
    border: solid 1px rgba(130, 130, 130, 0.16);
  }

  tbody tr:first-child {
    border-top: none!important;
  }

  tbody tr:last-child {
    border-radius: 0 0 8px 8px;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.23);
  }


  tbody {
    display: block;
    
    &::-webkit-scrollbar {
      width: 5px!important;
      height: 8px!important;
    }

    &::-webkit-scrollbar-track {
      background: transparent!important;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #47d2a9!important;
    }

    @media screen and (min-height: 600px) and (max-height: 959px){
      height: auto;
      max-height: 500px;
      min-height: 200px;
      overflow: auto;
    }

    @media screen and (max-height: 800px){
      height: auto;
      max-height: 300px;
      min-height: 200px;
      overflow: auto;
    }

    @media screen and (max-height: 720px){
      height: auto;
      max-height: 250px;
      min-height: 200px;
      overflow: auto;
    }
  }

  .noSearch {
    position: relative;
    background-image: url("noSearch.png");
    background-repeat: no-repeat;
    background-position: center 80px;
    background-size: contain; 
    height: 600px!important;
    width: 100%;
    overflow: hidden;

    @media screen and (max-height: 959px){
      height: 500px!important;
      background-position: center 50px;
      background-size: 70%; 
    }

    @media screen and (max-height: 800px){
      height: 350px!important;
      background-position: center 70px;
      background-size: 70%; 
    }

    @media screen and (max-height: 768px){
      height: 350px!important;
      background-position: center 50px;
      background-size: 50%; 
    }

    @media screen and (max-height: 720px){
      height: 250px!important;
      background-position: center 40px;
      background-size: 40%; 
    }
  }
`

export const ContainerPaginate = styled.div`
  width: 100%;
  display: flex;
  padding: 0 0.5rem;
  margin-top: 1rem;
`

export const ContentPaginate = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  padding: 0 1rem;

  span {
    transition: ease-in all 0.1s;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    width: 35px;
    height: 35px;
    background-color: #66a3b7;
    box-shadow: 0 1px 4px 0 #00000026;
    cursor: pointer;
    user-select: none;
    color: white;
  }
`

