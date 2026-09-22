console.log();
const brl = {style: 'currency', currency: 'BRL'};
const produto = 'Fone Bluetooth';
const preco = 129.9;
const quantidade = 3;
const desconto = 0.15;

console.log('='.repeat(35));
console.log(' Ficha do Produto'.padEnd(35));
console.log('='.repeat(35));
console.log("Produto".padEnd(15)+produto.padStart(20));
console.log("Preço".padEnd(15) + preco.toFixed(2).toLocaleString("pt-BR", brl).padStart(20));
console.log("Quantidade".padEnd(15)+quantidade.toFixed(0).padStart(20));
console.log("Desconto".padEnd(15) + (desconto * 100).toFixed(2).padStart(19) + "%");
console.log('='.repeat(35));
