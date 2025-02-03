import { forwardRef, useImperativeHandle, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

import { Button } from '@/components/UI/Button'
import { Col } from '@/components/UI/Col'
import { InputFilePfx } from '@/components/UI/Inputs/InputFilePfx'
import { InputLabel } from '@/components/UI/Inputs/InputText'
import { InputCep } from '@/components/UI/Inputs/InputCep'
import { InputCpfCnpj } from '@/components/UI/Inputs/InputCpfCnpj'
import { Row } from '@/components/UI/Row'
import { SectionInputs } from '@/components/UI/SectionInputs'

import { BsPersonVcard } from 'react-icons/bs'
import { TbCertificate } from 'react-icons/tb'

import { DeleteCertification } from '@/services/CompanyService'

import { FormValues, INITIAL_STATE_COMPANY } from '../initialStates'

import { FormCompanyHandle } from '../interfaces'

interface RefsToValidate {
  name: React.Ref<HTMLInputElement>
  tradeName: React.Ref<HTMLInputElement>
  cpfCnpj: React.Ref<HTMLInputElement>
  email: React.Ref<HTMLInputElement>
  uf: React.Ref<HTMLInputElement>
}

interface Props {
  refsToValidate: RefsToValidate,
}


function Form({ refsToValidate }: Props, innerRef: React.Ref<FormCompanyHandle>) {
  const [form, setForm] = useState<FormValues>(INITIAL_STATE_COMPANY)
  const [isLoadingDelCert, setIsLoadingDelCert] = useState<boolean>(false)

  useImperativeHandle(innerRef, () => ({
    clear: () => setForm(INITIAL_STATE_COMPANY),
    payloadForm: () => form,
    setOutsideValues
  }));

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newState = e?.currentTarget?.name === 'passwordCert'
      ?
      { ...form, certification: { ...form.certification, [e?.currentTarget?.name]: e?.currentTarget?.value } }
      :
      { ...form, [e?.currentTarget?.name]: e?.currentTarget?.value }

    setForm(newState)
  }

  const handleCertificate = (base64: string) => {
    const payload: FormValues = { ...form, certification: { ...form.certification, certBase64: base64 } }
    setForm(payload)
  }

  const setOutsideValues = (values: FormValues) => {
    setForm(values);
  }

  const removeCert = async () => {
    if (form.id)
      await deleteCertificate(form.id)

    setForm(state => ({ ...state, certification: { certBase64: null, name: null, passwordCert: null } }));
  }

  const deleteCertificate = async (companyId: string) => {
    try {
      setIsLoadingDelCert(true)

      await DeleteCertification(companyId)

      toast.success("Certificado removido ✅");
    } catch (error) {
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
      setIsLoadingDelCert(false)
    }
  }

  return (
    <Col margin='0.5rem 0 0 0' gap='1.3rem'>
      <SectionInputs
        icon={<BsPersonVcard size={20} color='rgb(117, 129, 180)' />}
        textLabel='Informações Gerais'
        divider
      >
        <Row>
          <Row>
            <Col>
              <InputLabel name='name' textLabel='Razão social' innerRef={refsToValidate.name} value={form.name || ''} handleChange={handleChange} />
            </Col>

            <Col>
              <InputLabel name='tradeName' textLabel='Nome Fantasia' innerRef={refsToValidate.tradeName} value={form.tradeName || ''} handleChange={handleChange} />
            </Col>
          </Row>

          <Row>
            <Col>
              <InputCpfCnpj name='cpfCnpj' textLabel='CNPJ' innerRef={refsToValidate.cpfCnpj} value={form.cpfCnpj || ''} handleChange={handleChange} />
            </Col>

            <Col>
              <InputLabel name='ie' textLabel='I.E' value={form.ie || ''} handleChange={handleChange} />
            </Col>
          </Row>

          <Row>
            <Col width='15%' minWidth='100px'>
              <InputCep maxLength={9} name='cep' textLabel='CEP' value={form.cep || ''} handleChange={handleChange} />
            </Col>

            <Col width='30%'>
              <InputLabel name='endereco' textLabel='Endereço' value={form.endereco || ''} handleChange={handleChange} />
            </Col>

            <Col width='30%'>
              <InputLabel name='email' textLabel='Email' innerRef={refsToValidate.email} value={form.email || ''} handleChange={handleChange} />
            </Col>
          </Row>

          <Row>
            <Col width='50%'>
              <InputLabel name='bairro' textLabel='Bairro' value={form.bairro || ''} handleChange={handleChange} />
            </Col>

            <Col width='20%' minWidth='100px'>
              <InputLabel name='numero' textLabel='Numero' value={form.numero || ''} handleChange={handleChange} />
            </Col>

            <Col width='10%' minWidth='100px'>
              <InputLabel name='uf' textLabel='UF' maxLength={2} innerRef={refsToValidate.uf} value={form.uf || ''} handleChange={handleChange} />
            </Col>
          </Row>
        </Row>
      </SectionInputs>

      <SectionInputs
        icon={<TbCertificate size={25} color='rgb(117, 129, 180)' />}
        textLabel='Certificado'
      >

        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
          <InputFilePfx getValues={(base64) => handleCertificate(base64)} isSelected={!!form?.certification?.certBase64 || !!form.certification?.name} isEdit={!!form.certification?.certBase64 || !!form.certification?.name} />

          {!form.certification?.name ?
            <div style={{ width: '200px' }}>
              <InputLabel isPassword name='passwordCert' placeholder='Senha do certificado' value={form.certification?.passwordCert || ''} handleChange={handleChange} />
            </div>
            :
            <div style={{ width: '200px' }}>
              <Button text='Remover' height='30px' backgroundColor='#c52929' hoverColor='brown' click={removeCert} isLoading={isLoadingDelCert} />
            </div>
          }
        </div>
      </SectionInputs>
    </Col>
  )
}

export const FormCompany = forwardRef(Form)