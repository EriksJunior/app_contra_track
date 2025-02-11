import { IDocuments } from "@/components/document/initialStates"
import api from "@/utils/configs/api"

export async function FindDocuments(text: string = '', type: string = '', startDate: string = '', endDate: string = '', page = 1): Promise<IDocuments[]> {
  const { data } = await api.get(`/nfes?q=${text}&type=${type}&startDate=${startDate}&endDate=${endDate}&page=${page}`)

  return data
}