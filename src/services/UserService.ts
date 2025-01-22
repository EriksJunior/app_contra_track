import api from "@/utils/configs/api";

import { FormValues as FormCompany } from "@/components/companies/initialStates";
import { FormValues as FormUser } from "@/components/login/initialStates";

interface IPayload {
  user: FormUser
  company: FormCompany
}

export async function CreateAccount(payload: IPayload) {
  const { data } = await api.post('/users', payload)

  return data
}