import { ReactNode } from "react";
import * as C from "./styles";

interface Props {
  children: ReactNode
  theme: string
  height?: string
  flexBasic?: string
  between?: string
  gap?: string
  pointer?: boolean
  click?: () => void
  notHoverShadow?: boolean
}

export function Card({
  children,
  flexBasic = "250px",
  height,
  gap,
  between,
  pointer,
  click,
  notHoverShadow = false,
  theme
}: Props) {

  return (
    <C.Container
      $height={height}
      $flexBasic={flexBasic}
      $between={between}
      $gap={gap}
      $pointer={pointer}
      $notHoverShadow={notHoverShadow}
      $theme={theme}
      onClick={click}
    >
      {children}
    </C.Container>
  );
}
