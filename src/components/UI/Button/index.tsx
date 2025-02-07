
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
  text?: string
  fontSize?: string
  border?: string
  borderRadius?: string
  icon?: ReactNode
  leftIcon?: boolean
  isLoading?: boolean
  disabled?: boolean
  isLoginButton?: boolean
}

export function Button({
  backgroundColor,
  width,
  height,
  hoverColor,
  color,
  click,
  icon,
  leftIcon,
  text,
  fontSize,
  border,
  borderRadius,
  isLoading,
  disabled,
  isLoginButton,
}: Props) {
  return (
    <C.CustomButton
      $backgroundColor={backgroundColor}
      $width={width}
      $containsIcon={!!icon}
      $height={height}
      $hoverColor={hoverColor}
      $color={color}
      $disabled={isLoading || disabled}
      $fontSize={fontSize}
      $isLoginButton={isLoginButton}
      $border={border}
      $borderRadius={borderRadius}
      onClick={click}
    >
      {(leftIcon && icon) && icon}

      {isLoading ? (
        <CgSpinner size={20} className="spinner" color="white" />
      ) : text && text}

      {(!leftIcon && icon) && icon}
    </C.CustomButton>
  );
}
