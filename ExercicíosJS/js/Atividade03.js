function calcular() {
    let valorProduto = Number(window.prompt(" Peça o valor total de um produto"))
    let valorEntrada = Number(window.prompt(" Peça o valor da entrada"))
    let percentualJuros = Number(window.prompt(" Digite o Peça o percentual de juros"))
    let qtdParcelas = Number(window.prompt(" Digite o a quantidade de parcelas"))
    
    //Validação  de valores de eetrada
    // if(isNaN(totalVendido) || totalVendido <= 0 || isNaN(comissao) || comissao <= 0){
    //     alert("Por favor, digite valores numéricos válidos.")
    //     return
    // }
    
    let valorRestanteEntrada =  Number( valorProduto - valorEntrada)
    let valorJuros = Number( (valorRestanteEntrada * (percentualJuros / 100)  * qtdParcelas)   ) ;
    let valorcomJuros = valorRestanteEntrada + valorJuros;
    let valorParcelas = valorcomJuros / qtdParcelas;

    document.getElementById("Produto").innerHTML = ` O valor total de um produto é: <strong> ${valorProduto.toFixed(2)} </strong>`;
    document.getElementById("Entrada").innerHTML = ` O valor da entrada é : <strong>R$ ${valorEntrada.toFixed(2)}</strong>`;
    document.getElementById("ValorRestante").innerHTML = ` O valor restante da entrada é : <strong>R$ ${valorRestanteEntrada.toFixed(2)}</strong>`;
    document.getElementById("PecentualJuros").innerHTML = ` O percentual de juros é: <strong> ${percentualJuros}% </strong>` ; 
    document.getElementById("Parcelas").innerHTML = ` Quantidade de parcelas: <strong> ${qtdParcelas}</strong>`; 
    document.getElementById("ValorComJuros").innerHTML = ` Total com juros juros aplicado: <strong>R$ ${valorcomJuros.toFixed(2)}</strong>`; 
    document.getElementById("ValorParcelado").innerHTML = ` Valor parcelado parcelas: <strong>R$ ${valorParcelas.toFixed(2)}</strong>`; 


}

