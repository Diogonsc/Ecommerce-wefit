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
```

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

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Desenvolvido por

Diogo Nascimento

---

⭐ Se este projeto te ajudou, considere dar uma estrela no repositório!
