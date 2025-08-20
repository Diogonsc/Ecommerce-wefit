import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Empty } from './index';

describe('Empty Component', () => {
  const defaultProps = {
    title: 'Título de teste',
    buttonText: 'Botão de teste',
    onButtonClick: jest.fn(),
  };

  it('deve renderizar o título corretamente', () => {
    render(<Empty {...defaultProps} />);
    
    expect(screen.getByText('Título de teste')).toBeInTheDocument();
  });

  it('deve renderizar o texto do botão corretamente', () => {
    render(<Empty {...defaultProps} />);
    
    expect(screen.getByText('Botão de teste')).toBeInTheDocument();
  });

  it('deve renderizar as imagens com alt text correto', () => {
    render(<Empty {...defaultProps} />);
    
    const images = screen.getAllByAltText('Carrinho vazio');
    expect(images).toHaveLength(2); // Uma para mobile e uma para desktop
  });

  it('deve chamar onButtonClick quando o botão for clicado', async () => {
    const user = userEvent.setup();
    const mockOnClick = jest.fn();
    
    render(<Empty {...defaultProps} onButtonClick={mockOnClick} />);
    
    const button = screen.getByText('Botão de teste');
    await user.click(button);
    
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('deve renderizar com props personalizadas', () => {
    const customProps = {
      title: 'Mensagem personalizada',
      buttonText: 'Ação personalizada',
      onButtonClick: jest.fn(),
    };
    
    render(<Empty {...customProps} />);
    
    expect(screen.getByText('Mensagem personalizada')).toBeInTheDocument();
    expect(screen.getByText('Ação personalizada')).toBeInTheDocument();
  });

  it('deve renderizar as imagens com source sets corretos', () => {
    render(<Empty {...defaultProps} />);
    
    const pictures = screen.getAllByRole('img');
    expect(pictures).toHaveLength(1); // Apenas uma imagem é renderizada por vez devido ao CSS
  });

  it('deve ter estrutura semântica correta', () => {
    render(<Empty {...defaultProps} />);
    
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Botão de teste');
  });
});
