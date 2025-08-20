import { useQuery } from '@tanstack/react-query'
import { getAllProducts } from '../services/getAllProducts'

export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: getAllProducts,
    staleTime: 0,
    gcTime: 0,
    retry: false,
    refetchOnWindowFocus: false,
  })
}
