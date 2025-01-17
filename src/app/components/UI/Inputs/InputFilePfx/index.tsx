import { useState } from "react";

import { convertFileToBase64 } from "@/utils/convertFileToBase64";

import { PiCertificateFill } from "react-icons/pi";
import * as I from "./styles";

interface Props {
  nameFileMaxWidth?: string
  getValues: (pfx: string) => void
}

export function InputFilePfx({ nameFileMaxWidth = "300px", getValues }: Props) {
  const [pfx, setPfx] = useState<string>("");

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) {
      return;
    }

    const file = files[0];
    const base64 = await convertFileToBase64(file);
    setPfx(base64 as string);

    if (getValues) {
      getValues(pfx);
    }
  };

  return (
    <>
      <I.Container>
        <I.Content>
          <I.NameFile $nameFileMaxWidth={nameFileMaxWidth}>Selecione um certificado</I.NameFile>

          <I.CustomInputFile htmlFor="inputFile">
            <PiCertificateFill size={100} color="rgb(6 200 211 / 24%)" />
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
