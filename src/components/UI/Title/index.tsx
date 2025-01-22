import { CustomTitle } from "./styles";

interface Props {
  color?: string
  fontSize?: string
  text?: string
}

export function Title({ color, fontSize, text }: Props) {
  return (
    <CustomTitle $color={color} $fontSize={fontSize}>{text ? text : "Default Title"}</CustomTitle>
  );
}
