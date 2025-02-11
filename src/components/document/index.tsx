"use client"

import { useContext, useEffect, useState } from "react";
import { GeneralContext } from "@/context";

import { Col } from "@/components/UI/Col";
import { Label } from "@/components/UI/Label";
import { Row } from "@/components/UI/Row";
import { SearchBar } from "@/components/UI/SearchBar";
import { Table } from "@/components/UI/Table";
import { Title } from "@/components/UI/Title";

import { E_THEME } from "@/utils/enums/theme";
import { lightTheme } from "@/components/themes/light";
import { darkTheme } from "@/components/themes/dark";

import { FindDocuments } from "@/services/NFeService";
import { BodyDocument, INITIAL_STATE_LIST_DOCUMENTS } from "./initialStates";

export default function Document() {
  const [documents, setDocuments] = useState<typeof INITIAL_STATE_LIST_DOCUMENTS>(INITIAL_STATE_LIST_DOCUMENTS)

  const { theme } = useContext(GeneralContext)

  const defaultFilterOptions = [
    { text: "N.º", value: "numero", isActive: true },
    { text: "Emissor", value: "emissor", isActive: false },
    { text: "CNPJ", value: "cnpj", isActive: true },
    { text: "Chave", value: "chave", isActive: false },
    { text: "Valor", value: "valor", isActive: false },
  ]

  const list = async () => {
    const listDocuments = await FindDocuments()

    if (listDocuments.length) {
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

  useEffect(() => {
    list()
  }, [])

  return (
    <div style={{ padding: '0 15px', height: '100%', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <Row>
        <Col gap="0.5rem">
          <Title fontSize='20px' color='black' text='Documents' />

          <Label fontSize='13px'
            color={theme === E_THEME.lightMode ? lightTheme.titles : darkTheme.titles}
            text='Visualize aqui documentos fiscais emitidos para você'
            fontWeight='500'
          />
        </Col>
      </Row>

      <Row height="100%">
        <Table enablePaginate items={documents}>
          <SearchBar
            getValues={(values) => console.log(values)}
            defaultFilter='nome'
            filterOptions={defaultFilterOptions}
            periodIsEnable
          />
        </Table>
      </Row>
    </div >
  )
} 