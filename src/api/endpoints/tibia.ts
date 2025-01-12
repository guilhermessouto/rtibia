import { api } from "../axios"

export const getData = async <T>(endpoint: string) => {
  const { data } = await api.get<T>(endpoint)

  return data
}
