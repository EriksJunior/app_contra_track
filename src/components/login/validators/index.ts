import { z } from "zod"
import { FormValues as FormUser } from "../initialStates"
import { FormValues as FormCompany } from "@/components/companies/initialStates"

interface Errors {
  message: string
  keyError: string | number
}

const ValidateCreateAccount = (payload: { user: FormUser, company: FormCompany }): Errors[] => {
  const schema = z.object({
    user: z.object({
      name: z.string({
        required_error: "(Razão Social) deve ser informado!",
        message: "(Razão Social) deve ser informado!"
      }).max(200).nonempty("(Razão Social) deve ser informado!"),
      uf: z.string({
        required_error: "(UF) deve ser informado!",
        message: "(UF) deve ser informado!"
      }).max(2).nonempty("(UF) deve ser informado!"),
    })
  })

  const { error } = schema.safeParse(payload)

  if (error?.issues && error?.issues.length) {
    return error?.issues.map(e => {
      return {
        message: e?.message || '',
        keyError: e?.path[1] || ''
      }
    }).reverse()
  }

  return []
}

export { ValidateCreateAccount }