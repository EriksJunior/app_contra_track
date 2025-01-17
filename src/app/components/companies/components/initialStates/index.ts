export interface FormValues {
  razaoSocial: string | null
  nomeFantasia: string | null
  cnpj: string | null
  ie: string | null
  cep: string | null
  endereco: string | null
  bairro: string | null
  numero: string | null
  uf: string | null
  crc: string | null

  certificado?: string
  senha?: string
};

export const INITIAL_STATE_COMPANY: FormValues = {
  razaoSocial: null,
  nomeFantasia: null,
  cnpj: null,
  ie: null,
  cep: null,
  endereco: null,
  bairro: null,
  numero: null,
  uf: null,
  crc: null,
}