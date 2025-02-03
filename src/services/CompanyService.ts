import api from "@/utils/configs/api";
import { FormValues as FormCompany } from "@/components/companies/initialStates";

export async function SaveCompany(company: FormCompany) {
  const { data } = await api.post('/companies', company)

  return data
}

export async function UpdateCompany(company: FormCompany) {
  const { data } = await api.put(`/companies/${company.id}`, company)

  return data
}

export async function FindCompanyById(id: string): Promise<FormCompany> {
  const { data } = await api.get(`/companies/${id}`)

  return {
    ...data,
    certification: {
      name: data?.cert || null,
      certBase64: null,
      passwordCert: null,
    }
  }
}

export async function FindCompanies(): Promise<FormCompany[]> {
  const { data } = await api.get(`/companies`)

  return data?.map((item: FormCompany) => {
    return {
      ...item,
      certification: {
        name: item?.cert || null,
        certBase64: null,
        passwordCert: null,
      }
    }
  })
}

export async function DeleteCertification(companyId: string): Promise<void> {
  await api.delete(`/companies/${companyId}`)
}