import { getAllProducts } from './getAllProducts';
import { getApi } from '../utils/api';
import { toast } from 'react-toastify';

// Mock das dependências
jest.mock('../utils/api');
jest.mock('react-toastify', () => ({
  toast: {
    error: jest.fn(),
  },
}));

const mockGetApi = getApi as jest.MockedFunction<typeof getApi>;
const mockToast = toast as jest.Mocked<typeof toast>;

// Tipo para o mock da API
type MockApi = {
  get: jest.Mock;
};

describe('getAllProducts', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('deve retornar produtos quando a requisição for bem-sucedida', async () => {
    const mockResponse = {
      data: {
        products: [
          {
            id: 1,
            title: 'Produto Teste',
            price: 10.50,
            image: 'test.jpg'
          }
        ]
      }
    };

    const mockApi: MockApi = {
      get: jest.fn().mockResolvedValue(mockResponse)
    };

    mockGetApi.mockReturnValue(mockApi as unknown as ReturnType<typeof getApi>);

    const result = await getAllProducts();

    expect(mockApi.get).toHaveBeenCalledWith('/movies');
    expect(result).toEqual(mockResponse.data);
  });

  it('deve retornar array vazio e mostrar toast de erro quando a requisição falhar', async () => {
    const mockApi: MockApi = {
      get: jest.fn().mockRejectedValue(new Error('Erro na requisição'))
    };

    mockGetApi.mockReturnValue(mockApi as unknown as ReturnType<typeof getApi>);

    const result = await getAllProducts();

    expect(mockApi.get).toHaveBeenCalledWith('/movies');
    expect(mockToast.error).toHaveBeenCalledWith('Erro ao buscar produtos. Por favor, tente novamente.');
    expect(result).toEqual({ products: [] });
  });

  it('deve lidar com erro de rede', async () => {
    const mockApi: MockApi = {
      get: jest.fn().mockRejectedValue(new Error('Network Error'))
    };

    mockGetApi.mockReturnValue(mockApi as unknown as ReturnType<typeof getApi>);

    const result = await getAllProducts();

    expect(mockToast.error).toHaveBeenCalledWith('Erro ao buscar produtos. Por favor, tente novamente.');
    expect(result).toEqual({ products: [] });
  });

  it('deve lidar com erro de timeout', async () => {
    const mockApi: MockApi = {
      get: jest.fn().mockRejectedValue(new Error('Request timeout'))
    };

    mockGetApi.mockReturnValue(mockApi as unknown as ReturnType<typeof getApi>);

    const result = await getAllProducts();

    expect(mockToast.error).toHaveBeenCalledWith('Erro ao buscar produtos. Por favor, tente novamente.');
    expect(result).toEqual({ products: [] });
  });
});
