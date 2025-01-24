
import { useState, useRef } from "react"
import { useRouter } from 'next/navigation'

import { AxiosError } from "axios";

import { Login } from "@/services/UserService"
import { handleResponseErrors } from "@/utils/handleResponseErrors";
import { IErrorResponseData } from "@/interfaces/ErrorResponse";


type RefValidateKeys = "login" | "password";

export function UseLogin() {
  const router = useRouter()

  const [payload, setPayload] = useState<{ login: string, password: string }>({ login: "", password: "" })
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [messageError, setMessageError] = useState<string | undefined>('')

  const refValidate: Record<RefValidateKeys, React.RefObject<HTMLInputElement | null>> = {
    login: useRef<HTMLInputElement>(null),
    password: useRef<HTMLInputElement>(null),
  }

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    setPayload((prevState) => ({ ...prevState, [name]: value }));
  };


  // const isValid = () => {
  //   const errors = ValidateCreateAccount(payload)

  //   if (errors && Object.keys(errors).length) {
  //     errors.forEach((e) => {
  //       const ref = refValidate[e.keyError as keyof typeof refValidate];

  //       if (ref?.current) {
  //         ref.current.setAttribute("required", "true");
  //         ref.current.focus();
  //       }
  //     });

  //     return false
  //   }

  //   return true
  // }


  const sendLogin = async () => {
    try {
      setIsLoading(true)
      // if (!isValid()) return

      await Login(payload)
      router.push("/home")
    } catch (error: unknown) {
      const axiosErr = error as AxiosError<IErrorResponseData>;

      const message = handleResponseErrors(axiosErr)
      setMessageError(message)
    } finally {
      setIsLoading(false)
    }
  }

  return { handleChange, sendLogin, isLoading, messageError, refValidate, payload }
}