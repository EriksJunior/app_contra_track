import { createContext, ReactNode, useState } from "react";
import { E_THEME } from "@/utils/enums/theme";

import { IGeneralContext, IUser } from "@/interfaces/General";

interface Props {
  children?: ReactNode
}

const user: IUser = {
  id: null,
  login: "",
  name: "",
  createdAt: "",
  updatedAt: "",
  token: "",
  companies: [
    {
      cpfCnpj: null,
      name: "",
      lastSynced: "",
      active: false,
      token: "",
    }
  ]
}

const GeneralContext = createContext<IGeneralContext>({
  user,
  setUser: () => {
    throw new Error("setUser não foi implementado");
  },
  theme: "light",
  setTheme: () => {
    throw new Error("setTheme não foi implementado");
  },
});

function GeneralProvider({ children }: Props) {
  const [user, setUser] = useState<IUser>({})
  const [theme, setTheme] = useState(E_THEME.lightMode)

  return (
    <GeneralContext.Provider value={{ user, setUser, theme, setTheme }}>
      {children}
    </GeneralContext.Provider>
  );
}

export { GeneralProvider, GeneralContext };
