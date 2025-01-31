import { CustomLabel } from "./styles";

interface Props {
  color?: string
  fontSize?: string
  text?: string
  fontWeight?: string
}

export function Label({ color, fontSize, text, fontWeight }: Props) {
  return (
    <CustomLabel $color={color} $fontSize={fontSize} $fontWeight={fontWeight}>{text ? text : "Default Label"}</CustomLabel>
  );
}
