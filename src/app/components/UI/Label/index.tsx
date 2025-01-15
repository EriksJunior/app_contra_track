import { CustomLabel } from "./styles";

interface Props {
  colorLabel?: string
  fontSize?: string
  text?: string
}

export function Label({ colorLabel, fontSize, text }: Props) {
  return (
    <CustomLabel $colorLabel={colorLabel} $fontSize={fontSize}>{text ? text : "Default Label"}</CustomLabel>
  );
}
