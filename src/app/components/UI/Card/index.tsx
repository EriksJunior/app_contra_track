import { ReactNode } from "react";
import * as C from "./styles";

interface Props {
  children: ReactNode
  theme: string
  height?: string
  flexBasic?: string
  between?: string
  pointer?: boolean
  click?: () => void
  notHoverShadow?: boolean
}

export function Card({
  children,
  flexBasic = "250px",
  height,
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
      $pointer={pointer}
      $notHoverShadow={notHoverShadow}
      $theme={theme}
      onClick={click}
    >
      {children}
    </C.Container>
  );
}
