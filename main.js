import { renderizarCatalago } from "./src/cartaoProduto";
import { inicializarFiltros } from "./src/filtroscatalagos";
import { inicializarCarrinho, renderizarProdutosCarrinho, atualizarPrecoCarrinho } from "./src/menuCarrinho";

renderizarCatalago();
inicializarCarrinho();
renderizarProdutosCarrinho();
atualizarPrecoCarrinho(); 
inicializarFiltros();



