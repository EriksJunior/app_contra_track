import { useState } from 'react'

import { Col } from '@/app/components/UI/Col'
import { InputFilePfx } from '@/app/components/UI/Inputs/InputFilePfx'
import { InputLabel } from '@/app/components/UI/Inputs/InputText'
import { Row } from '@/app/components/UI/Row'
import { SectionInputs } from '@/app/components/UI/SectionInputs'

import { BsPersonVcard } from 'react-icons/bs'
import { TbCertificate } from 'react-icons/tb'

import { FormValues, INITIAL_STATE_COMPANY } from '../initialStates'


interface Props {
  getValues: (values: FormValues) => void
}

export function FormCompany({ getValues }: Props) {
  const [form, setForm] = useState<FormValues>(INITIAL_STATE_COMPANY)

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newState = { ...form, [e?.currentTarget?.name]: e?.currentTarget?.value }
    setForm(newState)

    handleGetValues(newState)
  }

  const handleGetValues = (values: FormValues) => {
    if (getValues)
      getValues(values)
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
              <InputLabel name='razaoSocial' textLabel='Razão social' value={form.razaoSocial || ''} handleChange={handleChange} />
            </Col>

            <Col>
              <InputLabel name='nomeFantasia' textLabel='Nome Fantasia' value={form.nomeFantasia || ''} handleChange={handleChange} />
            </Col>
          </Row>

          <Row>
            <Col>
              <InputLabel name='cnpj' textLabel='CNPJ' value={form.cnpj || ''} handleChange={handleChange} />
            </Col>

            <Col>
              <InputLabel name='ie' textLabel='I.E' value={form.ie || ''} handleChange={handleChange} />
            </Col>
          </Row>

          <Row>
            <Col width='20%' minWidth='100px'>
              <InputLabel name='cep' textLabel='CEP' value={form.cep || ''} handleChange={handleChange} />
            </Col>

            <Col width='70%'>
              <InputLabel name='endereco' textLabel='Endereço' value={form.endereco || ''} handleChange={handleChange} />
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
              <InputLabel name='uf' textLabel='UF' value={form.uf || ''} handleChange={handleChange} />
            </Col>
          </Row>
        </Row>
      </SectionInputs>

      <SectionInputs
        icon={<TbCertificate size={25} color='rgb(117, 129, 180)' />}
        textLabel='Certificado'
      >

        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
          <InputFilePfx getValues={(file) => console.log(file)} />

          <div style={{ width: '200px' }}>
            <InputLabel placeholder='Senha do certificado' value='' handleChange={handleChange} />
          </div>
        </div>
      </SectionInputs>
    </Col>
  )
}
