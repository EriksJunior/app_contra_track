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

import { INITIAL_STATE_COMPANY } from './initialStates'
import { ValidateCompany } from './validators'
import { FormCompanyHandle } from './interfaces'

type RefValidateKeys = "name" | "tradeName" | "cpfCnpj" | "email" | "uf";

export function Companies() {
  const { closeOffCanvas, isOffCanvasOpen, toggleOffCanvas } = useOffCanvas()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const formRef = useRef<FormCompanyHandle>(null);
  const refValidate: Record<RefValidateKeys, React.RefObject<HTMLInputElement | null>> = {
    name: useRef<HTMLInputElement>(null),
    tradeName: useRef<HTMLInputElement>(null),
    cpfCnpj: useRef<HTMLInputElement>(null),
    email: useRef<HTMLInputElement>(null),
    uf: useRef<HTMLInputElement>(null),
  }

  const getFormValues = () => {
    if (formRef.current) {
      return formRef.current?.payloadForm();
    }

    return INITIAL_STATE_COMPANY
  }

  const save = async () => {
    try {
      setIsLoading(true)
      if (!isValid()) return

      await SaveCompany(getFormValues())
      toast.success("Nova empresa registrada ✅");
      handleClearForm()
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
    console.log(getFormValues())
    const error = ValidateCompany(getFormValues())

    if (error && Object.keys(error).length) {
      console.log(error)
      const ref = refValidate[error.keyError as keyof typeof refValidate];
      if (ref?.current) {
        ref.current.setAttribute("required", "true");
        ref.current.focus();
      }

      return false
    }

    return true
  }

  const handleClearForm = () => {
    if (formRef.current) {
      formRef.current?.clear();
    }
  }

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'space-between' }}>
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
        clearValues={() => handleClearForm()}
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
        <FormCompany refsToValidate={refValidate} ref={formRef} />
      </OffCanvas>
    </div>
  )
}
