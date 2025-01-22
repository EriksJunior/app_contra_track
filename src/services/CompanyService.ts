import axios from "axios";
import api from "@/utils/configs/api";
import { FormValues as FormCompany } from "@/components/companies/initialStates";

import { toast } from "react-toastify";

export async function SaveCompany(company: FormCompany) {
  try {
    const { data } = await api.post('/companies', company)

    return data
  } catch (error: unknown) {
    console.log(error)
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
      toast.error("Erro inesperado. Tente novamente.");
    }
  }
}