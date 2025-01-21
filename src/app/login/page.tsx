"use client"

import { useState } from "react"

import { SectionInputs } from "../components/UI/SectionInputs"
import { Col } from "../components/UI/Col"
import { Row } from "../components/UI/Row"
import { InputLabel } from "../components/UI/Inputs/InputText"
import { InputCpfCnpj } from "../components/UI/Inputs/InputCpfCnpj"

import { RiArrowRightSLine } from "react-icons/ri";
import loginImg from "../../../public/login1.png"

import { FormValues as FormUser, INITIAL_STATE_USER } from "./initialStates"
import { FormValues as FormCompany, INITIAL_STATE_COMPANY } from "../components/companies/initialStates"

import * as L from "./styles"
import { Button } from "../components/UI/Button"

export default function Login() {
  const [companyIsShow, setCompanyIsShow] = useState(false)
  const [payload, setPayload] = useState<{ user: FormUser, company: FormCompany }>({ user: INITIAL_STATE_USER, company: INITIAL_STATE_COMPANY })

  const toggleCompany = () => {
    setCompanyIsShow(state => !state)
  }

  const handleChange = (e: React.FormEvent<HTMLInputElement>, type: string = 'user') => {
    let newState = { ...payload }
    if (type === 'company')
      newState = { ...newState, company: { ...newState.company, [e?.currentTarget?.name]: e?.currentTarget?.value } }
    else
      newState = { ...newState, user: { ...newState.user, [e?.currentTarget?.name]: e?.currentTarget?.value } }

    setPayload(newState)
  }

  return (
    <L.Container>
      <L.Content>
        <L.Left style={{ backgroundImage: `url(${loginImg.src})` }}>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <p style={{ color: 'whitesmoke', fontSize: '1.5rem' }}>TRACKER</p>
            </div>

            <L.ContentBack>
              <L.BackToSite>Voltar ao site</L.BackToSite>

              <RiArrowRightSLine size={20} />
            </L.ContentBack>
          </div>
        </L.Left>

        <L.Right>
          <div>
            <L.CreateAccountText>Crie sua conta</L.CreateAccountText>

            <p style={{ fontSize: '0.7rem', marginTop: '0.5rem', color: 'gray' }}>
              Crie uma nova conta e vincule empresas para gerenciá-las!
            </p>
            <p style={{ fontSize: '0.7rem', marginTop: '0.5rem', color: 'white' }}>
              Já tem uma conta ? <span style={{ color: '#32f9f2', borderBottom: 'solid 1px #32f9f2', cursor: 'pointer' }}>Log in</span>
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.3rem' }}>
            <SectionInputs>
              <Col gap="1.3rem">
                <Row>
                  <div style={{ flex: '1 1 auto', minWidth: '100px' }}>
                    <InputLabel
                      name='name'
                      placeholder="Nome"
                      backColorInput="#323141"
                      borderInput="none"
                      paddingInput="0 1rem"
                      colorInput="white"
                      isLarge
                      value={payload.user.name || ''}
                      handleChange={handleChange}
                    />
                  </div>

                  <div style={{ flex: '1 1 auto', minWidth: '100px' }}>
                    <InputLabel
                      name='lastname'
                      placeholder="Sobrenome"
                      backColorInput="#323141"
                      borderInput="none"
                      paddingInput="0 1rem"
                      colorInput="white"
                      isLarge
                      value={payload.user.lastname || ''}
                      handleChange={handleChange}
                    />
                  </div>
                </Row>

                <Row>
                  <InputLabel
                    name='email'
                    placeholder="Email"
                    backColorInput="#323141"
                    borderInput="none"
                    paddingInput="0 1rem"
                    colorInput="white"
                    isLarge
                    value={payload.user.email || ''}
                    handleChange={handleChange}
                  />
                </Row>

                <Row>
                  <InputLabel
                    name='password'
                    placeholder="Password"
                    backColorInput="#323141"
                    borderInput="none"
                    paddingInput="0 1rem"
                    colorInput="white"
                    isLarge
                    value={payload.user.password || ''}
                    handleChange={handleChange}
                  />
                </Row>
              </Col>
            </SectionInputs>

            <div style={{ display: 'flex', justifyContent: `${!companyIsShow ? 'flex-end' : 'space-between'}` }}>
              {companyIsShow && (
                <p style={{ fontSize: '0.8rem', color: 'white', marginLeft: '2px' }} onClick={toggleCompany}>
                  Cadastre uma nova empresa
                </p>
              )}

              <p style={{ fontSize: '0.8rem', color: '#32f9f2', borderBottom: 'solid 1px #32f9f2', cursor: 'pointer' }} onClick={toggleCompany}>
                Criar empresa <span>{companyIsShow ? '-' : '+'}</span>
              </p>
            </div>

            {companyIsShow && (
              <SectionInputs>
                <Col gap="1.3rem">
                  <Row>
                    <div style={{ flex: '1 1 auto', minWidth: '100px' }}>
                      <InputLabel
                        name='name'
                        placeholder="Razao Social"
                        backColorInput="#323141"
                        borderInput="none"
                        paddingInput="0 1rem"
                        colorInput="white"
                        isLarge
                        value={payload.company.name || ''}
                        handleChange={(e) => handleChange(e, 'company')}
                      />
                    </div>

                    <div style={{ flex: '1 1 auto', minWidth: '100px' }}>
                      <InputLabel
                        name='tradeName'
                        placeholder="Nome Fantasia"
                        backColorInput="#323141"
                        borderInput="none"
                        paddingInput="0 1rem"
                        colorInput="white"
                        isLarge
                        value={payload.company.tradeName || ''}
                        handleChange={(e) => handleChange(e, 'company')}
                      />
                    </div>
                  </Row>

                  <Row>
                    <div style={{ flex: '1 1 250px', minWidth: '100px' }}>
                      <InputLabel
                        name='email'
                        placeholder="Email"
                        backColorInput="#323141"
                        borderInput="none"
                        paddingInput="0 1rem"
                        colorInput="white"
                        isLarge
                        value={payload.company.email || ''}
                        handleChange={(e) => handleChange(e, 'company')}
                      />
                    </div>

                    <div style={{ flex: '1 1 100px', minWidth: '100px' }}>
                      <InputCpfCnpj
                        name='cnpj'
                        placeholder="CNPJ"
                        backColorInput="#323141"
                        borderInput="none"
                        paddingInput="0 1rem"
                        colorInput="white"
                        isLarge
                        value={payload.company.cnpj || ''}
                        handleChange={(e) => handleChange(e, 'company')}
                      />
                    </div>
                  </Row>

                  <Row>
                    <div style={{ flex: '1 1 50px', minWidth: '100px' }}>
                      <InputLabel
                        name='uf'
                        placeholder="UF"
                        backColorInput="#323141"
                        borderInput="none"
                        paddingInput="0 1rem"
                        colorInput="white"
                        isLarge
                        value={payload.company.uf || ''}
                        handleChange={(e) => handleChange(e, 'company')}
                      />
                    </div>

                    <div style={{ flex: '1 1 250px', minWidth: '100px' }}>
                      <InputLabel
                        name='cidade'
                        placeholder="Cidade"
                        backColorInput="#323141"
                        borderInput="none"
                        paddingInput="0 1rem"
                        colorInput="white"
                        isLarge
                        value={payload.company.cidade || ''}
                        handleChange={(e) => handleChange(e, 'company')}
                      />
                    </div>
                  </Row>
                </Col>
              </SectionInputs>
            )}

            <Row>
              <Button
                text="Criar conta"
                height="50px"
                color="white"
                fontSize={'20px'}
                backgroundColor="#3ab08db1"
                hoverColor="#2f8f72b0"
                click={() => console.log('clicou')}
              />
            </Row>
          </div>
        </L.Right>
      </L.Content>
    </L.Container>
  )
} 