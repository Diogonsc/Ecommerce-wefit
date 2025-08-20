import { renderHook, act } from '@testing-library/react';
import { useCart } from './useCart';
import { CartProvider } from '../contexts/CartContextProvider';

// Wrapper para prover o contexto
function wrapper({ children }: { children: React.ReactNode }) {
  return <CartProvider>{children}</CartProvider>;
}

describe('useCart', () => {
  it('deve retornar o contexto do carrinho', () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    expect(result.current).toBeDefined();
    expect(result.current.addItem).toBeDefined();
    expect(result.current.removeItem).toBeDefined();
    expect(result.current.updateQuantity).toBeDefined();
    expect(result.current.clearCart).toBeDefined();
    expect(result.current.getTotalItems).toBeDefined();
    expect(result.current.getItemQuantity).toBeDefined();
    expect(result.current.getTotalPrice).toBeDefined();
  });

  it('deve adicionar um item ao carrinho', () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => {
      result.current.addItem({
        id: 1,
        title: 'Produto Teste',
        price: 10,
        image: 'test.jpg'
      });
    });

    expect(result.current.getTotalItems()).toBe(1);
    expect(result.current.getItemQuantity(1)).toBe(1);
  });

  it('deve incrementar quantidade quando adicionar o mesmo item', () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => {
      result.current.addItem({
        id: 1,
        title: 'Produto Teste',
        price: 10,
        image: 'test.jpg'
      });
      result.current.addItem({
        id: 1,
        title: 'Produto Teste',
        price: 10,
        image: 'test.jpg'
      });
    });

    expect(result.current.getTotalItems()).toBe(2);
    expect(result.current.getItemQuantity(1)).toBe(2);
  });

  it('deve remover um item do carrinho', () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => {
      result.current.addItem({
        id: 1,
        title: 'Produto Teste',
        price: 10,
        image: 'test.jpg'
      });
      result.current.removeItem(1);
    });

    expect(result.current.getTotalItems()).toBe(0);
    expect(result.current.getItemQuantity(1)).toBe(0);
  });

  it('deve atualizar a quantidade de um item', () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => {
      result.current.addItem({
        id: 1,
        title: 'Produto Teste',
        price: 10,
        image: 'test.jpg'
      });
      result.current.updateQuantity(1, 5);
    });

    expect(result.current.getTotalItems()).toBe(5);
    expect(result.current.getItemQuantity(1)).toBe(5);
  });

  it('deve limpar o carrinho', () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => {
      result.current.addItem({
        id: 1,
        title: 'Produto Teste',
        price: 10,
        image: 'test.jpg'
      });
      result.current.clearCart();
    });

    expect(result.current.getTotalItems()).toBe(0);
    expect(result.current.getTotalPrice()).toBe(0);
  });

  it('deve calcular o preço total corretamente', () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => {
      result.current.addItem({
        id: 1,
        title: 'Produto Teste',
        price: 10,
        image: 'test.jpg'
      });
      result.current.updateQuantity(1, 3);
    });

    expect(result.current.getTotalPrice()).toBe(30); // 10 * 3
  });

  it('deve retornar quantidade 0 para item inexistente', () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    expect(result.current.getItemQuantity(999)).toBe(0);
  });
});
