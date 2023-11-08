# Explicação do Código JavaScript:

## 1. Função mostrarProdutosCategoria(categoria):

- Esta função recebe um parâmetro **categoria**, que será usada para filtrar os produtos.

- **document.querySelectorAll('.produto')** seleciona todos os elementos com a classe "produto" (ou seja, as imagens de produtos) e os armazena na variável **produtos**.

- Em seguida, percorre todos os produtos usando **produtos.forEach(function(produto) {...})**.

- Verifica se o produto possui a classe correspondente à categoria selecionada OU se a categoria selecionada é "todos".

  - Se o produto corresponder à categoria OU se a categoria for "todos", o estilo **display** do produto é definido como 'block' (para exibi-lo).
  - Caso contrário, o produto é ocultado, definindo o estilo **display** como 'none'.

## 2. Associação dos Event Listeners:

- **var botoesCategoria = document.querySelectorAll('.btn-categoria');** seleciona todos os botões de categoria e armazena-os em **botoesCategoria**.

- **botoesCategoria.forEach(function(botao) {...})** percorre cada botão de categoria.

  - Quando um botão é clicado, ele obtém a categoria associada a esse botão (usando **getAttribute('data-categoria')**) e chama **mostrarProdutosCategoria(categoriaSelecionada)**, passando a categoria correspondente para filtrar os produtos.

- **var botaoMostrarTodos = document.getElementById('mostrarTodos');** seleciona o botão "Mostrar Todos" pelo seu ID.

  - Quando este botão é clicado, ele chama **mostrarProdutosCategoria('todos')**, o que resulta em todos os produtos sendo exibidos, independentemente da categoria.

## Resumo:

- A lógica se baseia em manipular os estilos de exibição (**display**) dos produtos com base nas categorias selecionadas ou no botão "Mostrar Todos".
- Para os botões de categoria, cada botão ativa a exibição dos produtos correspondentes a essa categoria, ocultando os outros.
- O botão "Mostrar Todos" exibe todos os produtos, independentemente da categoria.

Esta abordagem permite filtrar e exibir os produtos com base nas categorias selecionadas ou exibir todos os produtos quando desejado.
