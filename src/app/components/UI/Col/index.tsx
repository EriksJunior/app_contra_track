import { ReactNode } from "react";
import * as C from "./styles";

interface Props {
  children: ReactNode
  width?: string
}

export function Col({ children, width = "100%" }: Props) {
  return <C.Col $width={width}>{children}</C.Col>;
}
