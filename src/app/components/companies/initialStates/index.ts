export interface FormValues {
  razaoSocial: string | null
  nomeFantasia: string | null
  cnpj: string | null
  ie?: string | null
  cep?: string | null
  email?: string | null
  endereco?: string | null
  bairro?: string | null
  numero?: string | null
  uf: string | null

  certification?: {
    name?: string | null
    certBase64?: string | null
    passwordCert?: string | null
  }
};

export const INITIAL_STATE_COMPANY: FormValues = {
  razaoSocial: null,
  nomeFantasia: null,
  cnpj: null,
  ie: null,
  cep: null,
  email: null,
  endereco: null,
  bairro: null,
  numero: null,
  uf: null,
  certification: {
    name: null,
    certBase64: null,
    passwordCert: null
  }
}