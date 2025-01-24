import api from "@/utils/configs/api";

import { FormValues as FormCompany } from "@/components/companies/initialStates";
import { FormValues as FormUser } from "@/components/account/initialStates";

interface IAccount {
  user: FormUser
  company: FormCompany
}

interface ILogin {
  login: string
  password: string
}

export async function CreateAccount(account: IAccount) {
  const { data } = await api.post('/users', account)

  return data
}

export async function Login(login: ILogin) {
  const { data } = await api.post('/users/login', login)

  return data
}