import { input, number, password, confirm, select, checkbox } from '@inquirer/prompts';

const altura = await input({
    message: 'altura: ',
    validate: (h) => h.includes(',') || "use virgula", 
});

console.log("altura -> ${altura} | tipo: ${typeof altura}");


// console.log(altura.toFixed(42).toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
// console.log("altura -> " + typeof altura);

