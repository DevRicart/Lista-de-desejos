function mostrarProdutosCategoria(categoria) {
  var produtos = document.querySelectorAll('.produto')

  produtos.forEach(function (produto) {
    if (produto.classList.contains(categoria) || categoria === 'todos') {
      produto.style.display = 'flex' // Exibe o produto se ele pertencer à categoria ou se a categoria for "todos"
    } else {
      produto.style.display = 'none' // Oculta o produto se não pertencer à categoria selecionada
    }
  })
}

function pesquisarProdutos(palavraChave) {
  var produtos = document.querySelectorAll('.produto')
  var encontrouResultado = false

  if (palavraChave.trim() === '') {
    produtos.forEach(function (produto) {
      produto.style.display = 'block'

    })
  } else {
    produtos.forEach(function (produto) {
      var nomeProduto = produto.getAttribute('data-nome').toLowerCase()

      if (nomeProduto.includes(palavraChave.toLowerCase())) {
        produto.style.display = 'block'
        encontrouResultado = true
      } else {
        produto.style.display = 'none'
      }
    })
  }

  const mensagemSemResultados = document.getElementById('mensagemSemResultados')

  if (!encontrouResultado) {
    mensagemSemResultados.style.display = 'flex'
  } else {
    mensagemSemResultados.style.display = 'none'
  }

  barraPesquisa.addEventListener('input', function() {

    if (barraPesquisa.value.trim() === '') {
      // Se a barra de pesquisa estiver vazia ou com barra de espaço, esconde a mensagem "Nenhum produto encontrado"
      mensagemSemResultados.style.display = 'none';
    }
  });
}

const botoesCategoria = document.querySelectorAll('.btn-categoria')
const botaoMostrarTodos = document.getElementById('mostrarTodos')
const barraPesquisa = document.getElementById('barraPesquisa')

botoesCategoria.forEach(function (botao) {
  botao.addEventListener('click', function () {
    var categoriaSelecionada = botao.getAttribute('data-categoria')
    mostrarProdutosCategoria(categoriaSelecionada)
  })
})

botaoMostrarTodos.addEventListener('click', function () {
  mostrarProdutosCategoria('todos')
})

barraPesquisa.addEventListener('input', function () {
  pesquisarProdutos(barraPesquisa.value)
})
