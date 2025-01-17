import { SearchBar } from '@/app/components/UI/SearchBar'
import { Button } from '@/app/components/UI/Button'
import { OffCanvas } from '@/app/components/UI/OffCanvas'
import { FormCompany } from '@/app/components/companies/components/Form'

import { UseGeneral } from '../../../hook/useGeneral'

import { BsFillPersonPlusFill } from 'react-icons/bs'
import { useState } from 'react'
import { FormValues } from './components/initialStates'

export function Companies() {
  const { closeOffCanvas, isOffCanvasOpen, toggleOffCanvas } = UseGeneral()
  const [company, setCompany] = useState<FormValues | null>(null)

  const getFormValues = (values: FormValues) => {
    setCompany(values)
  }

  const save = () => {
    console.log(company)
  }

  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ width: '70%' }}>
        <SearchBar getValues={(values) => console.log(values)} defaultFilter='nome' />
      </div>

      <div>
        <Button icon={<BsFillPersonPlusFill size={20} color='white' />} click={toggleOffCanvas} />
      </div>

      <OffCanvas
        expanded={isOffCanvasOpen}
        onClose={closeOffCanvas}
        title='Nova Empresa'
        clearValues={() => console.log('limpando')}
        footer={
          <div style={{ display: 'flex', gap: '1rem' }}>
            <div style={{ width: '70px' }}>
              <Button text='Novo' height='30px' backgroundColor='rgb(117, 129, 180)' hoverColor='rgb(100,114,175)' click={save} />
            </div>

            <div style={{ width: '90px' }}>
              <Button text='Salvar' height='30px' />
            </div>
          </div>
        }
      >
        <FormCompany getValues={getFormValues}/>
      </OffCanvas>
    </div>
  )
}
