"use client"

import { Companies } from "@/app/components/companies";
import { Title } from "@/app/components/UI/Title";
import { Tab } from "@/app/components/UI/Tab";

export default function Settings() {

  const items = [
    { text: "Gerais", component: Title },
    { text: "Empresas", component: Companies },
    { text: "Contador", component: Title },
    { text: "DF-e", component: Title },
    { text: "Segurança", component: Title },
  ]

  return (
    <div style={{ padding: "15px 15px 15px 0", height: '100%', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <Title fontSize="20px" color="black" text="Configurações" />

      <Tab tabs={items} />
    </div>
  )
}  