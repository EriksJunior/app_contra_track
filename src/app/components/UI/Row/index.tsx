import { ReactNode } from "react";
import * as C from "./styles";

interface Props {
  children: ReactNode
  flexBasic?: string
  nowrap?: boolean
  alignCenter?: boolean
}

export function Row({ children, flexBasic, nowrap = false, alignCenter }: Props) {
  return <C.Row $flexBasic={flexBasic} $nowrap={nowrap} $alignCenter={alignCenter}>{children}</C.Row>;
}
