import { useState } from "react";
import Image from "next/image";

import { convertFileToBase64 } from "@/utils/convertFileToBase64";

import { BiImageAdd } from "react-icons/bi";
import * as I from "./styles";

interface Props {
  isLarge?: boolean
  nameFileMaxWidth?: string
  getValues: ({ nome_imagem, base64 }: { nome_imagem: string, base64: string }) => void
}

export function InputFile({ isLarge = true, nameFileMaxWidth = "300px", getValues }: Props) {
  const [payloadImage, setPayloadImage] = useState({
    nome_imagem: "Default image",
    base64: "",
  });

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) {
      return;
    }

    const file = files[0];
    const imgBase64 = await convertFileToBase64(file);
    const payload = { nome_imagem: file.name, base64: imgBase64 as string };

    setPayloadImage(payload);

    if (getValues) {
      getValues(payload);
    }
  };

  return (
    <>
      {isLarge && (
        <I.Container>
          <I.Content>
            <I.CustomInputFile htmlFor="inputFile">
              {!payloadImage.base64 ? (
                <BiImageAdd size={100} color="rgb(6 200 211 / 24%)" />
              ) : (
                <Image
                  src={payloadImage.base64}
                  alt="image pet"
                  width={190}
                  height={190}
                  style={{ borderRadius: "50%" }}
                />
              )}
            </I.CustomInputFile>

            <I.Input
              id="inputFile"
              type="file"
              accept=".jpg, .jpeg, .png"
              onChange={handleChange}
            />

            <I.NameImage $nameFileMaxWidth={nameFileMaxWidth}>{payloadImage.nome_imagem}</I.NameImage>
          </I.Content>
        </I.Container>
      )}
    </>
  );
}
