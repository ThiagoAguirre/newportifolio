# Portfólio Pessoal

Um projeto de portfólio estático construído com **React**, **Vite** e **TypeScript**, estilizado com **Tailwind CSS** e componentes de **shadcn-ui**. Serve como vitrine de habilidades, projetos e experiências profissionais.

---

## Índice

1. [Descrição](#descrição)  
2. [Tecnologias](#tecnologias)  
3. [Pré-requisitos](#pré-requisitos)  
4. [Instalação e Execução](#instalação-e-execução)  
5. [Scripts Disponíveis](#scripts-disponíveis)  
6. [Estrutura do Projeto](#estrutura-do-projeto)  
7. [Deploy](#deploy)  
8. [Autor](#autor)  

---

## Descrição

Este repositório contém o código-fonte de um portfólio pessoal em que todos os componentes são desenvolvidos em **TypeScript** e organizados com **Vite**. O design responsivo é baseado em **Tailwind CSS**, e diversos componentes reutilizáveis vêm da biblioteca **shadcn-ui** (que utiliza internamente o Radix UI).

O objetivo principal é:

- Exibir informações de contato e resumo profissional.
- Listar projetos realizados, com breve descrição e link para repositórios/demonstrações.
- Mostrar competências técnicas e experiências anteriores.
- Oferecer um formulário de contato simples (via React Hook Form + validação).

---

## Tecnologias

- **Vite** – Ferramenta de build ultrarrápida para aplicações front-end.  
- **React** – Biblioteca JavaScript para construir interfaces reativas.  
- **TypeScript** – Superset de JavaScript com tipagem estática.  
- **Tailwind CSS** – Framework utilitário de estilos.  
- **shadcn-ui** – Conjunto de componentes React baseados em Radix UI e estilizados com Tailwind.  
- **Radix UI** – Biblioteca de componentes acessíveis (Dialog, Tooltip, Dropdown etc.).  
- **React Router DOM** – Gerenciamento de rotas no React (v6+).  
- **React Hook Form** + **Zod** – Manipulação de formulários e validação de esquema.  
- **Lucide React** – Biblioteca de ícones SVG leves.  
- **Embla Carousel** – Carrossel minimalista em React.  
- **Recharts** – Biblioteca de gráficos (charts) para React.  
- **date-fns** – Utilitário de formatação e manipulação de datas.  
- **Sonner** – Sistema de notificações (toasts).  
- **Outras libs**:  
  - `clsx`, `class-variance-authority`, `tailwind-merge` – Controle condicional de classes CSS.  
  - `cmdk` – Paleta de comandos (Command K).  
  - `@tanstack/react-query` – Data fetching e cache local no React.  

---

## Pré-requisitos

Antes de iniciar, certifique-se de ter instalado:

- **Node.js** (>= 16.x)  
- **npm** (>= 8.x) ou **yarn** (>= 1.x)  

Você pode verificar a versão instalada executando:
```bash
node -v
npm -v
