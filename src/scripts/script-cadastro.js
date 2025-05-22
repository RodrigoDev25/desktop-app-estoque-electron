let formProduto = document.getElementById("form-produto")
function cadastrarProduto(event) {
    event.preventDefault()
    let produto = document.getElementById("nome-produto").value
    let quantidade = document.getElementById("quantidade-produto").value
    let imagem = document.getElementById("imagem-produto").value

    console.log(produto, quantidade, imagem)
}
formProduto.addEventListener("submit", cadastrarProduto)