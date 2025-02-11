 
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
  key: keyof IDocuments
  text: string
  style?: React.CSSProperties
};

export type BodyDocument = Pick<IDocuments, 'dataEmissao' | 'nfChave' | 'nomeEmitente' | 'cpfCnpjEmitente' | 'valorNf' | 'tpNF'>

interface IListDocuments {
  headers: HeaderDocument[],
  body: BodyDocument[]
}

export const INITIAL_STATE_LIST_DOCUMENTS: IListDocuments = {
  headers: [
    { key: 'dataEmissao', text: 'Data Emissão', style: { flex: '1 1 40%' } },
    { key: 'nfChave', text: 'Chave', style: { flex: '1 1 50%' } },
    { key: 'nomeEmitente', text: 'Emitente', style: { flex: '1 1 100%' } },
    { key: 'cpfCnpjEmitente', text: 'CNPJ Emitente', style: { flex: '1 1 40%' } },
    { key: 'valorNf', text: 'Valor', style: { flex: '1 1 30%', textAlign: 'center' } },
    { key: 'tpNF', text: 'Tipo', style: { flex: '1 1 20%', textAlign: 'center' } },
  ],
  body: []
}