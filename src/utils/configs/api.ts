import axios, { InternalAxiosRequestConfig } from "axios"

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL
})

api.interceptors.request.use((value: InternalAxiosRequestConfig) => {
  if (localStorage.getItem('tokens')) {
    const tokens = JSON.parse(localStorage.getItem('tokens') || '')

    value.headers.set('authorization', `Bearer ${tokens?.companySelected?.token}`)
  }

  return value
})

export default api