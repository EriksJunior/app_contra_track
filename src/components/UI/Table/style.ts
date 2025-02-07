import styled from "styled-components";
import { E_THEME } from "../../../utils/enums/theme";
import { darkTheme } from "@/components/themes/dark";

interface StyledProps {
  $theme?: string
  $maxHeight?: string
  $isSelected?: boolean
}

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Table = styled.table<StyledProps>`
  height: auto;
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
    width: 99.6%;
    display: block;
    background-color: rgb(179 179 181 / 14%);
    border-radius: 8px 8px 0 0;
    padding: 0.7rem 0;
    border: solid 1px rgba(130, 130, 130, 0.16);
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.23);
  }

  thead tr {
    display: flex;
    justify-content: space-between;
    color: ${props => props.$theme === E_THEME.lightMode ? '#3d3d3d' : '#a1a1a1'};
  }

  
  tbody tr {
    height: 60px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${props => props.$theme === E_THEME.lightMode ? 'white' : '#494949'};
    padding: 0;
    border: solid 1px rgba(130, 130, 130, 0.16);
    border-left: solid 2px rgba(130, 130, 130, 0.16);
    border-right: solid 2px rgba(130, 130, 130, 0.16);
  }

  tbody tr:first-child {
    border-top: none!important;
  }

  tbody tr:last-child {
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.23);
  }


  tbody {
    display: block;
    height: auto;
    max-height: calc(100vh - 338px)!important;
    
    &::-webkit-scrollbar {
      width: 5px!important;
      height: 8px!important;
    }

    &::-webkit-scrollbar-track {
      background: transparent!important;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${darkTheme.success};
    }

    @media screen and (min-height: 600px) and (max-height: 959px){
      overflow: auto;
    }

    @media screen and (max-height: 800px){
      height: 78%;
      overflow: auto;
    }

    @media screen and (max-height: 720px){
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

export const ContentPaginate = styled.tbody<StyledProps>`
  width: 99.6%;
  height: 60px!important;
  max-height: 60px!important;
  min-height: 60px!important;
  overflow: hidden!important;
  border-top: solid 1px rgba(130, 130, 130, 0.24)!important;
  box-shadow: 0 1px 1px 0 rgba(0,0,0,0.23)!important;
  border-radius: 0 0 8px 8px!important;

  tr {
    border: none!important;
    box-shadow: none!important;
  }
`

export const PageActions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(118 133 201);
  gap: 10px;
  box-shadow: 0 1px 4px 0 #00000026;
  border: solid 1px rgb(118 133 201);
  border-radius: 10px;
  padding: 0.375rem 0.75rem;
  height: 36px;
  line-height: 1.4;
  cursor: pointer;
  transition: ease-in all 0.1s;
  letter-spacing: 1px;

  &:hover {
    background-color: rgb(100,114,175);
    transition: ease-in all 0.1s;
  }

  p {
    color: white;
    font-size: 12px!important;
    font-weight: 600;
  }

  @media screen and (max-width: 700px){
    p {
      display: none;
    }
  }
`

export const PageNumbers = styled.div<StyledProps>`
  width: 36px;
  height: 36px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  ${props => props.$isSelected ? `
    background-color: rgb(118 133 201 / 23%);
    
    P {
      font-weight: 600;
      font-Size: 1rem;
      color: rgb(100,114,175);
    }
  `
    :
    ` 
    font-weight: 500;
    font-size: 1rem;
    color: #6b6b6be4;
  `
  }
`