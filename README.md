# Desafio Front-end Lacrei Saúde
<img width="1008" height="677" alt="image" src="https://github.com/user-attachments/assets/1a381ad9-7eed-4fae-a668-f5fb13d25bd9" />

Projeto desenvolvido como parte de um desafio técnico de Front-end, com o objetivo de criar uma experiência digital inclusiva, acessível e responsiva para a Lacrei Saúde.

## Sobre o projeto

A aplicação apresenta informações sobre a missão e os pilares da Lacrei Saúde, além de disponibilizar uma página com um formulário demonstrativo para denúncias.

O projeto foi desenvolvido com atenção à organização dos componentes, responsividade, acessibilidade e qualidade do código.

## Funcionalidades

- Página inicial responsiva
- Navegação entre as seções da página
- Seção de apresentação
- Seção “Nossos Pilares”
- Seção “Nossa Missão”
- Footer com links institucionais
- Página separada para denúncias
- Formulário com campos obrigatórios
- Layout adaptado para celular, tablet e desktop
- Indicadores de foco para navegação pelo teclado
- Textos alternativos nas imagens

> O formulário possui finalidade demonstrativa. As informações preenchidas não são armazenadas.

## Tecnologias utilizadas

- Next.js
- React
- TypeScript
- Styled-components
- HTML semântico
- CSS responsivo
- ESLint
- Git e GitHub

## Rotas

| Rota | Descrição |
| --- | --- |
| `https://desafio-lacrei-frontend-9suqzyyrn-suelemmartins-projects.vercel.app/` | Página principal |
| `/denuncia` | Canal de denúncia |

## Estrutura principal

```text
src
├── app
│   ├── denuncia
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   └── providers.tsx
├── components
│   ├── ComplaintForm
│   ├── Footer
│   ├── Header
│   ├── Hero
│   ├── Mission
│   └── Pillars
├── lib
│   └── registry.tsx
└── styles
    ├── GlobalStyles.ts
    ├── styled.d.ts
    └── theme.ts
Como executar o projeto

Primeiro, clone o repositório:
Como executar o projeto
git clone https://github.com/SuelemMartins/desafio-lacrei-frontend.git

Entre na pasta:
npm install

Instale as dependências:
npm install

Inicie o ambiente de desenvolvimento:
npm run dev

Depois, acesse:
http://localhost:3000

Verificação do projeto
Para analisar a qualidade do código:
npm run lint

Para gerar a versão de produção:
npm run build
O projeto foi verificado com ESLint e compilado com sucesso para produção.

Responsividade

A interface foi adaptada para diferentes tamanhos de tela:

Celulares
Tablets
Notebooks
Desktops

Os componentes reorganizam seu conteúdo automaticamente para preservar a leitura e a navegação.


Autora
Desenvolvido por Suelem Martins.






