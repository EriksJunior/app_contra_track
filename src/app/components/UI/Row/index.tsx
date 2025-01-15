import { ReactNode } from "react";
import * as C from "./styles";

interface Props {
  children: ReactNode
  flexBasic?: string
  nowrap?: boolean
}

export function Row({ children, flexBasic, nowrap = false }: Props) {
  return <C.Row $flexBasic={flexBasic} $nowrap={nowrap}>{children}</C.Row>;
}
