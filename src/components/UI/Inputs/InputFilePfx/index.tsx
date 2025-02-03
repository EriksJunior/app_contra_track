import { convertFileToBase64 } from "@/utils/convertFileToBase64";

import { PiCertificateFill } from "react-icons/pi";
import { LuFileCheck } from "react-icons/lu";
import * as I from "./styles";

interface Props {
  nameFileMaxWidth?: string
  getValues: (pfx: string) => void
  isSelected: boolean
  isEdit: boolean
}

export function InputFilePfx({ nameFileMaxWidth = "300px", getValues, isSelected = false, isEdit =false }: Props) {
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) {
      return;
    }

    const file = files[0];
    const base64 = await convertFileToBase64(file);

    if (getValues) {
      getValues(base64 as string || '');
    }
  };

  return (
    <>
      <I.Container>
        <I.Content>
          <I.NameFile $nameFileMaxWidth={nameFileMaxWidth} $isSelected={isSelected}>{isSelected ? 'Certificado Selecionado!' : 'Selecione um certificado'}</I.NameFile>

          <I.CustomInputFile htmlFor="inputFile" $isSelected={isSelected}>
            {(isSelected || isEdit) ? (
              <LuFileCheck size={100} color={isSelected ? '#40c29c' : 'rgb(6 200 211 / 24%)'} />
            ) : (
              <PiCertificateFill size={100} color={isSelected ? '#40c29c' : 'rgb(6 200 211 / 24%)'} />
            )}

          </I.CustomInputFile>

          <I.Input
            id="inputFile"
            type="file"
            accept=".pfx"
            onChange={handleChange}
          />
        </I.Content>
      </I.Container>
    </>
  );
}
