import { css } from 'styled-components'

import { darkTheme } from '.'

import { InputText, InputTextArea } from '@/app/components/UI/Inputs/styles'
import { CustomInputFile } from '@/app/components/UI/Inputs/InputFile/styles'
import { InputSearch, SearchContent } from '@/app/components/UI/SearchBar/styles'
import { Content as OffCanvasContent, Title as OffCanvasTitle, Label as OffCanvasLabel } from '@/app/components/UI/OffCanvas/styles'

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
