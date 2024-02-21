let listaDeCompras = [];

function adicionarDoCarrinho(produto) {
    listaDeCompras.push(produto);
}

function mostrarTela(){
    let tamanhoDalista = listaDeCompras.length;
    let numeroDoProduto = 0;
    while (numeroDoProduto<tamanhoDalista){
        console.log(listaDeCompras[numeroDoProduto]);
        numeroDoProduto++
    }
}

adicionarDoCarrinho("maça");
adicionarDoCarrinho("pêra");
mostrarTela();