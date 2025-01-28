import { z } from "zod"
import { FormValues } from "../initialStates"

interface Errors {
  message: string
  keyError: string | number
}

const ValidateCompany = (company: FormValues): Errors | null => {
  const schema = z.object({
    name: z.string({
      required_error: "(Razão Social) deve ser informado!",
      message: "(Razão Social) deve ser informado!"
    }).max(200).nonempty("(Razão Social) deve ser informado!"),
    tradeName: z.string({
      required_error: "(Nome Fantasia) deve ser informado!",
      message: "(Nome Fantasia) deve ser informado!"
    }).max(200).nonempty("(Nome Fantasia) deve ser informado!"),
    cpfCnpj: z.string({
      required_error: "(CNPJ) deve ser informado!",
      message: "(CNPJ) deve ser informado!",
    }).min(11).max(14).nonempty("(CNPJ deve ser informado!"),
    email: z
      .string({
        required_error: "(Email) é obrigatório!",
      })
      .email({
        message: "(Email) deve ser informado e valido!",
      })
      .nonempty("(Email) deve ser informado e valido!")
      .nullable()
      .refine((value) => value !== null, {
        message: "(Email) deve ser informado!",
      }),
    uf: z.string({
      required_error: "(UF) deve ser informado!",
      message: "(UF) deve ser informado!"
    }).max(2).nonempty("(UF) deve ser informado!"),
    ie: z.string().optional().nullable(),
    cep: z.string().max(8).optional().nullable(),
    endereco: z.string().optional().nullable(),
    bairro: z.string().max(14).optional().nullable(),
    numero: z.string().max(14).optional().nullable(),
    certification: z.object({
      name: z.string().optional().nullable(),
      certBase64: z.string({
        required_error: "(Certificado) deve ser informado!",
        message: "(Certificado) deve ser informado!"
      }).nullable(),
      passwordCert: z.string({
        required_error: "(Senha) deve ser informado!",
        message: "(Senha) deve ser informado!"
      }).nullable(),
    }).optional().nullable()
  })

  const { error } = schema.safeParse(company)

  if (error?.issues && error?.issues.length) {
    const errors = {
      message: error?.issues[0].message || '',
      keyError: error?.issues[0].path[0] || ''
    }

    return errors
  }

  return null
}

export { ValidateCompany }