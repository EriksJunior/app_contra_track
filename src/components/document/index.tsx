"use client"

import { useContext } from "react";
import { GeneralContext } from "@/context";
import { UseDocuments } from "./hook";

import { Col } from "@/components/UI/Col";
import { Label } from "@/components/UI/Label";
import { Row } from "@/components/UI/Row";
import { SearchBar } from "@/components/UI/SearchBar";
import { Table } from "@/components/UI/Table";
import { Title } from "@/components/UI/Title";

import { lightTheme } from "@/components/themes/light";
import { darkTheme } from "@/components/themes/dark";

import { E_THEME } from "@/utils/enums/theme";

export default function Document() {
  const { theme } = useContext(GeneralContext)
  const { documents, filterOptions, handleChange } = UseDocuments()

  const dropdownItems = [
    {text: 'Download XML', action: () => console.log('Download Realizado')},
    {text: 'Visualizar DANFE', action: () => console.log('Visualizando DANFE')},
    {text: 'Ir para SEFAZ', action: () => console.log('Indo para SEFAZ')},
  ]

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
        <Table enablePaginate items={documents} dropDownItems={dropdownItems}>
          <SearchBar
            getValues={handleChange}
            defaultFilter='nomeEmitente'
            filterOptions={filterOptions}
            periodIsEnable
          />
        </Table>
      </Row>
    </div >
  )
} 