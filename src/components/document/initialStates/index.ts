import { DateTime } from "luxon"

export interface IDocuments {
  id?: number | null
  idCompany?: number | null
  nfChave?: string | null
  cpfCnpjEmitente?: string | null
  cpfCnpjDestinatario?: string | null
  nomeEmitente?: string | null
  nomeDestinatario?: string | null
  dataEmissao?: DateTime | null
  tpNF?: string | null
  valorNf?: number | null
  nsu?: string | null
  schema?: string | null
  synced?: boolean | null
  createdAt?: DateTime | null
  updatedAt?: DateTime | null
}

interface HeaderDocument {
  key: keyof IDocuments;
  text: string;
  size?: string;
};

export type BodyDocument = Pick<IDocuments, 'dataEmissao' | 'nfChave' | 'nomeEmitente' | 'cpfCnpjEmitente' | 'valorNf' | 'tpNF'>

interface IListDocuments {
  headers: HeaderDocument[],
  body: BodyDocument[]
}

export const INITIAL_STATE_LIST_DOCUMENTS: IListDocuments = {
  headers: [
    { key: 'dataEmissao', text: 'Data Emissão', size: '1 1 40%' },
    { key: 'nfChave', text: 'Chave', size: '1 1 50%' },
    { key: 'nomeEmitente', text: 'Emitente', size: '1 1 100%' },
    { key: 'cpfCnpjEmitente', text: 'CNPJ Emitente', size: '1 1 40%' },
    { key: 'valorNf', text: 'Valor', size: '1 1 30%' },
    { key: 'tpNF', text: 'Tipo', size: '1 1 20%' },
  ],
  body: []
}