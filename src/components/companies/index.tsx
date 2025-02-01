import { useState, useRef } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

import { FormCompany } from './Forms'
import { Button } from '@/components/UI/Button'
import { OffCanvas } from '@/components/UI/OffCanvas'
import { Title } from '@/components/UI/Title'
import { Label } from '@/components/UI/Label'

import { BsFillPersonPlusFill } from 'react-icons/bs'
import { LuInfo } from "react-icons/lu";
import { HiOutlineMailOpen, HiPhone } from "react-icons/hi";

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
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        borderBottom: 'solid 1px #6b6b6b76',
        paddingBottom: '0.5rem'
      }}>
        <Title fontSize='13px' color='#6b6b6be4' text='Empresas Registradas' />

        <div>
          <Button icon={<BsFillPersonPlusFill size={17} color='white' />} click={toggleOffCanvas} height='30px' width='40px' />
        </div>
      </div>

      <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          flex: '1 1 300px',
          maxWidth: '300px',
          boxShadow: '0 0px 2px 1px #00000017',
          border: 'solid 1px #00000017',
          borderRadius: '10px',
          padding: '1rem',
          borderLeft: 'solid 5px #1be25d',
          cursor: 'pointer'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.3 }}>
            <Label text='Company teste' color="#454545" fontSize='13px' fontWeight='600' />

            <Label text='Company teste ltda' color="#6b6b6be4" fontSize='11px' fontWeight='500' />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', flexDirection: 'column', width: '100px' }}>
              <p style={{ color: '#6b6b6be4', fontSize: '11px' }}>Nota Hoje</p>

              <div style={{ display: 'flex', gap: '0.3rem', alignItems: 'center' }}>
                <p style={{ color: '#454545', fontSize: '11px', fontWeight: 600 }}>150</p>
                <LuInfo size={13} color='#6b6b6be4' />
              </div>
            </div>

            <div style={{ borderRight: 'solid 1px #6b6b6b62', height: '100%' }}>

            </div>

            <div style={{ display: 'flex', flexDirection: 'column', width: '100px' }}>
              <p style={{ color: '#6b6b6be4', fontSize: '11px' }}>Sinc</p>

              <div>
                <p style={{ color: '#454545', fontSize: '11px', fontWeight: 600 }}>31/02/2025 14:06</p>
              </div>
            </div>
          </div>

          <div style={{display: 'flex', flexDirection: 'column', gap: '0.3rem'}}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <HiOutlineMailOpen />

              <div style={{padding: '0.3rem', borderRadius: '5px', display: 'flex', alignItems: 'center' }}>
                <Label text='eriksjunuiifid@fdgg.com' color="#3767f1" fontSize='11px' fontWeight='500' hover='border-bottom: solid 1px red;'/>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <HiPhone />
            
              <div style={{padding: '0.3rem', borderRadius: '5px', display: 'flex', alignItems: 'center' }}>
                <Label text='31 9 9988-4545' color="#3767f1" fontSize='11px' fontWeight='500' />
              </div>
            </div>

            <div>

            </div>
          </div>
        </div>
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
