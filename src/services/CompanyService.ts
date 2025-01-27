import api from "@/utils/configs/api";
import { FormValues as FormCompany } from "@/components/companies/initialStates";

export async function SaveCompany(company: FormCompany) {
  const { data } = await api.post('/companies', company)

  return data
}