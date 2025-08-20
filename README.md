# 🛒 WeFit E-commerce

Uma aplicação de e-commerce moderna e responsiva desenvolvida com React, TypeScript e Vite. O projeto oferece uma experiência de compra intuitiva com funcionalidades de carrinho de compras, checkout e gerenciamento de produtos.

## ✨ Funcionalidades

- **Catálogo de Produtos**: Exibição de produtos com imagens, títulos e preços
- **Carrinho de Compras**: Adição e remoção de itens com contador de quantidade
- **Checkout**: Processo de finalização de compra
- **Interface Responsiva**: Design adaptável para desktop e mobile
- **Notificações**: Sistema de toast para feedback do usuário
- **Loading States**: Estados de carregamento para melhor UX
- **Error Handling**: Tratamento de erros com fallbacks elegantes

## 🚀 Tecnologias Utilizadas

### Frontend
- **React 19** - Biblioteca para construção de interfaces
- **TypeScript** - Tipagem estática para JavaScript
- **Vite** - Build tool e dev server ultra-rápido
- **React Router DOM** - Roteamento da aplicação
- **Styled Components** - CSS-in-JS para estilização
- **Emotion** - Biblioteca de CSS-in-JS adicional

### Gerenciamento de Estado e Dados
- **TanStack Query (React Query)** - Gerenciamento de estado do servidor
- **Context API** - Gerenciamento de estado global do carrinho

### UI/UX
- **React Icons** - Biblioteca de ícones
- **React Toastify** - Sistema de notificações
- **SASS** - Pré-processador CSS

### Validação e Desenvolvimento
- **Zod** - Validação de esquemas
- **ESLint** - Linting de código
- **TypeScript ESLint** - Regras específicas para TypeScript

### Testes
- **Jest** - Framework de testes JavaScript
- **React Testing Library** - Biblioteca para testar componentes React
- **Jest DOM** - Matchers customizados para DOM
- **User Event** - Simulação de interações do usuário

## 📦 Instalação

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn

