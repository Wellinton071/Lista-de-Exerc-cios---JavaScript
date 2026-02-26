
    let valorTotalProduto = Number(window.prompt(" Digite o valor total do produto"));
    let valorEntrada = Number(window.prompt(" Digite o valor da entrada"));
    let percentualJuros = Number(window.prompt(" Digite o percentual de juros"));
    let numParcelas = Number(window.prompt(" Digite o número de parcelas"));


    let valorRestanteEntrada = Number(( valorTotalProduto - valorEntrada));
    let valorJurosAplicado = Number(valorRestanteEntrada * ( percentualJuros / 100)  );
    let totalParcelas = Number( (valorRestanteEntrada + valorJurosAplicado ) / numParcelas);


    window.document.writeln(" O total do produto é:" + " " + valorTotalProduto.toFixed(2) + "- o valor da entrada"+ valorEntrada  + " "+ "<br>");
    window.document.writeln(" O valor restante da entrada é:" + " " + valorRestanteEntrada.toFixed(2) + "<br>" );
    window.document.writeln(" O valor do juros aplicado é:"+ " " + valorJurosAplicado.toFixed(2) + "<br>" );
    window.document.writeln(" O valor total  do restante parcelado é:"+ " " + totalParcelas.toFixed(2) +" <br>" );
    






    //let resultado = Number( valorTotalVendido * ( percenComissao  / 100 )); // Comissao do vendedor
    //window.document.writeln(" O valdor da comisão é:"+ " " + resultado + "<br>");
    //window.document.writeln(" O nome do produto é:"+ " 100" + produto );
    //window.document.writeln(" O valor total que o vendedor receberá:"+ " "+ valorFinal);


    //let Juros  = (100 * 20%) / 100
