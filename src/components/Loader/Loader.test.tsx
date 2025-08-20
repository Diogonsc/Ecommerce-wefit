import { render, screen } from '@testing-library/react';
import { Loader } from './index';

describe('Loader Component', () => {
  it('deve renderizar o componente de loading', () => {
    render(<Loader />);
    
    expect(screen.getByAltText('Carregando...')).toBeInTheDocument();
  });

  it('deve ter a estrutura correta com picture e img', () => {
    render(<Loader />);
    
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('alt', 'Carregando...');
  });

  it('deve ter o atributo loading definido como lazy', () => {
    render(<Loader />);
    
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('loading', 'lazy');
  });

  it('deve ter o atributo decoding definido como async', () => {
    render(<Loader />);
    
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('decoding', 'async');
  });

  it('deve renderizar o container corretamente', () => {
    const { container } = render(<Loader />);
    
    // Verifica se o container principal está presente
    expect(container.firstChild).toBeInTheDocument();
  });
});
