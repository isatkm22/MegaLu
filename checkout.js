import { data } from "autoprefixer";
import { desenharProdutoSimples, lerLocalStorage,apagarDoLocalStorage, salvarLocalStorage } from "./src/utilidades";

function desenharProdutosCheckout(){
    const idsprodutoCarrinhoComQuantidade = lerLocalStorage("carrinho") ?? {};

    for (const idProduto in idsprodutoCarrinhoComQuantidade){
        desenharProdutoSimples (idProduto, "container-produto-checkout", idsprodutoCarrinhoComQuantidade[idProduto] );
    }
}

function finalizarCompra(evento){
    evento.preventDefault();
    const idsprodutoCarrinhoComQuantidade = lerLocalStorage("carrinho") ?? {};
    if(Object.keys(idsprodutoCarrinhoComQuantidade).length === 0){
        return;
    }    
    
    const dataAtual = new Date();
    const pedidoFeito = {
        dataPedido: dataAtual,
        pedido: idsprodutoCarrinhoComQuantidade
    }
    
    const historicoDePedidos = lerLocalStorage('historico') ?? [];
    const historicoDePedidosAtualizados = [pedidoFeito, ...historicoDePedidos];

    salvarLocalStorage('historico', historicoDePedidosAtualizados);
   
    apagarDoLocalStorage('carrinho');
    
    window.location.href = window.location.origin + '/pedidos.html';
}

desenharProdutosCheckout();

document.addEventListener('submit',(evt) => finalizarCompra(evt));