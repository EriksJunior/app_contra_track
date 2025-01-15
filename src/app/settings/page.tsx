"use client"
import { useContext } from "react";
import { ThemeContext } from "@/context/theme";

import { InputLabel } from "@/app/components/UI/Inputs/InputText";
import { Card } from "@/app/components/UI/Card";

export default function Settings() {
  const { theme } = useContext(ThemeContext);

  return (
    <div style={{ padding: "15px 15px 15px 0", height: '100%' }}>
      <Card theme={theme} height="100%">
        <h3>Configurações</h3>
        <InputLabel textLabel="Nome" handleChange={(e) => console.log(e)} value="" />
      </Card>
    </div>
  )
} 