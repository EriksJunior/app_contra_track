import { SearchBar } from "@/app/components/UI/SearchBar";
import { Button } from "@/app/components/UI/Button";
import { OffCanvas } from "@/app/components/UI/OffCanvas";

import { UseGeneral } from "../../../hook/useGeneral";

import { BsFillPersonPlusFill } from "react-icons/bs";

export function Companies() {
  const { closeOffCanvas, isOffCanvasOpen, toggleOffCanvas } = UseGeneral();

  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <div style={{ width: "70%" }}>
        <SearchBar getValues={(values) => console.log(values)} defaultFilter="nome" />
      </div>

      <div>
        <Button icon={<BsFillPersonPlusFill size={20} color="white" />} click={toggleOffCanvas} />
      </div>

      <OffCanvas
        expanded={isOffCanvasOpen}
        onClose={closeOffCanvas}
        title={'Cadastre uma nova Empresa'}
        clearValues={() => console.log('limpando')}
      ></OffCanvas>
    </div>
  )
}