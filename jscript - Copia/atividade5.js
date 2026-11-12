// const preco = 1234.5;
const brl = {style: 'currency', currency: 'BRL'};

// preco.toFixed(2);                           // "1234.50"
// preco.toLocaleString("pt-BR");              // "1.234,50"
// preco.toLocaleString("pt-BR", brl);         // "R$ 1.234,50"

// console.log((0.256).toLocaleString("pt-BR", {style: 'percent'}));  // "26%"

// console.log("O preço do produto é: " + preco.toLocaleString("pt-BR", brl));

const preco1 = 1499.9;
const desconto1 = 0.15558;
// const brl1 = {style: 'currency', currency: 'BRL'};

console.log("O preço do produto é: " + preco1.toFixed(3).toLocaleString("pt-BR", brl));
console.log(typeof preco1.toFixed(3));
console.log("O desconto é de: " + (desconto1 * 100).toFixed(4) + "%");
console.log(typeof desconto1.toFixed(3));
console.log("o valor de desconto é: R$ " + (preco1 * desconto1).toLocaleString("pt-BR", { minimumFractionDigits: 3, maximumFractionDigits: 3 }));
console.log("O preço do produto com desconto é: R$ " + (preco1 - (preco1 * desconto1)).toLocaleString("pt-BR", { minimumFractionDigits: 3, maximumFractionDigits: 3 }));

