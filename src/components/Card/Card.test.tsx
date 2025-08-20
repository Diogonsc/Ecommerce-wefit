import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import { Card } from './index';
import { CartProvider } from '../../contexts/CartContextProvider';
import { useProducts } from '../../hooks/useProducts';
import { toast } from 'react-toastify';

// Mock dos hooks
jest.mock('../../hooks/useProducts');
jest.mock('react-toastify', () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
  },
}));

const mockUseProducts = useProducts as jest.MockedFunction<typeof useProducts>;

// Wrapper para prover todos os contextos necessários
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
      <BrowserRouter>
        <CartProvider>
          {children}
        </CartProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

const mockProducts = {
  products: [
    {
      id: 1,
      title: 'Produto Teste 1',
      price: 10.50,
      image: 'test1.jpg'
    },
    {
      id: 2,
      title: 'Produto Teste 2',
      price: 25.99,
      image: 'test2.jpg'
    }
  ]
};

describe('Card Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('deve renderizar produtos quando dados estão disponíveis', async () => {
    mockUseProducts.mockReturnValue({
      data: mockProducts,
      isLoading: false,
      error: null,
    } as unknown as ReturnType<typeof useProducts>);

    render(<Card />, { wrapper: createWrapper() });

    await waitFor(() => {
      expect(screen.getByText('Produto Teste 1')).toBeInTheDocument();
      expect(screen.getByText('Produto Teste 2')).toBeInTheDocument();
      expect(screen.getByText('R$ 10,50')).toBeInTheDocument();
      expect(screen.getByText('R$ 25,99')).toBeInTheDocument();
    });
  });

  it('deve mostrar loading quando dados estão sendo carregados', () => {
    mockUseProducts.mockReturnValue({
      data: undefined,
      isLoading: true,
      error: null,
    } as unknown as ReturnType<typeof useProducts>);

    render(<Card />, { wrapper: createWrapper() });

    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });

  it('deve mostrar mensagem de erro quando há erro na requisição', () => {
    mockUseProducts.mockReturnValue({
      data: undefined,
      isLoading: false,
      error: new Error('Erro na requisição'),
    } as unknown as ReturnType<typeof useProducts>);

    render(<Card />, { wrapper: createWrapper() });

    expect(screen.getByText('Erro ao buscar produtos. Por favor, tente novamente.')).toBeInTheDocument();
    expect(screen.getByText('Recarregar página')).toBeInTheDocument();
  });

  it('deve mostrar mensagem quando não há produtos', () => {
    mockUseProducts.mockReturnValue({
      data: { products: [] },
      isLoading: false,
      error: null,
    } as unknown as ReturnType<typeof useProducts>);

    render(<Card />, { wrapper: createWrapper() });

    expect(screen.getByText('Parece que não há nada por aqui :(')).toBeInTheDocument();
    expect(screen.getByText('Voltar para tela inicial')).toBeInTheDocument();
  });

  it('deve adicionar produto ao carrinho quando botão for clicado', async () => {
    const user = userEvent.setup();
    mockUseProducts.mockReturnValue({
      data: mockProducts,
      isLoading: false,
      error: null,
    } as unknown as ReturnType<typeof useProducts>);

    render(<Card />, { wrapper: createWrapper() });

    await waitFor(() => {
      expect(screen.getByText('Produto Teste 1')).toBeInTheDocument();
    });

    const addButton = screen.getAllByText('Adicionar ao carrinho')[0];
    await user.click(addButton);

    expect(toast.success).toHaveBeenCalledWith(
      'Produto Teste 1 adicionado ao carrinho!',
      expect.any(Object)
    );
  });

  it('deve mostrar toast de erro quando há erro na requisição', () => {
    mockUseProducts.mockReturnValue({
      data: undefined,
      isLoading: false,
      error: new Error('Erro na requisição'),
    } as unknown as ReturnType<typeof useProducts>);

    render(<Card />, { wrapper: createWrapper() });

    expect(toast.error).toHaveBeenCalledWith('Erro ao buscar produtos. Por favor, tente novamente.');
  });

  it('deve renderizar botões de adicionar ao carrinho para cada produto', async () => {
    mockUseProducts.mockReturnValue({
      data: mockProducts,
      isLoading: false,
      error: null,
    } as unknown as ReturnType<typeof useProducts>);

    render(<Card />, { wrapper: createWrapper() });

    await waitFor(() => {
      const addButtons = screen.getAllByText('Adicionar ao carrinho');
      expect(addButtons).toHaveLength(2);
    });
  });

  it('deve renderizar imagens dos produtos', async () => {
    mockUseProducts.mockReturnValue({
      data: mockProducts,
      isLoading: false,
      error: null,
    } as unknown as ReturnType<typeof useProducts>);

    render(<Card />, { wrapper: createWrapper() });

    await waitFor(() => {
      const images = screen.getAllByAltText('Produto Teste 1');
      expect(images[0]).toBeInTheDocument();
    });
  });
});
