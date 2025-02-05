import { ReactNode } from "react";
import * as C from "./styles";

interface Props {
  children: ReactNode
  flexBasic?: string
  justifyContent?: string
  nowrap?: boolean
  alignCenter?: boolean
  height?: string
  gap?: string
}

export function Row({ children, flexBasic, nowrap = false, alignCenter, justifyContent, height, gap }: Props) {
  return <C.Row $flexBasic={flexBasic} $nowrap={nowrap} $alignCenter={alignCenter} $justifyContent={justifyContent} $height={height} $gap={gap}>{children}</C.Row>;
}
