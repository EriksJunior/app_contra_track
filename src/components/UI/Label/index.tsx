import { CustomLabel } from "./styles";

interface Props {
  color?: string
  fontSize?: string
  text?: string
  fontWeight?: string
  hover?: string
}

export function Label({ color, fontSize, text, fontWeight, hover }: Props) {
  return (
    <CustomLabel $color={color} $fontSize={fontSize} $fontWeight={fontWeight} $hover={hover}>{text ? text : "Default Label"}</CustomLabel>
  );
}
