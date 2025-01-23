"use client"

import "react-toastify/dist/ReactToastify.css";

import { useState, useRef } from "react"

import { SectionInputs } from "../UI/SectionInputs"
import { Col } from "../UI/Col"
import { Row } from "../UI/Row"
import { InputLabel } from "../UI/Inputs/InputText"
import { InputCpfCnpj } from "../UI/Inputs/InputCpfCnpj"

import { RiArrowRightSLine } from "react-icons/ri";
import loginImg from "../../../public/login1.png"

import { FormValues as FormUser, INITIAL_STATE_USER } from "./initialStates"
import { FormValues as FormCompany, INITIAL_STATE_COMPANY } from "../companies/initialStates"

import { CreateAccount } from "@/services/UserService"

import * as L from "./styles"
import { Button } from "../UI/Button"

type RefValidateKeys = "password";

export function Login() {
  const [payload, setPayload] = useState<{ user: FormUser, company: FormCompany }>({ user: INITIAL_STATE_USER, company: INITIAL_STATE_COMPANY })
  const refValidate: Record<RefValidateKeys, React.RefObject<HTMLInputElement | null>> = {
    password: useRef<HTMLInputElement>(null),
  }

  const handleChange = (e: React.FormEvent<HTMLInputElement>, type: 'user' | 'company' = 'user') => {
    const { name, value } = e.currentTarget;

    setPayload((prevState) => ({
      ...prevState,
      [type]: {
        ...prevState[type],
        [name]: value,
      },
    }));
  };


  const createAccount = async () => {
    try {
      // if (!isValid()) return

      const id = await CreateAccount(payload)
      console.log(id)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <L.Container>
      <L.Content>
        <L.Left style={{ backgroundImage: `url(${loginImg.src})` }}>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <L.TextName>TRACKER</L.TextName>
            </div>

            <L.ContentBack>
              <L.BackToSite>Voltar ao site</L.BackToSite>

              <RiArrowRightSLine size={20} />
            </L.ContentBack>
          </div>
        </L.Left>

        <L.ContentRight>
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
                  </Row>

                  <Row>
                    <InputLabel
                      name='login'
                      placeholder="Email"
                      backColorInput="#323141"
                      borderInput="none"
                      paddingInput="0 1rem"
                      colorInput="white"
                      isLarge
                      value={payload.user.login || ''}
                      handleChange={handleChange}
                    />
                  </Row>

                  <Row>
                    <InputLabel
                      name='password'
                      placeholder="Password"
                      backColorInput="#323141"
                      borderInput="none"
                      paddingInput="0 45px 0 1rem"
                      colorInput="white"
                      isLarge
                      isPassword
                      innerRef={refValidate.password}
                      value={payload.user.password || ''}
                      handleChange={handleChange}
                    />
                  </Row>
                </Col>
              </SectionInputs>

              <L.TextAddCompany>
                Cadastre uma nova empresa
              </L.TextAddCompany>

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
                        name='cpfCnpj'
                        placeholder="CPF/CNPJ"
                        backColorInput="#323141"
                        borderInput="none"
                        paddingInput="0 1rem"
                        colorInput="white"
                        isLarge
                        value={payload.company.cpfCnpj || ''}
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

              <Row>
                <Button
                  isLoginButton
                  text="Criar conta"
                  color="white"
                  backgroundColor="#3ab08db1"
                  hoverColor="#2f8f72b0"
                  click={createAccount}
                />
              </Row>
            </div>
          </L.Right>
        </L.ContentRight>
      </L.Content>
    </L.Container>
  )
} 