### Passos para instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/Diogonsc/Ecommerce-wefit.git
   cd ecommerce-wefit
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Execute o projeto em modo de desenvolvimento**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. **Acesse a aplicação**
   Abra [http://localhost:5173](http://localhost:5173) no seu navegador

## 🛠️ Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia o servidor de desenvolvimento

# Build
npm run build        # Gera build de produção

# Linting
npm run lint         # Executa o ESLint

# Preview
npm run preview      # Visualiza o build de produção localmente

# Testes
npm test             # Executa todos os testes
npm run test:watch   # Executa testes em modo watch
npm run test:coverage # Executa testes com relatório de cobertura
```

## 🧪 Testes

O projeto possui uma estrutura completa de testes implementada com Jest e React Testing Library, garantindo qualidade e confiabilidade do código.

### Estrutura de Testes

```
src/
├── components/          # Componentes com seus respectivos testes
│   ├── Card/
│   │   ├── Card.test.tsx
│   │   └── index.tsx
│   ├── Empty/
│   │   ├── Empty.test.tsx
│   │   └── index.tsx
│   ├── Header/
│   │   ├── Header.test.tsx
│   │   └── index.tsx
│   └── Loader/
│       ├── Loader.test.tsx
│       └── index.tsx
├── contexts/            # Testes dos contextos
│   ├── CartContextProvider.test.tsx
│   └── CartContextProvider.tsx
├── hooks/               # Testes dos custom hooks
│   ├── useCart.test.tsx
│   ├── useCart.ts
│   ├── useProducts.test.tsx
│   └── useProducts.ts
├── pages/               # Testes das páginas
│   └── Home/
│       ├── Home.test.tsx
│       └── index.tsx
├── services/            # Testes dos serviços
│   ├── getAllProducts.test.ts
│   └── getAllProducts.ts
├── utils/               # Testes das funções utilitárias
│   ├── formatPrice.test.ts
│   └── index.ts
├── __mocks__/           # Mocks para arquivos estáticos
│   └── fileMock.js
├── test-utils/          # Utilitários para testes
└── setupTests.ts        # Configuração global dos testes
```

### Tipos de Testes Implementados

#### 🧩 Testes de Componentes
- **Card**: Testa renderização, interações e funcionalidades do componente de produto
- **Empty**: Verifica estados vazios e mensagens de feedback
- **Header**: Testa navegação e funcionalidades do cabeçalho
- **Loader**: Valida estados de carregamento
- **Home**: Testa a página principal com listagem de produtos

#### 🔄 Testes de Contextos
- **CartContext**: Valida gerenciamento de estado do carrinho de compras
- **CartContextProvider**: Testa provedor do contexto e suas funcionalidades

#### 🎣 Testes de Hooks
- **useCart**: Testa lógica do hook do carrinho (adicionar, remover, limpar)
- **useProducts**: Valida busca e gerenciamento de produtos

#### 🔧 Testes de Serviços
- **getAllProducts**: Testa chamadas de API e tratamento de dados

#### 🛠️ Testes de Utilitários
- **formatPrice**: Valida formatação de preços em Real (R$)

### Executando os Testes

```bash
# Executar todos os testes
npm test

# Executar testes em modo watch (desenvolvimento)
npm run test:watch

# Executar testes com relatório de cobertura
npm run test:coverage

# Executar testes específicos
npm test -- --testNamePattern="Card"

# Executar testes de um arquivo específico
npm test -- Card.test.tsx
```

### Cobertura de Testes

O projeto está configurado para gerar relatórios de cobertura detalhados:

- **Cobertura de Linhas**: Percentual de linhas executadas
- **Cobertura de Funções**: Percentual de funções testadas
- **Cobertura de Branches**: Percentual de branches condicionais testados
- **Cobertura de Statements**: Percentual de statements executados

O relatório é gerado em formato HTML na pasta `coverage/` e pode ser visualizado abrindo `coverage/lcov-report/index.html` no navegador.

### Configuração de Testes

O projeto utiliza:
- **Jest** como framework principal
- **jsdom** para simular ambiente DOM
- **React Testing Library** para testar componentes como usuários reais
- **ts-jest** para suporte a TypeScript
- **identity-obj-proxy** para mock de arquivos CSS
- **fileMock.js** para mock de imagens e assets

### Boas Práticas de Teste

- Testes focados no comportamento do usuário
- Uso de queries acessíveis (getByRole, getByText, etc.)
- Mocks apropriados para dependências externas
- Testes isolados e independentes
- Cobertura de casos de sucesso e erro

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Card/           # Componente de produto
│   ├── Empty/          # Estado vazio
│   ├── Header/         # Cabeçalho da aplicação
│   ├── Layout/         # Layout principal
│   └── Loader/         # Componente de carregamento
├── contexts/           # Contextos React
│   ├── CartContext.tsx # Contexto do carrinho
│   └── CartContextProvider.tsx
├── data/               # Dados estáticos
│   └── server.json     # Mock de produtos
├── hooks/              # Custom hooks
│   ├── useCart.ts      # Hook do carrinho
│   └── useProducts.ts  # Hook de produtos
├── pages/              # Páginas da aplicação
│   ├── Cart/           # Página do carrinho
│   ├── Checkout/       # Página de checkout
│   └── Home/           # Página inicial
├── services/           # Serviços e APIs
│   └── getAllProducts.ts
├── utils/              # Utilitários
│   ├── api.ts          # Configuração da API
│   ├── index.ts        # Funções utilitárias
│   └── queryClient.ts  # Configuração do React Query
├── __mocks__/          # Mocks para testes
├── test-utils/         # Utilitários para testes
├── setupTests.ts       # Configuração global dos testes
└── App.tsx             # Componente principal
```

## 🎯 Funcionalidades Principais

### Catálogo de Produtos
- Listagem de produtos com imagens otimizadas
- Preços formatados em Real (R$)
- Botão de adicionar ao carrinho com contador
- Estados de loading e erro

### Carrinho de Compras
- Adição e remoção de produtos
- Contador de quantidade por item
- Persistência do estado durante a sessão
- Navegação para checkout

### Checkout
- Página dedicada para finalização da compra
- Interface intuitiva para o usuário

## 🔧 Configuração de Desenvolvimento

### Variáveis de Ambiente
O projeto utiliza dados mockados localmente, mas pode ser facilmente configurado para usar APIs externas.

### Estrutura de Dados
Os produtos seguem o seguinte esquema:
```typescript
interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}
```

## 🚀 Deploy

### Vercel (Recomendado)
1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente se necessário
3. Deploy automático a cada push

### Build Manual
```bash
npm run build
npm run preview
```

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### Checklist para Contribuição
- [ ] Testes passando (`npm test`)
- [ ] Cobertura de testes adequada (`npm run test:coverage`)
- [ ] Linting sem erros (`npm run lint`)
- [ ] Build funcionando (`npm run build`)

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Desenvolvido por

Diogo Nascimento

---

⭐ Se este projeto te ajudou, considere dar uma estrela no repositório!
