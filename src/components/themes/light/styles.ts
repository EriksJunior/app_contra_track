import { css } from 'styled-components'

import { lightTheme } from '.'

import { InputText, InputTextArea } from '@/components/UI/Inputs/styles'
import { CustomInputFile } from '@/components/UI/Inputs/InputFile/styles'
import { InputSearch, SearchContent } from '@/components/UI/SearchBar/styles'
import { Content as OffCanvasContent, Title as OffCanvasTitle, Label as OffCanvasLabel } from '@/components/UI/OffCanvas/styles'

export const LightTheme = css`
  .light-mode {
    height: 100%;
    background-color: ${lightTheme.primary};

    ${InputText}:focus, ${InputTextArea}:focus {
      box-shadow: 0 0 1px 1px ${lightTheme.info};
    }

    ${CustomInputFile} {
      border: solid 3px #06c8d375;
      box-shadow: 0 0 3px 0 ${lightTheme.darkInfo};
    }

    ${CustomInputFile}:hover {
      background-color: #a1a1a10d;
      box-shadow: 0 0 5px 0 ${lightTheme.darkInfo};
    } 

    ${InputSearch}, ${SearchContent} {
      background-color: ${lightTheme.light};
      color: black;
    }

    ${OffCanvasContent} {
      background-color: ${lightTheme.primary};
    }

    ${OffCanvasTitle} {
      color: '#454545';
    }

    ${OffCanvasLabel}:hover {
      border: solid 2px #40c29c;
    }

    /* GLOBAL SCROLL BAR */
    ::-webkit-scrollbar {
      width: 5px!important;
      height: 8px!important;
    }
  
    ::-webkit-scrollbar-track {
      background: transparent!important;;
    }
  
    ::-webkit-scrollbar-thumb {
      background-color: ${lightTheme.info};
    }
    /* GLOBAL SCROLL BAR */
  }
`
