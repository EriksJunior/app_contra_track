import api from "@/utils/configs/api";
import { FormValues as FormCompany } from "@/components/companies/initialStates";

export async function SaveCompany(company: FormCompany) {
  const { data } = await api.post('/companies', company)

  return data
}

export async function FindCompanyById(id: string): Promise<FormCompany> {
  const { data } = await api.get(`/companies/${id}`)

  return data
}