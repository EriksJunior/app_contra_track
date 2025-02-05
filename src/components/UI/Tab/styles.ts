import { E_THEME } from "@/utils/enums/theme";
import styled from "styled-components";

interface StyledProps {
  $fontSize?: string
  $color?: string
  $theme?: string
  $isActive?: boolean
}

export const ContentTabText = styled.div<StyledProps>`
  border-radius: 5px;
  padding: 0.8rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.$isActive ? props.$theme === E_THEME.lightMode ? '#80808024' : 'rgb(100,114,175)' : 'transparent'};

  @media screen and (max-width: 1366px){
    & {
      padding: 0.6rem 0.8rem;
    }
  }
`

export const TabText = styled.label<StyledProps>`
  position: relative;
  font-size: ${props => props.$fontSize || '12px'};
  pointer-events: none;
  white-space: nowrap !important;
  text-overflow: ellipsis;
  color: ${props => props.$isActive ? props.$theme === E_THEME.lightMode ? 'black' : 'white' : '#6b6b6bdd'};
  font-weight: 600;
  line-height: 0.5;

  @media screen and (min-width: 1980px){
    & {
      font-size: 0.81rem;
    }
  }

  @media screen and (max-width: 1366px){
    & {
      font-size: 0.60rem;
    }
  }
`

export const ActiveTab = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: auto;
`