import { ReactNode } from "react";
import * as C from "./styles";

interface Props {
  children: ReactNode
  width?: string
  minWidth?: string
  margin?: string
  gap?: string
}

export function Col({ children, width = "auto", minWidth, margin, gap }: Props) {
  return <C.Col $width={width} $minWidth={minWidth} $margin={margin} $gap={gap}>{children}</C.Col>;
}
