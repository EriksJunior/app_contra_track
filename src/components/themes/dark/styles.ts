import { css } from 'styled-components'

import { darkTheme } from '.'

import { InputText, InputTextArea } from '@/components/UI/Inputs/styles'
import { CustomInputFile } from '@/components/UI/Inputs/InputFile/styles'
import { InputSearch, SearchContent } from '@/components/UI/SearchBar/styles'
import { Content as OffCanvasContent, Title as OffCanvasTitle, Label as OffCanvasLabel, Header as OffCanvasHeader, Footer as OffCanvasFooter } from '@/components/UI/OffCanvas/styles'
import { ContainerCard } from '@/components/UI/Card/styles'
import { CustomTitle } from '@/components/UI/Title/styles'
import { ContentNavItems, ContentNavItemsNotification, InputRadio } from '@/components/sidebar/styles'
import { BodyItemText, Card as CardCompany, TitleBodyItem } from '@/components/companies/styles'

export const DarkTheme = css`
 .dark-mode {
    height: 100%;
    background-color: ${darkTheme.primary};

    ${InputText}, ${InputTextArea} {
      background-color: ${darkTheme.secondary}!important;
      border: 1px solid #3d3d3d!important;
      color: whitesmoke!important;
    }

    ${InputText}:focus, ${InputTextArea}:focus {
      box-shadow: 0 0 1px 1px ${darkTheme.success}!important;
    }

    ${CustomInputFile} {
      border: solid 3px ${darkTheme.success};
      box-shadow: 0 0 3px 0 ${darkTheme.success};
    }

    ${CustomInputFile}:hover {
      background-color: #a1a1a10d;
      box-shadow: 0 0 5px 0 white;
    } 

    ${InputSearch}, ${SearchContent} {
      background-color: ${darkTheme.secondary};
      color: white;
    }

    ${OffCanvasContent} {
      background-color: ${darkTheme.modalsBackground};
    }

    ${OffCanvasTitle} {
      color: ${darkTheme.success};
    }

    ${OffCanvasLabel}:hover {
      border: solid 2px ${darkTheme.success};
    }

    ${OffCanvasHeader} {
      border-bottom: solid 1px rgba(183, 183, 183, 0.137);
    }

    ${OffCanvasFooter} {
      border-top: solid 1px rgba(183, 183, 183, 0.137);
    }

    ${CustomTitle} {
       color: #a1a1a1!important;
    }

    ${ContainerCard} {
      background-color: ${darkTheme.modalsBackground}
    }

    ${ContentNavItems}, ${ContentNavItemsNotification} {
      color:rgb(190, 190, 190);
    }
    
    ${InputRadio} {
      &:checked ~ ${ContentNavItems} {
        background-color: ${darkTheme.darkSuccess};
        color: white;
        transition: ease-in all 0.2s;
      } 

      &:checked ~ ${ContentNavItemsNotification} {
        background-color: ${darkTheme.darkSuccess};
        color: white;
        transition: ease-in all 0.2s;
      }
    }

    ${CardCompany}{
      background-color: #1818188c;
      border-top: solid 1px #3d3d3d;
      border-right: solid 1px #3d3d3d;
      border-bottom: solid 1px #3d3d3d;

      &:hover {
        background-color: black;
      }
    }

    ${TitleBodyItem} {
      color: #e1e1e1;
    }

    ${BodyItemText} {
      color: ${darkTheme.titles};
    }

    /* GLOBAl SCROLL BAR */
    ::-webkit-scrollbar {
      width: 5px!important;
      height: 8px!important;
    }
  
    ::-webkit-scrollbar-track {
      background: transparent;
    }
  
    ::-webkit-scrollbar-thumb {
      background-color: ${darkTheme.success};
    }
    /* GLOBAl SCROLL BAR */
  }
`
