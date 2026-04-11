# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Landing page estática para **Leme Contabilidade** — escritório de contabilidade online voltado a PMEs brasileiras. Objetivo: atrair e converter novos clientes.

## Como rodar

Abrir `index.html` diretamente no browser, ou usar um servidor local:

```bash
# Python (qualquer diretório)
python -m http.server 8080

# Node (se npx disponível)
npx serve .
```

Não há build step, bundler, framework, ou dependências de pacote.

## Arquitetura CSS

O CSS é modular. O `index.html` carrega apenas `css/main.css`, que importa todos os outros via `@import`:

| Arquivo | Responsabilidade |
|---|---|
| `variables.css` | Tokens de design (cores, sombras, espaçamentos) |
| `reset.css` | Normalização do browser |
| `layout.css` | Container, grid utilities (`.grid--3`, `.grid--4`), estilos de seção genérica |
| `buttons.css` | Variantes de botão (`.btn--primary`, `.btn--outline`, `.btn--white`) |
| `header.css` | Header fixo, nav, hamburguer |
| `hero.css` | Seção acima da dobra com cards flutuantes |
| `benefits.css` | Cards de benefícios |
| `steps.css` | Passos numerados ("Como funciona") |
| `plans.css` | Cards de planos com variante `.plan--featured` |
| `contact.css` | Info de contato + formulário + feedback de envio |
| `footer.css` | Rodapé escuro |
| `responsive.css` | Todas as media queries — deve ser sempre o último import |

**Regra:** `responsive.css` contém **todos** os breakpoints centralizados (≤1023px e ≤767px). Não adicionar media queries dentro de outros arquivos de componente.

## Formulário de contato

O form usa [Formspree](https://formspree.io). O endpoint está em `index.html`:

```html
<form action="https://formspree.io/f/SEU_ID_AQUI" ...>
```

O `SEU_ID_AQUI` deve ser substituído pelo ID real da conta Formspree antes de publicar. O submit é via `fetch` em `js/main.js` (sem reload de página).

## Identidade visual

Definida em `assets/colors.md` e aplicada via variáveis em `css/variables.css`:

- Destaque: `#6ec1e4`
- Hover/escurecido: `#5aaed0`
- Fundo: branco / `#f7f9fb` (seções alternadas)
- Texto: `#111111`

## Conteúdo de marketing

Todo o copy da página está documentado em `copy.md`. Consultar antes de alterar textos para manter consistência com a proposta de valor da empresa.

## CTAs e WhatsApp

Todos os botões de conversão apontam para `https://wa.me/551934522491` com mensagens pré-definidas via query string. Cada plano tem sua própria mensagem para rastreio de origem.
