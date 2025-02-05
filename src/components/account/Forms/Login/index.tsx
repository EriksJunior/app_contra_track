
import { SectionInputs } from "../../../UI/SectionInputs"
import { Col } from "../../../UI/Col"
import { Row } from "../../../UI/Row"
import { InputLabel } from "../../../UI/Inputs/InputText"
import { Button } from "../../../UI/Button"

import * as L from "./styles"

import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { TbBrandLinkedinFilled } from "react-icons/tb";

import { UseLogin } from "../../hooks/login"

interface Props {
  toggle: () => void
}

export function Login({ toggle }: Props) {
  const { handleChange, isLoading, payload, sendLogin, messageError } = UseLogin()

  return (
    <L.Right>
      <div>
        <L.CreateAccountText>Entrar</L.CreateAccountText>

        <p style={{ fontSize: '0.7rem', marginTop: '0.5rem', color: 'gray' }}>
          Efetue seu login para gerenciar seu documentos fiscais
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.3rem' }}>
        <SectionInputs>
          <Col gap="1.3rem">
            <Row>
              <InputLabel
                name='login'
                placeholder="Email"
                backColorInput="#e8f0fe"
                borderInput="solid 1px #cecece"
                borderColorOnFocus="rgb(157, 172, 242)"
                paddingInput="0 1rem"
                colorInput="black"
                isLarge
                value={payload.login || ''}
                handleChange={handleChange}
              />
            </Row>

            <Row>
              <InputLabel
                name='password'
                placeholder="Password"
                backColorInput="#e8f0fe"
                borderInput="solid 1px #cecece"
                borderColorOnFocus="rgb(157, 172, 242)"
                paddingInput="0 45px 0 1rem"
                colorInput="black"
                isLarge
                isPassword
                value={payload.password || ''}
                handleChange={handleChange}
              />
            </Row>
          </Col>
        </SectionInputs>

        <Row justifyContent="space-between">
          <L.TextAlert>
            {messageError && `* ${messageError}`}
          </L.TextAlert>

          <L.TextRecoverPass>
            Esqueceu a senha ?
          </L.TextRecoverPass>
        </Row>


        <Row alignCenter justifyContent="center">
          <div style={{ borderBottom: 'solid 1px gray', height: '1px', width: '50px' }}></div>
          <div style={{ color: 'gray' }}>or</div>
          <div style={{ borderBottom: 'solid 1px gray', height: '1px', width: '50px' }}></div>
        </Row>


        <Col gap="1.3rem">
          <Row>
            <Button
              isLoginButton
              text="Entrar com Google"
              color="black"
              border="solid 1px #cecece"
              backgroundColor="transparent"
              hoverColor="white"
              icon={<FcGoogle size={25} />}
            />
          </Row>

          <Row>
            <Button
              isLoginButton
              text="Entrar"
              color="white"
              border="solid 1px #cecece"
              backgroundColor="#3ab08db1"
              hoverColor="#2f8f72b0"
              borderRadius="50px"
              isLoading={isLoading}
              click={sendLogin}
            />
          </Row>

          <Row justifyContent="center">
            <L.TextCreateAccount onClick={toggle}>
              Não possuí uma conta ? <span>cadastrar-se</span>
            </L.TextCreateAccount>
          </Row>


          <div style={{ marginTop: '2rem' }}>
            <Row justifyContent="center" gap="2rem">
              <FaFacebook size={30} color="gray" cursor={'pointer'} />

              <FaSquareInstagram size={30} color="gray" cursor={'pointer'} />

              <TbBrandLinkedinFilled size={30} color="gray" cursor={'pointer'} />
            </Row>
          </div>
        </Col>
      </div>
    </L.Right>
  )
}