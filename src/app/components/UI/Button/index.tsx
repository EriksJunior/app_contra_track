 
import { ReactNode } from "react";
import * as C from "./styles";

interface Props {
  backgroundColor?: string
  width?: string
  hoverColor?: string
  activeColor?: string
  click?: () => void
  icon?: ReactNode
  text?: string
}

export function Button({
  backgroundColor,
  width,
  hoverColor,
  activeColor,
  click,
  icon,
  text,
}: Props) {
  return (
    <C.CustomButton
      $backgroundColor={backgroundColor}
      $width={width}
      $hoverColor={hoverColor}
      $activeColor={activeColor}
      onClick={click}
    >
      {icon && icon}
      {text && text}
    </C.CustomButton>
  );
}
