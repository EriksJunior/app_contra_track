import { useState, useRef } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

import { SearchBar } from '@/components/UI/SearchBar'
import { Button } from '@/components/UI/Button'
import { OffCanvas } from '@/components/UI/OffCanvas'
import { FormCompany } from './Forms'

import { BsFillPersonPlusFill } from 'react-icons/bs'

import { useOffCanvas } from '../../hook/useOffCanvas'
import { SaveCompany } from '@/services/CompanyService'

import { FormValues, INITIAL_STATE_COMPANY } from './initialStates'
import { ValidateCompany } from './validators'

type RefValidateKeys = "name" | "tradeName" | "cpfCnpj" | "uf";

export function Companies() {
  const { closeOffCanvas, isOffCanvasOpen, toggleOffCanvas } = useOffCanvas()
  const [company, setCompany] = useState<FormValues>(INITIAL_STATE_COMPANY)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const refValidate: Record<RefValidateKeys, React.RefObject<HTMLInputElement | null>> = {
    name: useRef<HTMLInputElement>(null),
    tradeName: useRef<HTMLInputElement>(null),
    cpfCnpj: useRef<HTMLInputElement>(null),
    uf: useRef<HTMLInputElement>(null),
  }

  const getFormValues = (values: FormValues) => {
    setCompany(values)
  }

  const save = async () => {
    try {
      setIsLoading(true)
      if (!isValid()) return

      await SaveCompany(company)
      toast.success("Nova empresa registrada ✅");
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        toast.error(
          `${error?.response?.data?.message ||
          "Opa, ocorreu um problema ao registrar essa empresa 🤯"
          }`,
          {
            position: "top-right",
          }
        );

        throw error
      } else {
        toast.error("Erro inesperado. Tente novamente.");
      }
    } finally {
      setIsLoading(false)
    }
  }

  const isValid = () => {
    const errors = ValidateCompany(company as FormValues)

    if (errors && Object.keys(errors).length) {
      errors.forEach((e) => {
        const ref = refValidate[e.keyError as keyof typeof refValidate];

        if (ref?.current) {
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
              <Button text='Salvar' height='30px' click={save} isLoading={isLoading} />
            </div>
          </div>
        }
      >
        <FormCompany getValues={getFormValues} refsToValidate={refValidate} />
      </OffCanvas>
    </div>
  )
}
