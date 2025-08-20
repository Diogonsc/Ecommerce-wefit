import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import { Home } from './index';
import { CartProvider } from '../../contexts/CartContextProvider';

// Mock do componente Card
jest.mock('../../components/Card', () => ({
  Card: () => <div data-testid="card-component">Card Component</div>,
}));

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

describe('Home Page', () => {
  it('deve renderizar a página Home corretamente', () => {
    render(<Home />, { wrapper: createWrapper() });
    
    expect(screen.getByTestId('card-component')).toBeInTheDocument();
  });

  it('deve ter a estrutura correta com container', () => {
    const { container } = render(<Home />, { wrapper: createWrapper() });
    
    // Verifica se o container principal está presente
    expect(container.firstChild).toBeInTheDocument();
  });

  it('deve renderizar o componente Card dentro da página', () => {
    render(<Home />, { wrapper: createWrapper() });
    
    expect(screen.getByText('Card Component')).toBeInTheDocument();
  });
});
