
import { useState, useRef } from "react"
import { useRouter } from 'next/navigation'

import { AxiosError } from "axios";

import { FormValues as FormUser, INITIAL_STATE_USER } from "../initialStates"
import { FormValues as FormCompany, INITIAL_STATE_COMPANY } from "../../companies/initialStates"

import { CreateAccount } from "@/services/UserService"
import { handleResponseErrors } from "@/utils/handleResponseErrors";
import { IErrorResponseData } from "@/interfaces/ErrorResponse";

import { ValidateCreateAccount } from "../validators/createAccount";

type RefValidate = {
  user: {
    name: React.RefObject<HTMLInputElement | null>;
    login: React.RefObject<HTMLInputElement | null>;
    password: React.RefObject<HTMLInputElement | null>;
  };
  company: {
    name: React.RefObject<HTMLInputElement | null>;
    tradeName: React.RefObject<HTMLInputElement | null>;
    email: React.RefObject<HTMLInputElement | null>;
    cpfCnpj: React.RefObject<HTMLInputElement | null>;
    uf: React.RefObject<HTMLInputElement | null>;
    cidade: React.RefObject<HTMLInputElement | null>;
  };
};

export function UseCreateAccount() {
  const router = useRouter()

  const [account, setAccount] = useState<{ user: FormUser, company: FormCompany }>({ user: INITIAL_STATE_USER, company: INITIAL_STATE_COMPANY })
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [messageError, setMessageError] = useState<string | undefined>('')

  const refValidate: RefValidate = {
    user: {
      name: useRef<HTMLInputElement>(null),
      login: useRef<HTMLInputElement>(null),
      password: useRef<HTMLInputElement>(null),
    },
    company: {
      name: useRef<HTMLInputElement>(null),
      tradeName: useRef<HTMLInputElement>(null),
      email: useRef<HTMLInputElement>(null),
      cpfCnpj: useRef<HTMLInputElement>(null),
      uf: useRef<HTMLInputElement>(null),
      cidade: useRef<HTMLInputElement>(null),
    },
  };
  const handleChange = (e: React.FormEvent<HTMLInputElement>, type: 'user' | 'company' = 'user') => {
    const { name, value } = e.currentTarget;

    setAccount((prevState) => ({
      ...prevState,
      [type]: {
        ...prevState[type],
        [name]: value,
      },
    }));
  };


  const isValid = () => {
    const erro = ValidateCreateAccount(account)

    if (erro && Object.keys(erro).length) {
      const { keyError, principalKey } = erro

      const group = refValidate[principalKey as keyof RefValidate];
      const ref = group[keyError as keyof typeof group] as React.RefObject<HTMLInputElement>;

      if (ref?.current) {
        ref.current.setAttribute("required", "true");
        ref.current.focus();
      }

      return false
    }

    return true
  }


  const createAccount = async () => {
    try {
      setIsLoading(true)
      if (!isValid()) return

      await CreateAccount(account)
      router.push("/home")
    } catch (error: unknown) {
      const axiosErr = error as AxiosError<IErrorResponseData>;

      const message = handleResponseErrors(axiosErr)
      setMessageError(message)
    } finally {
      setIsLoading(false)
    }
  }

  return { handleChange, createAccount, isLoading, messageError, refValidate, account }
}