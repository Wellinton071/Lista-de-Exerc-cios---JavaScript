function calcular() {
    let produto = window.prompt(" Qual o nome do produto ?")
    let valorProduto = Number(window.prompt(" Qual o valor do produto ?"))
    let ED = window.prompt(" Qual o estado de destino? (Sigla)").toUpperCase();
    

        
    if (isNaN(valorProduto) || valorProduto <= 0 || produto === "") {
        alert("Por favor, digite valores válidos.");
        return;
    }
    

    if(valorProduto > 500){


        document.getElementById("Frete").innerHTML = ` O Frete é :<strong> ${"Grátis"} </strong>`;
        document.getElementById("Compra").innerHTML = ` O valor da compra  é de :<strong>R$ ${valorProduto}</strong>`;
    
    }else if(valorProduto <= 500 && ED !=="SP"){

        let frete =  Number((10 * valorProduto ) / 100) 
        let compra = Number(valorProduto + frete)
        document.getElementById("Frete").innerHTML = ` O Frete é de :<strong>  ${frete.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} </strong>`;
        document.getElementById("Compra").innerHTML = ` O valor valor total da compra com frete é de:<strong>R$ ${compra.toFixed(2)} </strong>`;

    }else{
        document.getElementById("Frete").innerHTML = ` O Frete é: <strong>Grátis em (SP)</strong>`;
        document.getElementById("Compra").innerHTML = ` O valor da compra é de: <strong>R$ ${valorProduto.toFixed(2)}</strong>`;
    }
    

    document.getElementById("Produto").innerHTML = ` O nome do produto é: <strong> ${produto} </strong>`;
    document.getElementById("ValorProduto").innerHTML = `O valor do produto é de: <strong>R$ ${valorProduto.toFixed(2)}</strong>`;
    document.getElementById("EstadoDestino").innerHTML = `O estado de destino é: <strong>${ED}</strong>`;
    
    
    
   

} 

