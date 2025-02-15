import axios from 'axios'
import { DateTime } from 'luxon'
import { useState, useRef, useEffect, useContext } from 'react'
import { toast } from 'react-toastify'

import { GeneralContext } from '@/context'

import { FormCompany } from './Forms'
import { Button } from '@/components/UI/Button'
import { OffCanvas } from '@/components/UI/OffCanvas'

import * as C from "./styles"

import { BsFillPersonPlusFill } from 'react-icons/bs'
import { LuInfo } from "react-icons/lu";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaRegIdCard } from "react-icons/fa6";
import { TbCertificate } from "react-icons/tb";
import { IoMdInformationCircleOutline } from "react-icons/io";

import { useOffCanvas } from '../../hook/useOffCanvas'
import { SaveCompany, UpdateCompany, FindCompanyById, FindCompanies } from '@/services/CompanyService'

import { FormValues, INITIAL_STATE_COMPANY } from './initialStates'
import { ValidateCompany } from './validators'
import { FormCompanyHandle } from './interfaces'
import { MaskCpf } from '@/utils/maskCpf'
import { E_THEME } from '@/utils/enums/theme'
import { lightTheme } from '../themes/light'
import { darkTheme } from '../themes/dark'
import { Tooltip } from 'react-tooltip'


type RefValidateKeys = "name" | "tradeName" | "cpfCnpj" | "email" | "uf";

export function Companies() {
  const { closeOffCanvas, isOffCanvasOpen, toggleOffCanvas } = useOffCanvas()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [companies, setCompanies] = useState<FormValues[]>()

  const { theme } = useContext(GeneralContext)

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

  const handleSaveOrUpdate = () => {
    if (getFormValues()?.id)
      return update()

    save()
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

  const update = async () => {
    try {
      setIsLoading(true)
      if (!isValid()) return

      await UpdateCompany(getFormValues())
      toast.success("Empresa Atualizada ✅");
      handleClearForm()
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        toast.error(
          `${error?.response?.data?.message ||
          "Opa, ocorreu um problema ao atualizar essa empresa 🤯"
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

  const findById = async (id: string) => {
    const company = await FindCompanyById(id)
    toggleOffCanvas()

    if (formRef.current) {
      return formRef.current?.setOutsideValues(company);
    }
  }

  const list = async () => {
    const listCompany = await FindCompanies()

    if (listCompany)
      setCompanies(listCompany)
  }

  const isValid = () => {
    const error = ValidateCompany(getFormValues())
    if (error && Object.keys(error).length) {
      const ref = refValidate[error.keyError as keyof typeof refValidate];
      if (ref?.current) {
        ref.current.setAttribute("required", "true");
        ref.current.focus();
      } else {
        toast.error(
          `${error.message}`,
          {
            position: "top-right",
          }
        );

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

  useEffect(() => {
    list()
  }, [])

  return (
    <div style={{ width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', overflow: 'auto' }}>
      <div style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        borderBottom: 'solid 1px #6b6b6b76',
        paddingBottom: '0.5rem'
      }}>
        <C.Label
          $labelSize='13'
          $color={theme === E_THEME.lightMode ? lightTheme.titles : darkTheme.titles}
          $fontWeight='600'
        >
          Empresas Registradas
        </C.Label>

        <div>
          <Button icon={<BsFillPersonPlusFill size={17} color='white' />} click={toggleOffCanvas} height='30px' width='40px' />
        </div>
      </div>

      <C.ContainerCard>
        {companies?.map((comp, idx) => (
          <C.Card
            onClick={() => findById(comp.id || '')}
            key={comp.id || idx}
            $borderLeftColor={!comp.certification?.name ? 'brown' : ''

            }>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <C.HeaderCard>
                <C.Label
                  $color={theme === E_THEME.lightMode ? '#454545' : '#e1e1e1'}
                  $labelSize='13'
                  $fontWeight='600'
                >
                  {comp.name || ''}
                </C.Label>

                <C.Label
                  $color={theme === E_THEME.lightMode ? lightTheme.titles : darkTheme.subtitles}
                  $labelSize='11'
                  $fontWeight='600'
                >
                  {comp.tradeName || ''}
                </C.Label>

              </C.HeaderCard>

              {comp.cert
                ?
                <TbCertificate size={25} color='#1be25d' />
                :
                <IoMdInformationCircleOutline color='brown' size={25}  data-tooltip-id="notification" data-tooltip-content={"Empresa sem certificado vinculado"}/>}

              <Tooltip id="notification" />
            </div>

            <C.BodyCard>
              <C.BodyItem>
                <C.TitleBodyItem>Notas Hoje</C.TitleBodyItem>

                <C.ContentBodyItem>
                  <C.BodyItemText>150</C.BodyItemText>
                  <LuInfo size={13} color={theme === E_THEME.lightMode ? 'rgb(100,114,175)' : "#e1e1e1"} />
                </C.ContentBodyItem>
              </C.BodyItem>

              <C.Divider />

              <C.BodyItem>
                <C.TitleBodyItem>Sinc</C.TitleBodyItem>

                <C.ContentBodyItem>
                  <C.BodyItemText>{comp.lastSynced && DateTime.fromISO(comp.lastSynced).toFormat('dd/MM/yyyy HH:mm')}</C.BodyItemText>
                </C.ContentBodyItem>
              </C.BodyItem>
            </C.BodyCard>

            <C.FooterCard>
              <C.FooterItem>
                <HiOutlineMailOpen color={theme === E_THEME.lightMode ? 'rgb(100,114,175)' : '#e1e1e1'} />

                <div style={{ padding: '0.3rem', borderRadius: '5px', display: 'flex', alignItems: 'center' }}>
                  <C.Label
                    $labelSize='11'
                    $fontWeight='600'
                    $color={theme === E_THEME.lightMode ? 'rgb(100,114,175)' : darkTheme.titles}
                  >
                    {comp.email || ''}
                  </C.Label>
                </div>
              </C.FooterItem>

              <C.FooterItem>
                <FaRegIdCard color={theme === E_THEME.lightMode ? 'rgb(100,114,175)' : '#e1e1e1'} />

                <div style={{ padding: '0.3rem', borderRadius: '5px', display: 'flex', alignItems: 'center' }}>
                  <C.Label
                    $color={theme === E_THEME.lightMode ? 'rgb(100,114,175)' : darkTheme.titles}
                    $labelSize='11'
                    $fontWeight='600'
                  >
                    {MaskCpf(comp.cpfCnpj || '')}
                  </C.Label>
                </div>
              </C.FooterItem>
            </C.FooterCard>
          </C.Card>
        ))}
      </C.ContainerCard>

      <OffCanvas
        expanded={isOffCanvasOpen}
        onClose={closeOffCanvas}
        title='Nova Empresa'
        clearValues={() => handleClearForm()}
        footer={
          <div style={{ display: 'flex', gap: '1rem' }}>
            <div>
              <Button text='Novo' height='30px' click={handleClearForm} backgroundColor='rgb(117, 129, 180)' hoverColor='rgb(100,114,175)' />
            </div>

            <div>
              <Button text='Salvar' height='30px' click={handleSaveOrUpdate} isLoading={isLoading} />
            </div>
          </div>
        }
      >
        <FormCompany refsToValidate={refValidate} ref={formRef} />
      </OffCanvas>
    </div>
  )
}
