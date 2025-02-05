"use client"

import { CreateAccount } from "./Forms/CreateAccount";
import { Login } from "./Forms/Login";

import * as L from "./styles"

import loginImg from "../../../public/login1.png"

import { UseAccount } from "./hooks";

export function Account() {
  const { isCreateAccount, toggle } = UseAccount()

  return (
    <L.Container  style={{ backgroundImage: `url(${loginImg.src})` }}>
      <L.Content>
        {/* <L.Left style={{ backgroundImage: `url(${loginImg.src})` }}>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <L.TextName>TRACKER</L.TextName>
            </div>

            <L.ContentBack>
              <L.BackToSite>Voltar ao site</L.BackToSite>

              <RiArrowRightSLine size={20} />
            </L.ContentBack>
          </div>
        </L.Left> */}

        <L.ContentRight>
          {!isCreateAccount ? <Login toggle={toggle} /> : <CreateAccount toggle={toggle} />}
        </L.ContentRight>
      </L.Content>
    </L.Container>
  )
} 