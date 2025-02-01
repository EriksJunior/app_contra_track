export interface FormValues {
  id?: string | null
  name: string | null
  tradeName: string | null
  cpfCnpj: string | null
  ie?: string | null
  cep?: string | null
  email?: string | null
  cidade?: string | null
  endereco?: string | null
  bairro?: string | null
  numero?: string | null
  uf: string | null
  lastSynced?: string | null
  
  certification?: {
    name?: string | null
    certBase64?: string | null
    passwordCert?: string | null
  }
};

export const INITIAL_STATE_COMPANY: FormValues = {
  name: null,
  id: null,
  tradeName: null,
  cpfCnpj: null,
  ie: null,
  cep: null,
  email: null,
  cidade: null,
  endereco: null,
  bairro: null,
  numero: null,
  lastSynced: null,
  uf: null,
  certification: {
    name: null,
    certBase64: null,
    passwordCert: null
  }
}