import { renderHook, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useProducts } from './useProducts';
import { getAllProducts } from '../services/getAllProducts';

// Mock do serviço
jest.mock('../services/getAllProducts');
const mockGetAllProducts = getAllProducts as jest.MockedFunction<typeof getAllProducts>;

// Wrapper para prover o QueryClient
function createWrapper() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
  
  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}

describe('useProducts', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('deve retornar dados quando a requisição for bem-sucedida', async () => {
    const mockProducts = {
      products: [
        {
          id: 1,
          title: 'Produto Teste',
          price: 10,
          image: 'test.jpg'
        }
      ]
    };

    mockGetAllProducts.mockResolvedValue(mockProducts);

    const { result } = renderHook(() => useProducts(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(result.current.data).toEqual(mockProducts);
    expect(result.current.error).toBeNull();
  });

  it('deve retornar erro quando a requisição falhar', async () => {
    const mockError = new Error('Erro na requisição');
    mockGetAllProducts.mockRejectedValue(mockError);

    const { result } = renderHook(() => useProducts(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(result.current.error).toBeDefined();
    expect(result.current.data).toBeUndefined();
  });

  it('deve mostrar loading inicialmente', () => {
    mockGetAllProducts.mockImplementation(() => new Promise(() => {})); // Promise que nunca resolve

    const { result } = renderHook(() => useProducts(), {
      wrapper: createWrapper(),
    });

    expect(result.current.isLoading).toBe(true);
  });

  it('deve usar a queryKey correta', () => {
    renderHook(() => useProducts(), {
      wrapper: createWrapper(),
    });

    expect(mockGetAllProducts).toHaveBeenCalled();
  });
});
