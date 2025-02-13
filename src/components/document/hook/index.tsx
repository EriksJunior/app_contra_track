import { useEffect, useState } from "react"

import { BodyDocument, INITIAL_STATE_LIST_DOCUMENTS } from "../initialStates"
import { FindDocuments } from "@/services/NFeService"
import { UseDebounce } from "@/utils/useDebounce"

interface IFilters {
  startDate: string
  endDate: string
  isActive: boolean
  page: number
  text: string
  type: string
}


export function UseDocuments() {
  const [documents, setDocuments] = useState<typeof INITIAL_STATE_LIST_DOCUMENTS>(INITIAL_STATE_LIST_DOCUMENTS)

  const filterOptions = [
    { text: "Emissor", value: "nomeEmitente", isActive: true },
    { text: "CNPJ", value: "cpfCnpjEmitente", isActive: false },
    { text: "Chave", value: "nfChave", isActive: false },
  ]

  const list = async () => {
    const listDocuments = await FindDocuments()

    if (listDocuments?.length) {
      setDocuments(state => ({
        ...state,
        body: listDocuments.map<BodyDocument>(item => {
          return {
            dataEmissao: item.dataEmissao,
            cpfCnpjEmitente: item.cpfCnpjEmitente,
            nfChave: item.nfChave,
            nomeEmitente: item.nomeEmitente,
            tpNF: item.tpNF,
            valorNf: item.valorNf,
          }
        })
      }))
    }
  }

  const search = async (filters?: IFilters) => {
    const docs = await FindDocuments(filters?.text, filters?.type, filters?.startDate, filters?.endDate, filters?.page)

    if (docs?.length) {
      setDocuments(state => ({
        ...state,
        body: docs.map<BodyDocument>(item => {
          return {
            dataEmissao: item.dataEmissao,
            cpfCnpjEmitente: item.cpfCnpjEmitente,
            nfChave: item.nfChave,
            nomeEmitente: item.nomeEmitente,
            tpNF: item.tpNF,
            valorNf: item.valorNf,
          }
        })
      }))
    } else {
      setDocuments(INITIAL_STATE_LIST_DOCUMENTS)
    }
  }

  const debouncedChanged = UseDebounce(search);

  const handleChange = async (filters?: IFilters) => {
    debouncedChanged(filters);
  };

  useEffect(() => {
    list()
  }, [])

  return { documents, filterOptions, handleChange }
}