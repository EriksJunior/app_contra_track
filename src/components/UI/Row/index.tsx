import { ReactNode } from "react";
import * as C from "./styles";

interface Props {
  children: ReactNode
  flexBasic?: string
  justifyContent?: string
  nowrap?: boolean
  alignCenter?: boolean
  height?: string
}

export function Row({ children, flexBasic, nowrap = false, alignCenter, justifyContent, height }: Props) {
  return <C.Row $flexBasic={flexBasic} $nowrap={nowrap} $alignCenter={alignCenter} $justifyContent={justifyContent} $height={height}>{children}</C.Row>;
}
