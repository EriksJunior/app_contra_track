
import { useState, useEffect } from "react"
import { useRouter } from 'next/navigation'
import { useContext } from "react";
import { GeneralContext } from "@/context";

import { AxiosError } from "axios";

import { Login } from "@/services/UserService"
import { handleResponseErrors } from "@/utils/handleResponseErrors";

import { ValidateLogin } from "../validators/login";

import { IErrorResponseData } from "@/interfaces/ErrorResponse";
import { IUser } from "@/interfaces/General";

export function UseLogin() {
  const router = useRouter()
  const { user, setUser } = useContext(GeneralContext)

  const [payload, setPayload] = useState<{ login: string, password: string }>({ login: "", password: "" })
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [messageError, setMessageError] = useState<string | undefined>('')

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    setPayload((prevState) => ({ ...prevState, [name]: value }));
  };


  const isValid = () => {
    const error = ValidateLogin(payload)

    if (error && Object.keys(error).length) {
      setMessageError(error.message)
      return false
    }

    return true
  }


  const sendLogin = async () => {
    try {
      setIsLoading(true)

      if (!isValid()) return

      const result: IUser = await Login(payload)
      const data = {
        company: result?.token || '',
        companies: result?.companies?.filter((_, idx) => idx !== 0) || [],
      }

      localStorage.setItem('tokens', JSON.stringify(data))

      setUser(result)

      Reflect.deleteProperty(result, 'token')
      router.push("/home")
    } catch (error: unknown) {
      const axiosErr = error as AxiosError<IErrorResponseData>;

      const message = handleResponseErrors(axiosErr)
      setMessageError(message)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    console.log(user)
  }, [user])

  return { handleChange, sendLogin, isLoading, messageError, payload }
}