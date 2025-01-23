"use client"

import { SectionInputs } from "../UI/SectionInputs"
import { Col } from "../UI/Col"
import { Row } from "../UI/Row"
import { InputLabel } from "../UI/Inputs/InputText"
import { InputCpfCnpj } from "../UI/Inputs/InputCpfCnpj"
import { Button } from "../UI/Button"

import * as L from "./styles"
import { RiArrowRightSLine } from "react-icons/ri";
import loginImg from "../../../public/login1.png"

import { UseLogin } from "./hook"

export function Login() {
  const { createAccount, handleChange, isLoading, messageError, payload, refValidate } = UseLogin()

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
                      innerRef={refValidate.name}
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
                      innerRef={refValidate.email}
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
                        innerRef={refValidate.companyName}
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
                        innerRef={refValidate.tradeName}
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
                        innerRef={refValidate.email}
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
                        innerRef={refValidate.cpfCnpj}
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
                        innerRef={refValidate.uf}
                        value={payload.company.uf?.toUpperCase() || ''}
                        handleChange={(e) => handleChange(e, 'company')}
                        maxLength={2}
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
                        innerRef={refValidate.cidade}
                        value={payload.company.cidade || ''}
                        handleChange={(e) => handleChange(e, 'company')}
                      />
                    </div>
                  </Row>
                </Col>
              </SectionInputs>

              <Row>
                <L.TextAddCompany style={{ color: 'brown' }}>
                  {messageError && `* ${messageError}`}
                </L.TextAddCompany>

                <Button
                  isLoginButton
                  text="Criar conta"
                  color="white"
                  backgroundColor="#3ab08db1"
                  hoverColor="#2f8f72b0"
                  isLoading={isLoading}
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