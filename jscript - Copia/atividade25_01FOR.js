import { input, number, password, confirm, select, checkbox } from '@inquirer/prompts';

// for (let i = 0; i <= 10; i++) {
//     console.log(`for`, i);
// }

let total = 0;

for (let i = 1; i <= 2500; i++) {
    total = total + i
}

console.log(total)