import { formatPrice } from './index';

describe('formatPrice', () => {
  it('deve formatar preço inteiro corretamente', () => {
    expect(formatPrice(10)).toBe('10,00');
    expect(formatPrice(100)).toBe('100,00');
    expect(formatPrice(0)).toBe('0,00');
  });

  it('deve formatar preço decimal corretamente', () => {
    expect(formatPrice(10.50)).toBe('10,50');
    expect(formatPrice(25.99)).toBe('25,99');
    expect(formatPrice(0.99)).toBe('0,99');
  });

  it('deve formatar preço com muitos decimais corretamente', () => {
    expect(formatPrice(10.567)).toBe('10,57'); // Arredonda para 2 casas decimais
    expect(formatPrice(25.123)).toBe('25,12');
  });

  it('deve formatar preços negativos corretamente', () => {
    expect(formatPrice(-10.50)).toBe('-10,50');
    expect(formatPrice(-25.99)).toBe('-25,99');
  });

  it('deve formatar preços muito grandes corretamente', () => {
    expect(formatPrice(1000000.50)).toBe('1000000,50');
    expect(formatPrice(999999.99)).toBe('999999,99');
  });

  it('deve formatar preços muito pequenos corretamente', () => {
    expect(formatPrice(0.01)).toBe('0,01');
    expect(formatPrice(0.001)).toBe('0,00'); // Arredonda para 0
  });
});
