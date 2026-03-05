function calcular() {
    let vendedor = window.prompt(" Digite o nome do vendedor")
    let totalVendido = Number(window.prompt(" Digite o valor do produto"))
    let comissao = Number(window.prompt(" Digite o percentual da comissão"))





    //Validação  de valores de eetrada
    if(isNaN(totalVendido) || totalVendido <= 0 || isNaN(comissao) || comissao <= 0){
        alert("Por favor, digite valores numéricos válidos.")
        return
    }
    
    let percentualComissao = Number( ( comissao * totalVendido)) / 100;

    document.getElementById("NomeVendedor").innerHTML = ` O vendedor é : <strong> ${vendedor} </strong>`;
    document.getElementById("TotalVendido").innerHTML = ` O total vendido é : <strong>R$ ${totalVendido.toFixed(2)}</strong>`;
    document.getElementById("Comissao").innerHTML = ` O percentual da comissão é: <strong> ${comissao}% </strong>`; 
    document.getElementById("ValorTotal").innerHTML = ` O valor total que o vendedor receberá é: <strong>R$ ${percentualComissao.toFixed(2)}</strong>`; 
    

}
calcular();
