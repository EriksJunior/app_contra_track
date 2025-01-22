import { CustomLabel } from "./styles";

interface Props {
  color?: string
  fontSize?: string
  text?: string
}

export function Label({ color, fontSize, text }: Props) {
  return (
    <CustomLabel $color={color} $fontSize={fontSize}>{text ? text : "Default Label"}</CustomLabel>
  );
}
