let listaProdutos = []
let formProduto = document.getElementById("form-produto")
function cadastrarProduto(event) {
    event.preventDefault()
    let inputProduto = document.getElementById("nome-produto").value
    let inputQuantidade = document.getElementById("quantidade-produto").value
    let inputImagem = document.getElementById("imagem-produto").value

let objetoProduto = {
    nome: inputProduto,
    quantidade: inputQuantidade,
    imagem: inputImagem
}

listaProdutos.push(objetoProduto)

console.log(listaProdutos)

}


formProduto.addEventListener("submit", cadastrarProduto)