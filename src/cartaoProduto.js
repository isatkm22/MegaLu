import { AdicionarAoCarrinho } from "./menuCarrinho";
import { catalago } from "./utilidades";

export function renderizarCatalago(){
    for (const produtocatalago of catalago) {
        const cartaoProduto = `<div class='border-solid border-2 w-48 m-2 flex flex-col p-2 justify-between shadow-xl shadow-slate-400 rounded-lg group ${produtocatalago.feminino ? 'feminino': 'masculino'}' id="card-produto-${produtocatalago.id}">
            <img src="./assets/img/${produtocatalago.imagem}" alt="Produto ${produtocatalago.id} do Mega Lu."
                class='group-hover:scale-110 duration-300 my-3 rounded-lg'/>
    
            <p class='text-sm'>${produtocatalago.marca}</p>
            <p class='text-sm'>${produtocatalago.nome}</p>
            <p class='text-sm'>$${produtocatalago.preco}</p>
            <button id='adicionar-${produtocatalago.id}' class='bg-slate-950 hover:bg-slate-700 text-slate-200'><i class="fa-solid fa-cart-plus"></i></button>
        </div>`;
    
        document.getElementById("container-produto").innerHTML += cartaoProduto;
       
    }
    
    for (const produtocatalago of catalago) {
        document.getElementById(`adicionar-${produtocatalago.id}`).addEventListener("click", () => AdicionarAoCarrinho(produtocatalago.id));
    }
    
}
 
 