
import { useState, useRef } from "react"
import { useRouter } from 'next/navigation'

import { AxiosError } from "axios";

import { FormValues as FormUser, INITIAL_STATE_USER } from "../initialStates"
import { FormValues as FormCompany, INITIAL_STATE_COMPANY } from "../../companies/initialStates"

import { CreateAccount } from "@/services/UserService"
import { handleResponseErrors } from "@/utils/handleResponseErrors";
import { IErrorResponseData } from "@/interfaces/ErrorResponse";

import { ValidateCreateAccount } from "../validators";


type RefValidateKeys = "name" | "login" | "password" | "companyName" | "tradeName" | "email" | "cpfCnpj" | "uf" | "cidade";

export function UseLogin() {
  const router = useRouter()

  const [payload, setPayload] = useState<{ user: FormUser, company: FormCompany }>({ user: INITIAL_STATE_USER, company: INITIAL_STATE_COMPANY })
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [messageError, setMessageError] = useState<string | undefined>('')

  const refValidate: Record<RefValidateKeys, React.RefObject<HTMLInputElement | null>> = {
    name: useRef<HTMLInputElement>(null),
    login: useRef<HTMLInputElement>(null),
    password: useRef<HTMLInputElement>(null),
    companyName: useRef<HTMLInputElement>(null),
    tradeName: useRef<HTMLInputElement>(null),
    email: useRef<HTMLInputElement>(null),
    cpfCnpj: useRef<HTMLInputElement>(null),
    uf: useRef<HTMLInputElement>(null),
    cidade: useRef<HTMLInputElement>(null),
  }

  const handleChange = (e: React.FormEvent<HTMLInputElement>, type: 'user' | 'company' = 'user') => {
    const { name, value } = e.currentTarget;

    setPayload((prevState) => ({
      ...prevState,
      [type]: {
        ...prevState[type],
        [name]: value,
      },
    }));
  };


  const isValid = () => {
    const errors = ValidateCreateAccount(payload)

    if (errors && Object.keys(errors).length) {
      errors.forEach((e) => {
        const ref = refValidate[e.keyError as keyof typeof refValidate];

        if (ref?.current) {
          ref.current.setAttribute("required", "true");
          ref.current.focus();
        }
      });

      return false
    }

    return true
  }


  const createAccount = async () => {
    try {
      setIsLoading(true)
      if (!isValid()) return

      await CreateAccount(payload)
      router.push("/home")
    } catch (error: unknown) {
      const axiosErr = error as AxiosError<IErrorResponseData>;

      const message = handleResponseErrors(axiosErr)
      setMessageError(message)
    } finally {
      setIsLoading(false)
    }
  }

  return { handleChange, createAccount, isLoading, messageError, refValidate, payload }
}