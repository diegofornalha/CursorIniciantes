# Estrutura do Projeto

## Diretórios Principais

```plaintext
projeto/
├── src/
│   ├── @types/           # Definições de tipos TypeScript
│   │   └── next-pwa.d.ts
│   │
│   ├── app/             # App Router e layouts
│   │   ├── api/         # Endpoints da API
│   │   │   └── upload/  # Endpoints de upload
│   │   │       ├── delete/
│   │   │       │   └── route.ts
│   │   │       ├── list/
│   │   │       │   └── route.ts
│   │   │       └── route.ts
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── components/      # Componentes reutilizáveis
│   │   ├── Button.tsx
│   │   ├── Image.tsx
│   │   ├── ImageList.tsx
│   │   ├── PWAHandler.tsx
│   │   └── Upload.tsx
│   │
│   ├── types/          # Tipos globais
│   │   └── env.d.ts
│   │
│   └── utils/          # Funções utilitárias
│       └── platform.ts
```

## Descrição dos Componentes

### Componentes Core

- `Button.tsx`: Componente base de botão
- `Image.tsx`: Componente de imagem com Cloudinary
- `ImageList.tsx`: Lista de imagens com gerenciamento
- `PWAHandler.tsx`: Gerenciador de funcionalidades PWA
- `Upload.tsx`: Componente de upload de imagens

### API Routes

- `/api/upload/route.ts`: Upload de imagens
- `/api/upload/delete/route.ts`: Deleção de imagens
- `/api/upload/list/route.ts`: Listagem de imagens

### Utilitários

- `platform.ts`: Detecção de plataforma
- `env.d.ts`: Tipos para variáveis de ambiente

### Configuração

- `globals.css`: Estilos globais
- `layout.tsx`: Layout principal da aplicação
- `page.tsx`: Página inicial

## Convenções de Nomenclatura

### Arquivos

- Componentes: PascalCase (ex: Button.tsx)
- Utilitários: camelCase (ex: platform.ts)
- Tipos: PascalCase (ex: env.d.ts)
- API Routes: route.ts

### Diretórios

- Funcionalidades: camelCase (ex: upload)
- Agrupadores: camelCase (ex: components)
- Tipos: camelCase com @ (ex: @types)

## Responsabilidades

### /app

- Roteamento da aplicação
- Layouts compartilhados
- API Routes
- Configurações globais

### /components

- Componentes reutilizáveis
- Lógica de UI
- Gerenciamento de estado local

### /utils

- Funções auxiliares
- Lógica compartilhada
- Utilitários de plataforma

### /@types

- Definições de tipos TypeScript
- Extensões de tipos
- Declarações de módulos
