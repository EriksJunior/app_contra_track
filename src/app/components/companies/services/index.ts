import api from "@/utils/configs/api";
import { FormValues } from "../initialStates";
import { toast } from "react-toastify";
import axios from "axios";

export async function SaveCompany(company: FormValues) {
  try {
    const { data } = await api.post('/companies', company)

    return data
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      toast.error(
        `${error?.response?.data?.message ||
        "Opa, ocorreu um problema ao registrar essa empresa 🤯"
        }`,
        {
          position: "top-right",
        }
      );

      throw error
    } else {
      console.log(error)
      toast.error("Erro inesperado. Tente novamente.");
    }
  }
}