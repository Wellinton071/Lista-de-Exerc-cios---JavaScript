function calcular() {
    let nomeCliente = window.prompt(" Qual o nome do cliente ?")
    let valorEmprestimo = Number(window.prompt(" Qual o valor do empréstimo ?"))
    let percentualJuros = Number(window.prompt(" Qual o percentual de juros ?"))
    let numParcelas = Number(window.prompt(" Qual o número e parcelas ?"))

        
    // Validação  de valores de eetrada
    if(isNaN(valorEmprestimo) || valorEmprestimo <= 0 || isNaN(percentualJuros) || numParcelas <= 0){
        alert("Por favor, digite valores numéricos válidos.")
        return
    }
    
    let Juros = Number( valorEmprestimo * (percentualJuros / 100) * numParcelas);
    let valorComJuros = Number(valorEmprestimo + Juros);
    let valorParcelas = Number( valorComJuros / numParcelas)

    document.getElementById("Cliente").innerHTML = ` O nome do cliente é: <strong> ${nomeCliente} </strong>`;
    document.getElementById("ValorEmprestimo").innerHTML = `O valor do empréstimo é de: <strong>R$ ${valorEmprestimo.toFixed(2)}</strong>`;
    document.getElementById("PercentualJuros").innerHTML = `O percentual de juros é de: <strong>${percentualJuros}%</strong>`;
    document.getElementById("NumerodParcelas").innerHTML = `O número de parcelas é de: <strong> ${numParcelas}</strong>` ; 
    document.getElementById("ValordJuros").innerHTML = `O valor do juros é de: <strong> R$ ${Juros.toFixed(2)}</strong>`; 
    document.getElementById("ValorParcelado").innerHTML = `O valor do empréstimo com juros parcelado é de: <strong> R$ ${valorParcelas.toFixed(2)}</strong>`; 
    document.getElementById("ValorComJuros").innerHTML = `O valor do empréstimo com juros é de: <strong> R$ ${valorComJuros.toFixed(2)}</strong>`; 
    
    if (numParcelas > 24) {
        window.alert("O máximo de parcelas permitido é 24 !!")
    }

} 

