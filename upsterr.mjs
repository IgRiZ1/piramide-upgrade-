import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { get } from 'node:https';
import { log } from 'node:console';
const userInput = readline.createInterface({input, output});

let getal;
do{
    getal = parseFloat(await userInput.question('geef een getal? '))
    let som = getal + getal
    console.log(som);
    
}while(getal != 0){
    console.log('ik wil niet nul berekenen')
}


 process.exit()
    