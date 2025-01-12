import { useQuery } from "@tanstack/react-query";
import { getData } from "@/api/endpoints/tibia";

export const useApiRequest = <T>(endpoint: string) => {
  return useQuery<T>({
    queryKey: [endpoint],
    queryFn: () => getData<T>(endpoint)
  })
}
