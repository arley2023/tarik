// vdrificar se o produto devera aplicar-se um desconto
// <condicao>: produtos com valor maior que 100 reais
// 2
// <aplica-se> 15% de desconto
// caso não aplica-se 5% de desconto

// let produto = 'Microcontrolador PSI';
// let preco = 100;

// if(preco > 100){
//     // USAR CRASE
//     console.log(`foi aplicado um desconto de 15% R$ ${preco*0.15.toFixed(2)}`);
//     console.log(`valor final R$ ${preco*[1-0.15.toFixed(2)]}`)
// }else{
//     console.log(`foi aplicado um desconto de 5% R$ ${preco*0.05.toFixed(2)}`);
//     console.log(`valor final R$ ${preco*[1-0.05.toFixed(2)]}`)
// };



// receber velocidade capturada
// se velocidade for > 120km aplica multa de 0.25 para cada km ultrapassado
// se velocidade for > 80km aplica multa de 0.15 para cada km ultrapassado
// se velocidade for > 60km aplica multa de 0.05 para cada km ultrapassado
// se velocidade for <= 60km náo aplica multa

import { number } from '@inquirer/prompts';

console.log();

const velocidade = await number({
  message: "Velocidade Km/h: "
});

if(velocidade > 120){
    console.log(`Sua Velocidade ultrapassou 120Km/h e você sera multado em ${(velocidade-120)*0.25.toFixed(2)}`)
}else if(velocidade > 80){
    console.log(`Sua Velocidade ultrapassou 80Km/h e você sera multado em ${(velocidade-80)*0.15.toFixed(2)}`)
}else if(velocidade > 60){
    console.log(`Sua Velocidade ultrapassou 60Km/h e você sera multado em ${(velocidade-60)*0.05.toFixed(2)}`)
}else if(velocidade <= 60){
    console.log(`Voê nao foi multado`)
    }


