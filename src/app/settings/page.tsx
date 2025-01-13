"use client" 

import { InputLabel } from "../components/UI/Inputs/InputText";

export default function Settings() {
  return (
    <>
      <InputLabel textLabel="Nome" handleChange={(e) => console.log(e)} value=""/>
    </>
  )
} 