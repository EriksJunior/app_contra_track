import { SearchBar } from "@/app/components/UI/SearchBar";
import { Button } from "@/app/components/UI/Button";

import { BsFillPersonPlusFill } from "react-icons/bs";

export function Companies() {
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <div style={{ width: "70%" }}>
        <SearchBar getValues={(values) => console.log(values)} defaultFilter="nome" />
      </div>

      <div>
        <Button icon={<BsFillPersonPlusFill size={20} color="white"/>} />
      </div>
    </div>
  )
}