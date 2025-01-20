import { useState, useRef } from 'react'

import { SearchBar } from '@/app/components/UI/SearchBar'
import { Button } from '@/app/components/UI/Button'
import { OffCanvas } from '@/app/components/UI/OffCanvas'
import { FormCompany } from '@/app/components/companies/components/Form'

import { BsFillPersonPlusFill } from 'react-icons/bs'

import { UseGeneral } from '../../../hook/useGeneral'
import { FormValues, INITIAL_STATE_COMPANY } from './initialStates'
import { ValidateCompany } from './validators'
import { SaveCompany } from './services'

type RefValidateKeys = "razaoSocial" | "nomeFantasia" | "cnpj" | "uf";

export function Companies() {
  const { closeOffCanvas, isOffCanvasOpen, toggleOffCanvas } = UseGeneral()
  const [company, setCompany] = useState<FormValues>(INITIAL_STATE_COMPANY)
  const [isLoading, setIsloading] = useState<boolean>(false)

  const refValidate: Record<RefValidateKeys, React.RefObject<HTMLInputElement | null>> = {
    razaoSocial: useRef<HTMLInputElement>(null),
    nomeFantasia: useRef<HTMLInputElement>(null),
    cnpj: useRef<HTMLInputElement>(null),
    uf: useRef<HTMLInputElement>(null),
  }

  const getFormValues = (values: FormValues) => {
    setCompany(values)
  }

  const save = async () => {
    try {
      setIsloading(true)
      if (!isValid()) return

      const id = await SaveCompany(company)
      console.log(id)
    } finally {
      setIsloading(false)
    }
  }

  const isValid = () => {
    const errors = ValidateCompany(company as FormValues)

    if (errors && Object.keys(errors).length) {
      errors.forEach((e) => {
        const ref = refValidate[e.keyError as keyof typeof refValidate];
        
        if (ref.current) {
          ref.current.setAttribute("required", "true");
          ref.current.focus();
        }
      });

      return false
    }

    return true
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
            <div>
              <Button text='Novo' height='30px' backgroundColor='rgb(117, 129, 180)' hoverColor='rgb(100,114,175)' />
            </div>

            <div>
              <Button text='Salvar' height='30px' click={save}  isLoading={isLoading} />
            </div>
          </div>
        }
      >
        <FormCompany getValues={getFormValues} refsToValidate={refValidate} />
      </OffCanvas>
    </div>
  )
}
