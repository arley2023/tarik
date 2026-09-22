const preco = 1499.9;
const desconto = 0.15558;

console.log("O preço do produto é: R$ " + preco.toLocaleString("pt-BR", { minimumFractionDigits: 3, maximumFractionDigits: 3 }));
console.log("O desconto é de: " + (desconto * 100).toFixed(4) + "%");
console.log("o valor de desconto é: R$ " + (preco * desconto).toLocaleString("pt-BR", { minimumFractionDigits: 3, maximumFractionDigits: 3 }));
console.log("O preço do produto com desconto é: R$ " + (preco - (preco * desconto)).toLocaleString("pt-BR", { minimumFractionDigits: 3, maximumFractionDigits: 3 }));

