---
name: Leme Contabilidade
description: Landing page de captação para um escritório de contabilidade presencial em Limeira — instrumento náutico sereno que guia PMEs com calma e precisão.
colors:
  sky-cyan: "#6ec1e4"
  cyan-deep: "#4bacd2"
  cyan-text: "#1878a0"
  harbor-navy: "#1a2d3e"
  foam: "#eef7fb"
  paper: "#ffffff"
  muted-ink: "#1a2d3e8c"
  hairline: "#6ec1e440"
  hairline-strong: "#6ec1e499"
typography:
  display:
    fontFamily: "Domine, Georgia, serif"
    fontSize: "clamp(2rem, 2.5vw + 1rem, 3rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Domine, Georgia, serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: "Sora, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Sora, system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 600
    letterSpacing: "0.18em"
rounded:
  sm: "4px"
  md: "10px"
  lg: "18px"
spacing:
  section: "6rem"
  gap: "1.5rem"
components:
  button-primary:
    backgroundColor: "{colors.sky-cyan}"
    textColor: "{colors.harbor-navy}"
    rounded: "{rounded.sm}"
    padding: "0.8125rem 1.625rem"
  button-primary-hover:
    backgroundColor: "{colors.cyan-deep}"
    textColor: "{colors.harbor-navy}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.harbor-navy}"
    rounded: "{rounded.sm}"
  benefit-icon:
    backgroundColor: "{colors.foam}"
    textColor: "{colors.cyan-text}"
    rounded: "{rounded.md}"
  card-plan-featured:
    backgroundColor: "{colors.foam}"
    textColor: "{colors.harbor-navy}"
    rounded: "{rounded.lg}"
    padding: "2rem"
---

# Design System: Leme Contabilidade

## 1. Overview

**Creative North Star: "A Carta Náutica Serena"**

Leme ("o leme" é quem guia o barco) é uma carta de navegação viva: uma superfície clara, quadriculada como papel náutico, onde uma bússola gira devagar e tudo aponta para uma direção. O sistema é um instrumento de orientação, não um painel que grita. Calma e precisão são a mesma coisa aqui: o azul-farol (`#6ec1e4`) é água rasa de litoral, o navy (`#1a2d3e`) é o casco e a tinta, e o branco com textura de grade é a própria carta. A serifa Domine dá peso de documento confiável; a Sora geométrica mantém o texto leve e respirável.

