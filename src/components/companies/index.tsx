import axios from 'axios'
import { useState, useRef } from 'react'
import { toast } from 'react-toastify'

import { FormCompany } from './Forms'
import { Button } from '@/components/UI/Button'
import { OffCanvas } from '@/components/UI/OffCanvas'
import { Title } from '@/components/UI/Title'
import { Label } from '@/components/UI/Label'

import * as C from "./styles"

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

  const findById = () => {
    if (formRef.current) {
      return formRef.current?.setOutsideValues(INITIAL_STATE_COMPANY);
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

      <C.ContainerCard>
        <C.Card onClick={findById}>
          <C.HeaderCard>
            <Label text='Company teste' color="#454545" fontSize='13px' fontWeight='600' />

            <Label text='Company teste ltda' color="#6b6b6be4" fontSize='11px' fontWeight='500' />
          </C.HeaderCard>

          <C.BodyCard>
            <C.BodyItem>
              <C.TitleBodyItem>Nota Hoje</C.TitleBodyItem>

              <C.ContentBodyItem>
                <p>150</p>
                <LuInfo size={13} color='#6b6b6be4' />
              </C.ContentBodyItem>
            </C.BodyItem>

            <C.Divider />

            <C.BodyItem>
              <C.TitleBodyItem>Sinc</C.TitleBodyItem>

              <C.ContentBodyItem>
                <p>31/02/2025 14:06</p>
              </C.ContentBodyItem>
            </C.BodyItem>
          </C.BodyCard>

          <C.FooterCard>
            <C.FooterItem>
              <HiOutlineMailOpen />

              <div style={{padding: '0.3rem', borderRadius: '5px', display: 'flex', alignItems: 'center' }}>
                <Label text='eriksjunuiifid@fdgg.com' color="#3767f1" fontSize='11px' fontWeight='500' hover='border-bottom: solid 1px red;'/>
              </div>
            </C.FooterItem>

            <C.FooterItem>
              <HiPhone />
            
              <div style={{padding: '0.3rem', borderRadius: '5px', display: 'flex', alignItems: 'center' }}>
                <Label text='(31) 9 9988-4545' color="#3767f1" fontSize='11px' fontWeight='500' />
              </div>
            </C.FooterItem>
          </C.FooterCard>
        </C.Card>
      </C.ContainerCard>

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
