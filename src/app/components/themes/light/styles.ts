import { css } from "styled-components";

import { lightTheme } from ".";

import { InputText, InputTextArea } from "../../UI/Inputs/styles";
import { CustomInputFile } from "../../UI/Inputs/InputFile/styles";

export const LightTheme = css`
  .light-mode {
    height: 100%;
    background-color: ${lightTheme.primary};

    ${InputText}:focus, ${InputTextArea}:focus {
      border: 1px solid ${lightTheme.info};
    }


    ${CustomInputFile} {
      border: solid 3px #06c8d375;
      box-shadow: 0 0 3px 0 ${lightTheme.darkInfo};
    }

    ${CustomInputFile}:hover {
      background-color: #a1a1a10d;
      box-shadow: 0 0 5px 0 ${lightTheme.darkInfo};
    } 


    /* GLOBAL SCROLL BAR */
    ::-webkit-scrollbar {
      width: 5px!important;
      height: 8px!important;
    }
  
    ::-webkit-scrollbar-track {
      background: transparent;
    }
  
    ::-webkit-scrollbar-thumb {
      background-color: ${lightTheme.info};
    }
    /* GLOBAL SCROLL BAR */
  }
`