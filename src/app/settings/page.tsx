'use client'

import { Companies } from '@/components/companies'
import { Title } from '@/components/UI/Title'
import { Tab } from '@/components/UI/Tab'

export default function Settings () {
  const items = [
    { text: 'Gerais', component: Title },
    { text: 'Empresas', component: Companies },
    { text: 'Contador', component: Title },
    { text: 'DF-e', component: Title },
    { text: 'Segurança', component: Title }
  ]

  return (
    <div style={{ padding: '0 15px', height: '100%', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <Title fontSize='20px' color='black' text='Configurações' />

      <Tab tabs={items} />
    </div>
  )
}
