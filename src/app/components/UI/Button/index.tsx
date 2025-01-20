
import { ReactNode } from "react";

import * as C from "./styles";
import { CgSpinner } from "react-icons/cg";

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
      $disabled={isLoading || disabled}
      onClick={click}
    >
      {icon && icon}

      {isLoading ? (
        <CgSpinner size={20} className="spinner" color="white"/>
      ) : text && text}
    </C.CustomButton>
  );
}
