import { z } from "zod"

interface Errors {
  message: string
  keyError: string | number
}

const ValidateLogin = (payload: { login: string, password: string }): Errors | null => {
  const schema = z.object({
    login: z.string().email({
      message: "(Email) deve ser informado e valido!",
    }).nonempty("(Email) deve ser informado e valido!"),
    password: z.string({
      required_error: "(Password) deve ser informado!",
      message: "(Password) deve ser informado!"
    }).max(255).nonempty("(Password) deve ser informado!"),
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

export { ValidateLogin }