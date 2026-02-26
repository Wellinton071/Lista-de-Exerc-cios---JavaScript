    // Crie um programa em JavaScript que

    //Solicite o nome do produto
    //Solicite o valor do produto
    //Solicite o percentual de desconto


    let produto = window.prompt("Digite o nome do produto");
    let valorProduto = Number(window.prompt(" Digite o valor do produto"));
    let percenDesconto = Number(window.prompt(" Digite o percentual de desconto"));// 0.90
    let resultado = Number(( (valorProduto * percenDesconto ) / 100 ));
    let valorFinal = valorProduto - resultado;


    window.document.writeln(" O valdor do desconto é:" + resultado);
    window.document.writeln(" O valor final com desconto é:"+ " "+ valorFinal);
    window.document.writeln(" O nome do produto é:"+ " " + produto );




