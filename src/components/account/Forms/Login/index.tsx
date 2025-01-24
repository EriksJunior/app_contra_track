
import { SectionInputs } from "../../../UI/SectionInputs"
import { Col } from "../../../UI/Col"
import { Row } from "../../../UI/Row"
import { InputLabel } from "../../../UI/Inputs/InputText"
import { Button } from "../../../UI/Button"

import * as L from "./styles"

import { UseLogin } from "../../hooks/login"

interface Props {
  toggle: () => void
}

export function Login({ toggle }: Props) {
  const { handleChange, isLoading, payload, sendLogin, messageError, refValidate } = UseLogin()

  return (
    <L.Right>
      <div>
        <L.CreateAccountText>Entrar</L.CreateAccountText>

        <p style={{ fontSize: '0.7rem', marginTop: '0.5rem', color: 'gray' }}>
          Efetue seu login para gerenciar seu documentos fiscais
        </p>
        <p style={{ fontSize: '0.7rem', marginTop: '0.5rem', color: 'white' }} onClick={toggle}>
          Não possuí uma conta ? <span style={{ color: '#32f9f2', borderBottom: 'solid 1px #32f9f2', cursor: 'pointer' }}>cadastrar-se</span>
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.3rem' }}>
        <SectionInputs>
          <Col gap="1.3rem">
            <Row>
              <InputLabel
                name='login'
                placeholder="Email"
                backColorInput="#323141"
                borderInput="none"
                paddingInput="0 1rem"
                colorInput="white"
                isLarge
                innerRef={refValidate.login}
                value={payload.login || ''}
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
                value={payload.password || ''}
                handleChange={handleChange}
              />
            </Row>
          </Col>
        </SectionInputs>

        <Row justifyContent="space-between">
          <L.TextAddCompany style={{ color: '#32f9f2', borderBottom: 'solid 1px #32f9f2', cursor: 'pointer' }}>
            Esqueceu a senha ?
          </L.TextAddCompany>

          <L.TextAddCompany style={{ color: 'brown' }}>
            {messageError && `* ${messageError}`}
          </L.TextAddCompany>
        </Row>

        <Row>
          <Button
            isLoginButton
            text="Entrar"
            color="white"
            backgroundColor="#3ab08db1"
            hoverColor="#2f8f72b0"
            isLoading={isLoading}
            click={sendLogin}
          />
        </Row>
      </div>
    </L.Right>
  )
}