import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CartProvider } from './CartContextProvider';
import { useCart } from '../hooks/useCart';

// Componente de teste para acessar o contexto
function TestComponent() {
  const { 
    state, 
    addItem, 
    removeItem, 
    updateQuantity, 
    clearCart, 
    getTotalItems, 
    getItemQuantity, 
    getTotalPrice 
  } = useCart();

  return (
    <div>
      <div data-testid="total-items">{getTotalItems()}</div>
      <div data-testid="total-price">{getTotalPrice()}</div>
      <div data-testid="items-count">{state.items.length}</div>
      <button 
        onClick={() => addItem({ id: 1, title: 'Produto Teste', price: 10, image: 'test.jpg' })}
        data-testid="add-item"
      >
        Adicionar Item
      </button>
      <button 
        onClick={() => removeItem(1)}
        data-testid="remove-item"
      >
        Remover Item
      </button>
      <button 
        onClick={() => updateQuantity(1, 5)}
        data-testid="update-quantity"
      >
        Atualizar Quantidade
      </button>
      <button 
        onClick={() => updateQuantity(1, 0)}
        data-testid="set-quantity-zero"
      >
        Definir Quantidade 0
      </button>
      <button 
        onClick={clearCart}
        data-testid="clear-cart"
      >
        Limpar Carrinho
      </button>
      <div data-testid="item-quantity">{getItemQuantity(1)}</div>
    </div>
  );
}

// Wrapper para prover o contexto
function renderWithCartProvider(component: React.ReactElement) {
  return render(
    <CartProvider>
      {component}
    </CartProvider>
  );
}

describe('CartContextProvider', () => {
  it('deve renderizar o componente com o contexto', () => {
    renderWithCartProvider(<TestComponent />);
    
    expect(screen.getByTestId('total-items')).toBeInTheDocument();
    expect(screen.getByTestId('total-price')).toBeInTheDocument();
  });

  it('deve adicionar um item ao carrinho', async () => {
    const user = userEvent.setup();
    renderWithCartProvider(<TestComponent />);

    await act(async () => {
      await user.click(screen.getByTestId('add-item'));
    });

    expect(screen.getByTestId('total-items')).toHaveTextContent('1');
    expect(screen.getByTestId('items-count')).toHaveTextContent('1');
    expect(screen.getByTestId('item-quantity')).toHaveTextContent('1');
  });

  it('deve incrementar a quantidade quando adicionar o mesmo item', async () => {
    const user = userEvent.setup();
    renderWithCartProvider(<TestComponent />);

    await act(async () => {
      await user.click(screen.getByTestId('add-item'));
      await user.click(screen.getByTestId('add-item'));
    });

    expect(screen.getByTestId('total-items')).toHaveTextContent('2');
    expect(screen.getByTestId('item-quantity')).toHaveTextContent('2');
  });

  it('deve remover um item do carrinho', async () => {
    const user = userEvent.setup();
    renderWithCartProvider(<TestComponent />);

    await act(async () => {
      await user.click(screen.getByTestId('add-item'));
      await user.click(screen.getByTestId('remove-item'));
    });

    expect(screen.getByTestId('total-items')).toHaveTextContent('0');
    expect(screen.getByTestId('items-count')).toHaveTextContent('0');
    expect(screen.getByTestId('item-quantity')).toHaveTextContent('0');
  });

  it('deve atualizar a quantidade de um item', async () => {
    const user = userEvent.setup();
    renderWithCartProvider(<TestComponent />);

    await act(async () => {
      await user.click(screen.getByTestId('add-item'));
      await user.click(screen.getByTestId('update-quantity'));
    });

    expect(screen.getByTestId('total-items')).toHaveTextContent('5');
    expect(screen.getByTestId('item-quantity')).toHaveTextContent('5');
  });

  it('deve limpar o carrinho', async () => {
    const user = userEvent.setup();
    renderWithCartProvider(<TestComponent />);

    await act(async () => {
      await user.click(screen.getByTestId('add-item'));
      await user.click(screen.getByTestId('clear-cart'));
    });

    expect(screen.getByTestId('total-items')).toHaveTextContent('0');
    expect(screen.getByTestId('items-count')).toHaveTextContent('0');
    expect(screen.getByTestId('total-price')).toHaveTextContent('0');
  });

  it('deve calcular o preço total corretamente', async () => {
    const user = userEvent.setup();
    renderWithCartProvider(<TestComponent />);

    await act(async () => {
      await user.click(screen.getByTestId('add-item'));
      await user.click(screen.getByTestId('update-quantity'));
    });

    expect(screen.getByTestId('total-price')).toHaveTextContent('50'); // 10 * 5
  });

  it('deve remover item quando quantidade for zero', async () => {
    const user = userEvent.setup();
    renderWithCartProvider(<TestComponent />);

    await act(async () => {
      await user.click(screen.getByTestId('add-item'));
      await user.click(screen.getByTestId('update-quantity')); // Define como 5
    });

    // Atualiza para quantidade 0
    await act(async () => {
      await user.click(screen.getByTestId('set-quantity-zero'));
    });

    expect(screen.getByTestId('total-items')).toHaveTextContent('0');
    expect(screen.getByTestId('items-count')).toHaveTextContent('0');
  });
});
