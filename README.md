
# Advanced Roleplay - Client Exemplo
Este projeto é voltado para a User Interface do Servidor.

# Desenvolvimento

## Dependências

- Node v20.12.2

## Ligando para desenvolvimento

- Após instalar as dependências do projeto (`yarn install`), use o comando: `yarn dev`
- Acesse http://localhost:3000/
- Pronto!

## Fazendo o Build

- Copie o arquivo `.env.example` para `.env` (`cp .env.example .env`)
- Altere os valores para a pasta que você deseja para o build.
- Use `yarn build`

CLIENT_DEST_PATH = Pasta do resource no servidor FiveM para os arquivos do client
WEBVIEWS_DEST_PATH = Pasta do resource no servidor FiveM para os arquivos da webview
CLIENT_SOURCE_PATH = A mesma pasta do CLIENT_DEST_PATH
