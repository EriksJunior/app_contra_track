import { IDocuments } from "@/components/document/initialStates"
import api from "@/utils/configs/api"

export async function FindDocuments(): Promise<IDocuments[]> {
  const { data } = await api.get(`/nfes`)

  return data
}
