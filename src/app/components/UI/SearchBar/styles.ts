import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { FaFilter } from "react-icons/fa";

interface StyledProps {
  $searchIconColor?: string
  $filterIconColor?: string
  $isFilterBoxOpen?: boolean
  $actualWidth?: number
}

export const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
`

export const SearchContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0rem 0.3rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 1px 4px 0 #00000026;

  @media screen and (max-width: 1366px){
    padding: 0rem 0.2rem;
  }
`

export const Label = styled.label`
  width: 100%;
  padding: 0 0 0 0.5rem;
`

export const SearchIcon = styled(FiSearch) <StyledProps>`
  width: 30px;
  height: 30px;
  padding: 0.2rem;
  color: white;
  background-color: ${props => props.$searchIconColor || "red"};
  border-radius: 8px;
  cursor: pointer;
  user-select: none!important;

  @media screen and (max-width: 1366px){
    width: 25px;
    height: 25px;
  }
`

export const FilterIcon = styled(FaFilter) <StyledProps>`
  width: 20px;
  height: 20px;
  color: ${props => props.$filterIconColor || "red"};
  cursor: pointer;
  user-select: none!important;

  @media screen and (max-width: 1366px){
    width: 15px;
    height: 15px;
  }
`

export const InputSearch = styled.input`
  width: 100%;
  height: 2.5rem;
  border: none;
  outline: none;
  font-size: 0.85rem;

  @media screen and (max-width: 1366px){
    height: 2rem;
  }
`
export const containerFilterOptionsBox = styled.label`
  width: 43px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 1px 4px 0 #00000026;
  background-color: white;
  border-radius: 8px;

  @media screen and (max-width: 1366px){
    width: 30px;
  }
`

export const InputFilterBoxOptions = styled.input`
 width: 0!important; 
 height: 0!important;
 display: none;
`

export const ContentBoxOptions = styled.div<StyledProps>`
  &::-webkit-scrollbar {
    width: 5px!important;
    height: 8px!important;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  &::-webkit-scrollbar-track {
    background: white!important;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgb(100,114,175)!important;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  
${(props) => props.$isFilterBoxOpen ?
    `
      width: auto;
      padding: 1rem;
      background-color: white;
      box-shadow: 0 1px 4px 0 #00000026;
      border-radius: 8px;
      position: absolute;
      z-index: 100;
      top: 50px;
      right: 0rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      user-select: none;
      max-height: 262px;
      overflow: auto;

      @media screen and (max-width: 1366px){
         top: 45px;
      }
    `
    :
    `
      display: none;
    `
  }
`

export const TitleBoxOptions = styled.p`
  color: #47d2a9;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 0.3rem;
`

export const ContentOptions = styled.div<StyledProps>`
  display: flex;
  gap: 1rem;
  ${(props) => (props.$actualWidth || 0) >= 270 &&
    `
      min-width: 270px; 
      flex-wrap: wrap;
    `
  }
`

export const Options = styled.p`
  color: #00000066;
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
  margin: 0;
`

export const LabelOptions = styled.label`
  cursor: pointer !important;

  input:checked + ${Options} {
    color: #808080c2;
    font-weight: 600;
    text-decoration: underline;
  }
`;