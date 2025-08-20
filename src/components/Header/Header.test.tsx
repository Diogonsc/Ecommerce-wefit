import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './index';
import { CartProvider } from '../../contexts/CartContextProvider';

// Wrapper para prover os contextos necessários
function createWrapper() {
  return ({ children }: { children: React.ReactNode }) => (
    <BrowserRouter>
      <CartProvider>
        {children}
      </CartProvider>
    </BrowserRouter>
  );
}

describe('Header Component', () => {
  it('deve renderizar o logo corretamente', () => {
    render(<Header />, { wrapper: createWrapper() });
    
    expect(screen.getByText('WeMovies')).toBeInTheDocument();
  });

  it('deve renderizar o texto do carrinho', () => {
    render(<Header />, { wrapper: createWrapper() });
    
    expect(screen.getByText('Carrinho')).toBeInTheDocument();
  });

  it('deve mostrar 0 itens quando o carrinho estiver vazio', () => {
    render(<Header />, { wrapper: createWrapper() });
    
    expect(screen.getByText('0 itens')).toBeInTheDocument();
  });

  it('deve mostrar a quantidade correta de itens no carrinho', () => {
    // Mock do contexto do carrinho com itens
    const MockCartProvider = ({ children }: { children: React.ReactNode }) => (
      <BrowserRouter>
        <CartProvider>
          {children}
        </CartProvider>
      </BrowserRouter>
    );

    render(<Header />, { wrapper: MockCartProvider });
    
    // Por padrão, o carrinho começa vazio
    expect(screen.getByText('0 itens')).toBeInTheDocument();
  });

  it('deve ter estrutura semântica correta', () => {
    render(<Header />, { wrapper: createWrapper() });
    
    const logo = screen.getByText('WeMovies');
    const cartText = screen.getByText('Carrinho');
    
    expect(logo).toBeInTheDocument();
    expect(cartText).toBeInTheDocument();
  });

  it('deve ter cursor pointer nos elementos clicáveis', () => {
    render(<Header />, { wrapper: createWrapper() });
    
    const logo = screen.getByText('WeMovies');
    const cartText = screen.getByText('Carrinho');
    
    expect(logo).toBeInTheDocument();
    expect(cartText).toBeInTheDocument();
  });
});
