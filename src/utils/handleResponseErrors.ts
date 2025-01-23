
import { IErrorResponseData } from "@/interfaces/ErrorResponse";
import { AxiosError } from "axios";


export const handleResponseErrors = (error: AxiosError<IErrorResponseData>) => {
  const response = error.response

  if (response) {
    return response?.data.erros?.length ? response?.data.erros[0] : response?.data.message
  }
}