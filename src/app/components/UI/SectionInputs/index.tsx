import { ReactNode } from "react";
import { Col } from "../Col";
import { Label } from "../Label";
import { Row } from "../Row";

interface Props {
  children?: ReactNode
  icon?: ReactNode
  divider?: boolean
  textLabel?: string
}

export function SectionInputs({ icon, children, divider = false, textLabel }: Props) {
  return (
    <Col>
      <Row alignCenter>
        {icon && icon}
        <Label text={textLabel} fontSize="14px" color="rgb(117, 129, 180)" />
      </Row>

      <Row>
        {children}
      </Row>

      {divider &&
        <hr style={{ borderColor: "rgba(183, 183, 183, 0.137)", margin: '0.3rem 0' }} />
      }
    </Col>
  )
}