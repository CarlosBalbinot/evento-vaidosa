# Conexão & Energia — 1 Ano Vaidosa Fitness

Site de inscrição de página única para a comemoração de 1 ano da Vaidosa
Fitness: uma manhã de pilates, brunch e bem-estar ao ar livre. O site é um
"ticket" digital com formulário de inscrição, chips de tamanho de camiseta,
pagamento via Pix e confirmação por WhatsApp.

É um site 100% estático (HTML/CSS/JS puro, sem build), pensado para ser
hospedado no GitHub Pages. A inscrição é gravada numa planilha do Google
Sheets através de um Google Apps Script — veja [`DEPLOY.md`](DEPLOY.md).

## Estrutura do projeto

- `index.html` — todo o site (marcação, estilos e scripts).
- `apps-script.gs` — código a ser colado no Google Apps Script, responsável
  por receber os dados do formulário e gravar na planilha.
- `DEPLOY.md` — passo a passo para publicar o Apps Script e conectar a
  planilha.
- `CNAME` — usado pelo GitHub Pages para servir o site num subdomínio
  próprio (veja a seção "Publicar no GitHub Pages" abaixo).

## Como rodar localmente

Não precisa de instalação nem de build. Basta subir um servidor estático
simples na pasta do projeto e abrir no navegador:

```bash
python3 -m http.server 8000
# ou
npx serve
```

Depois acesse `http://localhost:8000` no navegador.

## Antes de publicar: 3 placeholders para preencher

O `index.html` tem três valores de exemplo que precisam ser trocados pelos
dados reais antes de divulgar o link do evento:

1. **Chave Pix** — dentro de `.pix-key-value`, atualmente `04227445060`.
2. **Número de WhatsApp** — no link `wa.me` dentro de `.pix-note`
   (`https://wa.me/5554984462806`), junto com o texto exibido do número.
3. **URL do Google Apps Script** — na constante `APPS_SCRIPT_URL`, no topo
   do script do formulário, atualmente `'COLE_AQUI_A_URL_DO_APPS_SCRIPT'`.
   Essa URL só existe depois de implantar o `apps-script.gs` — o passo a
   passo completo está em [`DEPLOY.md`](DEPLOY.md).

## Publicar no GitHub Pages com subdomínio próprio

Resumo rápido (o passo a passo completo está mais abaixo, na mensagem que
acompanha este README):

1. Suba este repositório para o GitHub.
2. Em **Settings > Pages**, escolha a branch (`main`) e a pasta raiz (`/`)
   como origem.
3. Edite o arquivo `CNAME` na raiz do projeto e troque
   `evento.SEUDOMINIO.com.br` pelo subdomínio real que você vai usar.
4. No painel de DNS do seu domínio, crie um registro **CNAME** apontando o
   subdomínio (ex: `evento`) para `seu-usuario.github.io`.
5. Volte em **Settings > Pages** e cadastre o mesmo subdomínio no campo
   "Custom domain", aguardando a verificação do certificado HTTPS.
