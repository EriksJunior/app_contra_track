/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, ReactNode, useState } from "react";

interface Props {
  children?: ReactNode
}

export interface IOffCanvasContext {
  payload?: Record<string, any>
  clear: () => void
  setPayload: (payload: Record<string, any>) => void;
}


const OffCanvasContext = createContext<IOffCanvasContext>({
  clear: () => {
    throw new Error("clear não foi implementado");
  },
  setPayload: () => {
    throw new Error("setPayload não foi implementado");
  },
});

function OffCanvasProvider({ children }: Props) {
  const [payload, setPayload] = useState<Record<string, any>>({})
  const clear = () => {
    setPayload({})
  }

  return (
    <OffCanvasContext.Provider value={{ payload, setPayload, clear }}>
      {children}
    </OffCanvasContext.Provider>
  );
}

export { OffCanvasProvider, OffCanvasContext };
