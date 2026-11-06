# Juanita Locs

Site institucional de página única para a Juanita Locs, com apresentação da marca, serviços de beleza, seleção de produtos de tabacaria e formulário de solicitação de agendamento.

## Visão geral

O projeto é um site estático feito com HTML, CSS e JavaScript, sem etapa de compilação ou dependências locais.

- `index.html`: estrutura e conteúdo das seções da página.
- `styles.css`: identidade visual, componentes, layout responsivo e menu para dispositivos móveis.
- `app.js`: interações do menu, sacola demonstrativa e geração de mensagem de agendamento para envio pelo WhatsApp.
- `juanita-logo.png`: logotipo usado no cabeçalho, menu e rodapé.

## Requisitos

- Navegador moderno.
- Python 3 para executar um servidor local (ou outro servidor HTTP estático).
- Conexão à internet para carregar Tailwind CSS pelo CDN, fontes do Google Fonts, imagens do Unsplash e para abrir o WhatsApp/Instagram.

## Executar localmente

Na pasta do projeto, inicie o servidor HTTP embutido do Python:

```bash
python3 -m http.server 8000
```

Acesse <http://localhost:8000>. Para parar o servidor, pressione `Ctrl+C` no terminal.

Também é possível abrir `index.html` diretamente no navegador, mas o servidor local representa melhor a forma como o site será servido em produção.

## Funcionalidades

- Navegação por seções e menu lateral em telas pequenas.
- Apresentação de serviços e produtos com preços ilustrativos.
- Sacola de demonstração: adiciona produtos e calcula o total em memória. Não há checkout, persistência ou integração de pagamentos.
- Formulário de agendamento: valida os campos obrigatórios no navegador e prepara uma mensagem com os dados preenchidos para o WhatsApp. A mensagem só é enviada depois que a pessoa abre o link e confirma o envio.
- Link para o perfil do Instagram `@juanita_locs`.

## Personalização

- Edite os textos, serviços, preços e links em `index.html`.
- Ajuste cores, tipografia, espaçamentos e comportamento responsivo em `styles.css`.
- Altere as interações do menu, sacola e agendamento em `app.js`.
- Substitua `juanita-logo.png` para atualizar o logotipo.

O número do WhatsApp pode ser definido no link `https://wa.me/` de `app.js`. Para direcionar as solicitações a uma conta específica, inclua o número no formato internacional, apenas com dígitos, por exemplo: `https://wa.me/55DDDNUMERO?text=...`.

## Publicação

Por ser um site estático, pode ser hospedado em qualquer serviço que sirva arquivos HTML, CSS, JavaScript e imagens. Publique os quatro arquivos do projeto na raiz do site. Verifique se o provedor permite carregar recursos externos necessários, ou baixe e sirva esses recursos localmente.

## Observações

- O carrinho é apenas demonstrativo e perde os itens ao recarregar a página.
- O formulário não envia dados para um servidor; ele monta um link para iniciar uma conversa no WhatsApp.
- Imagens de capa e produtos e as fontes são carregadas de serviços externos e exigem conexão com a internet.
- Os valores exibidos são conteúdo estático de exemplo e devem ser revisados antes do uso comercial.
