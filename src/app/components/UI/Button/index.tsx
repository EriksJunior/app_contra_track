
import { ReactNode } from "react";
import * as C from "./styles";

interface Props {
  backgroundColor?: string
  width?: string
  height?: string
  hoverColor?: string
  color?: string
  click?: () => void
  icon?: ReactNode
  text?: string
  isLoading?: boolean
  disabled?: boolean
}

export function Button({
  backgroundColor,
  width,
  height,
  hoverColor,
  color,
  click,
  icon,
  text,
  isLoading,
  disabled
}: Props) {
  return (
    <C.CustomButton
      $backgroundColor={backgroundColor}
      $width={width}
      $height={height}
      $hoverColor={hoverColor}
      $color={color}
      onClick={click}
    >
      {icon && icon}
      {text && text}
      {isLoading && <p>loading</p>}
    </C.CustomButton>
  );
}
