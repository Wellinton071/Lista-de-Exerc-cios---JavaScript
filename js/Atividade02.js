    //let nomeVendedor = window.prompt("Digite o nome do vendedor");
    let valorTotalVendido = Number(window.prompt(" Digite o valor vendido"));
    let percenComissao = Number(window.prompt(" Digite o percentual de desconto"));// 0.90
    let resultado = Number( valorTotalVendido * ( percenComissao  / 100 ));

    let valorFinal = valorTotalVendido + resultado;



    window.document.writeln(" O valdor da comisão é:"+ " " + resultado + "<br>");
    //window.document.writeln(" O valdor do desconto é:" + nomeVendedor);
    //window.document.writeln(" O nome do produto é:"+ " 100" + produto );
    window.document.writeln(" O valor total que o vendedor receberá:"+ " "+ valorFinal);

    


