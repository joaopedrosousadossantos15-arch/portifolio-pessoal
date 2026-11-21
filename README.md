# Portfólio pessoal

Portfólio responsivo em Next.js App Router, React, TypeScript e Tailwind CSS, com animações acessíveis usando Framer Motion e ícones Lucide.

> **Antes de publicar:** o conteúdo demonstrativo está identificado como exemplo. Atualize os dados e links em `data/` para não publicar informações genéricas como se fossem suas.

## Requisitos

- Node.js 20.9 ou superior
- npm

## Instalação e execução local

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000). Para validar antes de publicar:

```bash
npm run typecheck
npm run lint
npm run build
```

## Personalização

- `data/personal.ts`: nome, área de atuação, apresentação, localização, e-mail e redes sociais.
- `data/projects.ts`: projetos, descrições, tecnologias e links publicados/repositórios. Remova `isPlaceholder` quando substituir os exemplos.
- `data/skills.ts`: categorias e habilidades.
- `data/education.ts`: formação, cursos e certificações.
- `data/interests.ts`: interesses e hobbies.
- `app/globals.css`: identidade visual, cores e responsividade.

O portfólio possui tema claro e escuro. O visitante pode alternar pelo botão no menu; a preferência é salva no navegador e, na primeira visita, o tema segue a configuração do sistema.

Projetos sem URL não exibem links inativos. Os links de redes sociais só aparecem depois de preenchidos. O formulário valida os campos no navegador e prepara uma mensagem no aplicativo de e-mail do visitante usando o endereço configurado em `data/personal.ts`; ele não envia nem armazena mensagens no servidor.

## Publicação

1. Envie o repositório para GitHub.
2. Importe-o na [Vercel](https://vercel.com/new) ou em outro provedor compatível com Next.js.
3. Use `npm run build` como comando de build e `npm run start` para execução em produção (provedores Next.js geralmente configuram isso automaticamente).
4. Configure o domínio e os metadados sociais após atualizar os dados pessoais.

Não são necessárias chaves de serviço externo para executar esta versão. Para envio direto pelo servidor, conecte um provedor de e-mail e implemente a validação e as variáveis de ambiente no servidor antes de disponibilizar essa funcionalidade.
