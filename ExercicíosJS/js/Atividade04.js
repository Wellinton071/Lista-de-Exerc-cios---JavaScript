function calcular() {
    let nomeFuncionario = window.prompt(" Qual o nome do funcionário")
    let salarioAtual = Number(window.prompt(" Qual o salario atual ?"))
    let percentualAumento = Number(window.prompt(" Qual o percentual de aumento?"))
    
    
    
    //Validação  de valores de eetrada
    // if(isNaN(totalVendido) || totalVendido <= 0 || isNaN(comissao) || comissao <= 0){
    //     alert("Por favor, digite valores numéricos válidos.")
    //     return
    // }

    let aumentoSalario = Number(percentualAumento / 100) * salarioAtual  ; 
    let novoSalario = Number( salarioAtual + aumentoSalario)

    document.getElementById("NomeFuncionario").innerHTML = ` O nome do funcionário é: <strong> ${nomeFuncionario} </strong>`;
    document.getElementById("SalarioAtual").innerHTML = ` O salario atual é : <strong>R$ ${salarioAtual.toFixed(2)}</strong>`;
    document.getElementById("PercentualAumento").innerHTML = ` O percentual de aumento é: <strong>${percentualAumento}%</strong>`;
    document.getElementById("AumentoSalario").innerHTML = ` O aumento de salário é de: <strong>R$ ${aumentoSalario.toFixed(2)} </strong>` ; 
    document.getElementById("NovoSalario").innerHTML = ` O novo salário é: <strong> R$ ${novoSalario.toFixed(2)}</strong>`; 
    

} 

