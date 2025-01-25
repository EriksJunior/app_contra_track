
import { SectionInputs } from "../../../UI/SectionInputs"
import { Col } from "../../../UI/Col"
import { Row } from "../../../UI/Row"
import { InputLabel } from "../../../UI/Inputs/InputText"
import { InputCpfCnpj } from "../../../UI/Inputs/InputCpfCnpj"
import { Button } from "../../../UI/Button"

import * as L from "./styles"

import { UseCreateAccount } from "../../hooks/createAccount"

interface Props {
  toggle: () => void
}

export function CreateAccount({ toggle }: Props) {
  const { createAccount, handleChange, isLoading, messageError, account, refValidate } = UseCreateAccount()

  return (
    <L.Right>
      <div>
        <L.CreateAccountText>Crie sua conta</L.CreateAccountText>

        <p style={{ fontSize: '0.7rem', marginTop: '0.5rem', color: 'gray' }}>
          Crie uma nova conta e vincule empresas para gerenciá-las!
        </p>
        <p style={{ fontSize: '0.7rem', marginTop: '0.5rem', color: 'white' }} onClick={toggle}>
          Já tem uma conta ? <span style={{ color: '#32f9f2', borderBottom: 'solid 1px #32f9f2', cursor: 'pointer' }}>Entrar</span>
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
                innerRef={refValidate.user.name}
                value={account.user.name || ''}
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
                innerRef={refValidate.user.login}
                value={account.user.login || ''}
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
                innerRef={refValidate.user.password}
                value={account.user.password || ''}
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
                  innerRef={refValidate.company.name}
                  value={account.company.name || ''}
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
                  innerRef={refValidate.company.tradeName}
                  value={account.company.tradeName || ''}
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
                  innerRef={refValidate.company.email}
                  value={account.company.email || ''}
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
                  innerRef={refValidate.company.cpfCnpj}
                  value={account.company.cpfCnpj || ''}
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
                  innerRef={refValidate.company.uf}
                  value={account.company.uf?.toUpperCase() || ''}
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
                  innerRef={refValidate.company.cidade}
                  value={account.company.cidade || ''}
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
  )
}