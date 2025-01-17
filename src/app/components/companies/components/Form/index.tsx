import { Col } from "@/app/components/UI/Col";
import { InputFilePfx } from "@/app/components/UI/Inputs/InputFilePfx";
import { InputLabel } from "@/app/components/UI/Inputs/InputText";
import { Row } from "@/app/components/UI/Row";
import { SectionInputs } from "@/app/components/UI/SectionInputs";

import { BsPersonVcard } from "react-icons/bs";
import { TbCertificate } from "react-icons/tb";

export function FormCompany() {
  return (
    <Col margin="0.5rem 0 0 0" gap="1.3rem">
      <SectionInputs
        icon={<BsPersonVcard size={20} color="rgb(117, 129, 180)" />}
        textLabel="Informações Gerais"
        divider
      >
        <Row>
          <Row>
            <Col>
              <InputLabel textLabel="Razão social" value="" handleChange={() => console.log('jfsdjjkll')} />
            </Col>

            <Col>
              <InputLabel textLabel="Nome Fantasia" value="" handleChange={() => console.log('jfsdjjkll')} />
            </Col>
          </Row>

          <Row>
            <Col>
              <InputLabel textLabel="CNPJ" value="" handleChange={() => console.log('jfsdjjkll')} />
            </Col>

            <Col>
              <InputLabel textLabel="I.E" value="" handleChange={() => console.log('jfsdjjkll')} />
            </Col>
          </Row>

          <Row>
            <Col width="20%" minWidth="100px">
              <InputLabel textLabel="CEP" value="" handleChange={() => console.log('jfsdjjkll')} />
            </Col>

            <Col width="70%">
              <InputLabel textLabel="Endereço" value="" handleChange={() => console.log('jfsdjjkll')} />
            </Col>
          </Row>

          <Row>
            <Col width="50%">
              <InputLabel textLabel="Bairro" value="" handleChange={() => console.log('jfsdjjkll')} />
            </Col>

            <Col width="20%" minWidth="100px">
              <InputLabel textLabel="Numero" value="" handleChange={() => console.log('jfsdjjkll')} />
            </Col>

            <Col width="10%" minWidth="100px">
              <InputLabel textLabel="UF" value="" handleChange={() => console.log('jfsdjjkll')} />
            </Col>
          </Row>
        </Row>
      </SectionInputs>

      <SectionInputs
        icon={<TbCertificate size={25} color="rgb(117, 129, 180)" />}
        textLabel="Certificado"
      >

        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
          <InputFilePfx getValues={(file) => console.log(file)} />

          <div style={{ width: '200px' }}>
            <InputLabel placeholder="Senha do certificado" value="" handleChange={() => console.log('jfsdjjkll')} />
          </div>
        </div>
      </SectionInputs>
    </Col>
  )
}