O tom é **acessível e descomplicado**: contabilidade sem juridiquês. A página convida a uma conversa (WhatsApp), não a um formulário burocrático. Cada seção é uma dobra com uma ideia dominante e bastante ar ao redor. A herança náutica vem da composição (bússola, grade, marca-d'água "LEME") e do vocabulário, nunca de clichês de "marinheiro".

Este sistema **rejeita explicitamente** a estética de template genérico de IA: grades de cards idênticos, eyebrows minúsculos em uppercase tracked acima de cada seção, marcadores `01/02/03` como enfeite, gradientes clichê e o "hero-metric template". Confiança aqui nasce de proximidade (presencial, Limeira, rosto humano), não de selos corporativos.

**Key Characteristics:**
- Carta náutica clara: branco com textura de grade fina, azul de água rasa, navy de casco.
- Um único accent committed (`#6ec1e4`) que carrega marca, foco e estado.
- Serifa + sans em contraste real (Domine display / Sora corpo), não dois sans parecidos.
- Movimento sereno e lento (bússola que gira em 20–50s, glows que respiram), nunca agitado.
- Voz que tira peso do empreendedor, não que o impressiona.

## 2. Colors

Paleta monocromática committed sobre um único hue ciano, ancorada em um navy profundo. O ciano é a voz; o navy é a estrutura; o branco é o palco.

### Primary
- **Azul-Farol** (`#6ec1e4`): a cor da marca. Preenchimento de botões primários, ícones, o ponto da bússola, linhas de accent, `em` itálico nos títulos. É água rasa de litoral — convidativa, não corporativa. **Regra dura: usar como TEXTO sobre branco é proibido** (contraste 2.02:1). Para texto-accent, usar `cyan-text`.
- **Ciano-Profundo** (`#4bacd2`): estado hover dos botões e do accent. Um passo mais escuro do mesmo hue.
- **Ciano-Texto** (`#1878a0`): a variante acessível do accent para texto sobre fundo claro (4.96:1). Usada nos rótulos de seção e em qualquer texto que precise da cor da marca.

### Neutral
- **Navy de Porto** (`#1a2d3e`): tinta principal de todo o corpo de texto (14.1:1 sobre branco) e fundo do header e do rodapé. O casco do barco.
- **Espuma** (`#eef7fb`): fundo de seções alternadas (`.section--alt`). Branco levemente puxado para o ciano, nunca para o bege.
- **Papel** (`#ffffff`): fundo base, com uma textura fixa de grade de 64px em ciano a 2.5% de opacidade — a carta náutica.
- **Tinta Suave** (`#1a2d3e8c`, navy a 55%): texto secundário e legendas. **Atenção: 3.43:1 sobre branco — abaixo de AA.** Ver Don'ts; deve ser escurecido para ~70% antes de publicar.
- **Linha-d'Água** (`#6ec1e440` / `#6ec1e499`): bordas e divisores em ciano translúcido.

### Named Rules
**The One-Hue Rule.** Toda a paleta vive em um único hue ciano sobre navy e branco. Não introduzir uma segunda cor de marca (verde, dourado, roxo). A única exceção é o vermelho de erro do formulário, e ele só aparece em estado de falha.

**The Accent-Is-Not-Ink Rule.** `#6ec1e4` preenche e ilumina, nunca soletra. Texto na cor da marca usa sempre `#1878a0`.

## 3. Typography

**Display Font:** Domine (com Georgia, serif)
**Body Font:** Sora (com system-ui, sans-serif)

**Character:** Domine é uma serifa de texto desenhada para tela — sólida, legível, com peso de documento confiável sem ser antiquada. Sora é uma sans geométrica de cantos suaves, contemporânea e calma. O par contrasta em eixo (serifa + geométrica), então cria hierarquia de verdade em vez de dois sans competindo.

### Hierarchy
- **Display / H2** (Domine 600, `clamp(2rem, 2.5vw + 1rem, 3rem)`, 1.15): títulos de seção e headline do hero. O `em` itálico em ciano-texto marca a palavra-chave.
- **Title** (Domine 600, `1.25rem`, 1.3): títulos de card, passos, nome do plano.
- **Body** (Sora 400, `1rem`/`0.875rem`, 1.65–1.7): parágrafos e descrições. Manter linha em ≤65–75ch (o hero já usa `max-width: 52ch`).
- **Label** (Sora 600, `0.6875rem`, tracking `0.18em`, uppercase): rótulos de seção e de formulário. **Uso restrito a rótulos curtos** — ver Don'ts sobre repetir como eyebrow.

### Named Rules
**The Italic-Keyword Rule.** A ênfase nos títulos vem de uma única palavra em Domine itálico na cor `cyan-text` ("Por que escolher a *Leme?*"), nunca de negrito extra ou caixa-alta.

## 4. Elevation

Sistema majoritariamente plano com profundidade por **glow**, não por sombra dura. A elevação é luz de água, não peso. Superfícies em repouso são planas (tints de `surface`); o brilho do accent aparece em hover e em elementos de destaque (card de plano featured, ponto da bússola, botão primário em hover). O header ganha uma sombra discreta só depois do scroll.

### Shadow Vocabulary
- **Glow-Accent** (`box-shadow: 0 0 40px rgba(110,193,228,.3)`): aura do card de plano em destaque e elementos-âncora.
- **Glow-Botão** (`box-shadow: 0 0 28px rgba(110,193,228,.35)`): hover do botão primário.
- **Sombra-Header** (`box-shadow: 0 2px 32px rgba(0,0,0,.35)`): aparece em `.header.scrolled`, sutil, só para separar do conteúdo.
- **Foco-Input** (`box-shadow: 0 0 0 3px rgba(110,193,228,.18)`): anel de foco do campo de formulário.

### Named Rules
**The Glow-Not-Drop Rule.** Profundidade é luz de accent difusa, nunca sombra cinza pesada. Se parecer um app de 2014, a sombra está escura demais.

## 5. Components

### Buttons
- **Shape:** cantos levemente arredondados (`4px`, `--radius-sm`), borda de `1.5px`.
- **Primary:** preenchimento `sky-cyan`, texto `harbor-navy`, `padding: 0.8125rem 1.625rem`. Hover: vira `cyan-deep`, ganha glow e sobe `1px`.
- **Ghost:** transparente, borda `hairline-strong`, texto navy. Hover: fundo `surface-hv` e borda ciano.
- **Accent (header):** igual ao primary, fonte um pouco menor (`0.85rem`).

### Cards / Containers
- **Benefícios (lista editorial, não cards):** os diferenciais são uma lista de `ícone + título + texto`, agrupados por espaço, não por bordas de card. Um diferencial-âncora ocupa a linha inteira com mais peso (ícone e título maiores) e uma hairline o separa dos 4 de apoio em 2 colunas. Sem grade de cards idênticos, sem números decorativos.
- **Plan featured:** `radius-lg` (18px), fundo `foam`, borda ciano a 40%, glow-accent, e uma linha de luz borrada no topo. É o único card "elevado".
- **Corner Style:** `lg` (18px) para containers grandes, `md` (10px) para ícones, `sm` (4px) para botões e inputs.

### Navigation
- **Header:** sticky, fundo navy translúcido (`rgba(26,45,62,.97)`) com `backdrop-filter: blur(12px)`, borda inferior ciano. Links em branco a 70%, hover ciano com underline que cresce da esquerda.
- **Mobile:** vira menu hamburguer; nav desliza de cima como painel navy. O ícone anima para "X".

### Signature: Compass + Chart Texture
A bússola do hero (três anéis girando em 20s/30s/50s, cruz e ponto luminoso) e a textura fixa de grade quadriculada no `body` são a assinatura náutica do sistema. São decorativas (`aria-hidden`) e **devem** ter alternativa em `prefers-reduced-motion`.

## 6. Do's and Don'ts

### Do:
- **Do** manter o accent `#6ec1e4` para preencher e iluminar; para texto na cor da marca, usar sempre `#1878a0` (`cyan-text`).
- **Do** parear Domine (display) com Sora (corpo) em contraste de eixo. Ênfase vem de uma palavra em itálico ciano, não de mais peso.
- **Do** usar profundidade por glow de accent, planando as superfícies em repouso.
- **Do** carregar a herança náutica pela composição (bússola, grade, marca-d'água) e pelo vocabulário, não por clichês de marinheiro.
- **Do** dar a toda animação (bússola, glows, reveals, contador) uma alternativa em `@media (prefers-reduced-motion: reduce)`.

### Don't:
- **Don't** usar `#6ec1e4` como cor de texto sobre branco (2.02:1). Falha de contraste.
- **Don't** deixar texto secundário no `muted` atual (`navy a 55%`, 3.43:1) nem placeholders a 30% (1.84:1). Escurecer para ~70% para cumprir **WCAG AA 4.5:1** (nível mirado pelo projeto).
- **Don't** repetir o rótulo de seção em uppercase tracked (`.section__tag`) acima de **toda** seção — é exatamente o eyebrow-scaffold de IA que o PRODUCT.md lista como anti-referência. No máximo um, deliberado.
- **Don't** numerar cards (`01–08`) como enfeite. Números só quando a ordem carrega informação (um processo real de 3 passos). A grade de benefícios não é uma sequência.
- **Don't** repetir 8 cards idênticos (ícone + número + título + texto). Variar tamanho, agrupar, ou cortar — "identical card grids" é slop.
- **Don't** introduzir uma segunda cor de marca, gradiente em texto, ou glassmorphism decorativo. Um hue, committed.
- **Don't** escrever copy com buzzword corporativa ("impulsione resultados", "soluções personalizadas", "experts prontos"). Substantivo concreto + verbo do que a Leme faz.
