
export interface IUser {
  id?: number | null,
  login?: string,
  name?: string,
  createdAt?: string,
  updatedAt?: string,
  token?: string,
  companies?: [
    {
      cpfCnpj?: number | null,
      name?: string,
      lastSynced?: string,
      active?: boolean,
      token?: string,
    }
  ]
}

export interface IGeneralContext {
  user: IUser;
  setUser: (user: IUser) => void;
  theme: string;
  setTheme: (theme: string) => void;
}
