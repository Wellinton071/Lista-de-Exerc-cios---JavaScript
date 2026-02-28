// let vProduto = Number(window.prompt(" Digite o valor do produto"));

let produto = window.prompt(" Digite o nome do produto")
let vProduto =  Number(window.prompt(" Digite o valor do produto"))
let percentualDesconto = Number(window.prompt(" Digite o percentual de desconto"))


let localResposta = document.getElementById("LocalResposta")
localResposta.innerHTML = ` O produto é: <strong> ${produto}</strong>`;

let valorProduto = document.getElementById("valorProduto")
valorProduto.innerHTML = `O valor do produto é <strong>: R$ ${vProduto.toFixed(2)}</strong>`

let vpDesconto = document.getElementById("percentualDesconto");
vpDesconto.innerHTML = `O percentual de desconto é: <strong> ${percentualDesconto} %</strong> `;


let valorDesconto = ( vProduto * percentualDesconto) / 100;
let Desconto = document.getElementById("valorDesconto");
Desconto.innerHTML = `O valor do desconto é <strong>: R$ ${valorDesconto.toFixed(2)}</strong> `;


let valorFinal = ( vProduto - valorDesconto ) ;
let vFinal = document.getElementById("valorFinal");
vFinal.innerHTML = `O valor final com desconto é <strong>: R$ ${valorFinal.toFixed(2)}</strong>`;

// juros iguala  desconto praticamente


