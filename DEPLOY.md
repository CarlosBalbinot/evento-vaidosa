# Como publicar as inscrições no Google Sheets

Este guia explica como conectar o formulário do site a uma planilha do
Google Sheets, usando o Google Apps Script. Depois de seguir esses passos,
toda inscrição feita no site vira uma linha nova na sua planilha.

## Passo 1 — Criar a planilha

1. Acesse [sheets.google.com](https://sheets.google.com) e crie uma
   planilha em branco.
2. Dê um nome pra ela, por exemplo "Inscrições — 1 Ano Vaidosa Fitness".

## Passo 2 — Abrir o editor de Apps Script

1. Com a planilha aberta, clique no menu **Extensões** > **Apps Script**.
2. Vai abrir uma nova aba com o editor de código do Google Apps Script,
   já vinculado a essa planilha.

## Passo 3 — Colar o código

1. No editor, apague o conteúdo padrão que aparece no arquivo `Código.gs`
   (geralmente já vem com uma função `myFunction` vazia).
2. Abra o arquivo `apps-script.gs` deste projeto, copie todo o conteúdo
   e cole no editor do Apps Script, no lugar do que você apagou.
3. Clique no ícone de salvar (ou `Ctrl+S` / `Cmd+S`).

## Passo 4 — Implantar como Aplicativo da Web

1. No canto superior direito do editor, clique em **Implantar** >
   **Nova implantação**.
2. Clique no ícone de engrenagem ao lado de "Selecionar tipo" e escolha
   **Aplicativo da Web**.
3. Preencha assim:
   - **Executar como:** Eu (seu e-mail do Google)
   - **Quem pode acessar:** Qualquer pessoa
4. Clique em **Implantar**.
5. O Google vai pedir para você autorizar o script a acessar sua
   planilha — siga as telas, clique em "Avançado" se aparecer um aviso
   de app não verificado, e confirme o acesso (é o seu próprio script,
   é seguro autorizar).
6. Depois de implantado, o Google vai mostrar uma **URL do aplicativo da
   Web** — algo como
   `https://script.google.com/macros/s/AKfycb.../exec`. Copie essa URL.

## Passo 5 — Colar a URL no site

1. Abra o arquivo `index.html` deste projeto.
2. Procure pela linha:
   ```js
   var APPS_SCRIPT_URL = 'COLE_AQUI_A_URL_DO_APPS_SCRIPT';
   ```
3. Troque `COLE_AQUI_A_URL_DO_APPS_SCRIPT` pela URL que você copiou no
   passo anterior, mantendo as aspas. Deve ficar parecido com:
   ```js
   var APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycb.../exec';
   ```
4. Salve o arquivo.

Pronto! A partir de agora, toda vez que alguém preencher e enviar o
formulário no site, uma linha nova vai aparecer automaticamente na sua
planilha, com nome, WhatsApp, tamanho da camiseta e o horário do envio.

## Atualizando o script depois

Se você precisar alterar o código do `apps-script.gs` no futuro, edite
o código no editor do Apps Script e faça uma **nova implantação** (Implantar
> Gerenciar implantações > ícone de lápis > Nova versão > Implantar). Isso
gera uma nova versão sem precisar trocar a URL no `index.html`.
