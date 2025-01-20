"use client"

import { SectionInputs } from "../components/UI/SectionInputs"
import { Col } from "../components/UI/Col"
import { Row } from "../components/UI/Row"
import { InputLabel } from "../components/UI/Inputs/InputText"

export default function Login() {
  return (
    <div style={{ width: '100%', height: '100%', display: "flex", backgroundColor: 'white' }}>
      <div style={{
        width: '30%',
        height: '100%',
        backgroundColor: 'rgb(100,114,175)',
        padding: '2rem',
        borderRadius: '0 10px 10px 0',
        boxShadow: '0 0px 2px 1px #0000003b',
        border: 'solid 1px rgb(100,114,175)'
      }}>
        <p style={{ color: 'whitesmoke', fontSize: '12px' }}>TRACKER</p>
      </div>

      <div style={{ width: '70%', height: '100%', padding: '2rem 5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div style={{width: '400px', display: 'flex', flexDirection: 'column', gap: '1.3rem'}}>
          <div>
            <p style={{ fontSize: '1.3rem' }}>Nova Conta</p>

            <p style={{ fontSize: '0.7rem', marginTop: '0.5rem', color: 'gray' }}>
              Crie uma nova conta e vincule empresas para gerencia-las!
            </p>
          </div>

          <div>
            <SectionInputs>
              <Col gap="1.3rem">
                <Row>
                  <InputLabel name='email' textLabel='Email' value={''} handleChange={(e) => console.log(e)} />
                </Row>

                <Row>
                  <InputLabel name='password' textLabel='Senha' value={''} handleChange={(e) => console.log(e)} />
                </Row>
              </Col>
            </SectionInputs>
          </div>
        </div>
      </div>
    </div>
  )
} 