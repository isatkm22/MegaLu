const catalagoProduto = document.getElementById("container-produto");

function exibirTodos(){
    const produtosEscondidos = Array.from(catalagoProduto.getElementsByClassName("hidden"));

    for(const produto of produtosEscondidos){
        produto.classList.remove("hidden");
    }
}


function escoderMasculinos(){
    exibirTodos();
    const produtoMasculinos = Array.from(catalagoProduto.getElementsByClassName("masculino"));

    for (const produto of produtoMasculinos){
        produto.classList.add("hidden");
    }
}


function escoderFemininos(){
    exibirTodos();
    const produtoFemininos = Array.from(catalagoProduto.getElementsByClassName("feminino"));

    for (const produto of produtoFemininos){
        produto.classList.add("hidden");
    }
}

export function inicializarFiltros (){
    document.getElementById("exibir-femininos").addEventListener("click", escoderMasculinos);
    document.getElementById("exibir-todos").addEventListener("click", exibirTodos );
    document.getElementById("exibir-masculinos").addEventListener("click", escoderFemininos);
}