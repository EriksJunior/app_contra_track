import { z } from "zod"
import { FormValues as FormUser } from "../initialStates"
import { FormValues as FormCompany } from "@/components/companies/initialStates"

interface Errors {
  message: string
  keyError: string | number
}

const ValidateCreateAccount = (payload: { user: FormUser, company: FormCompany }): Errors | null => {
  const schema = z.object({
    user: z.object({
      name: z.string({
        required_error: "(Razão Social) deve ser informado!",
        message: "(Razão Social) deve ser informado!"
      }).max(255).nonempty("(Razão Social) deve ser informado!"),
      login: z.string().email({
        message: "(Email) deve ser informado e valido!",
      }).nonempty("(Email) deve ser informado e valido!"),
      password: z.string({
        required_error: "(Password) deve ser informado!",
        message: "(Password) deve ser informado!"
      }).max(255).nonempty("(Password) deve ser informado!"),
    }),
    company: z.object({
      name: z.string({
        required_error: "(Razão Social) deve ser informado!",
        message: "(Razão Social) deve ser informado!"
      }).max(255).nonempty("(Razão Social) deve ser informado!"),
      tradeName: z.string({
        required_error: "(Nome Fantasia) deve ser informado!",
        message: "(Nome Fantasia) deve ser informado!"
      }).max(255).nonempty("(Nome Fantasia) deve ser informado!"),
      email: z.string().email({
        message: "(Email) deve ser informado e valido!",
      }),
      cpfCnpj: z.string({
        required_error: "(Password) deve ser informado!",
        message: "(Password) deve ser informado!"
      }).max(14).nonempty("(Password) deve ser informado!"),
      uf: z.string({
        required_error: "(UF) deve ser informada!",
        message: "(UF) deve ser informada!"
      }).max(2).nonempty("(UF) deve ser informada!"),
      cidade: z.string({
        required_error: "(Cidade) deve ser informada!",
        message: "(Cidade) deve ser informada!"
      }).max(255).nonempty("(Cidade) deve ser informada!"),
    }),
  })

  const { error } = schema.safeParse(payload)

  if (error?.issues && error?.issues.length) {
    const errors = {
      message: error?.issues[0].message || '',
      keyError: error?.issues[0].path[1] || ''
    }

    return errors
  }

  return null
}

export { ValidateCreateAccount }