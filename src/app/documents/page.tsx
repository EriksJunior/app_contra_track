"use client"
import { useContext } from "react";
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

export default function Documents() {
  const { theme } = useContext(GeneralContext)

  const defaultFilterOptions = [
    { text: "N.º", value: "numero", isActive: true },
    { text: "Chave", value: "chave", isActive: false },
    { text: "Emissor", value: "emissor", isActive: false },
    { text: "Valor", value: "valor", isActive: false },
  ]

  return (
    <div style={{ padding: '0 15px', height: '100%', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <Row>
        <Col gap="0.5rem">
          <Title fontSize='20px' color='black' text='Documents' />

          <Label fontSize='13px'
            color={theme === E_THEME.lightMode ? lightTheme.titles : darkTheme.titles}
            text='Visualize aqui seus documentos fiscais'
            fontWeight='500'
          />
        </Col>
      </Row>

      <Row height="100%">
        <Table enablePaginate>
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