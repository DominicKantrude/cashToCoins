
                                       //Cash to Coins
const piggyBank = {
        quarters: 0,
        nickels: 0,
         dimes: 0,
         pennies: o,
}

let dollarAmount = 0.87

if (dollarAmount >= .25) {
    piggyBank.quarters = Math.floor(dollarAmount / .25);
    dollarAmount = dollarAmount % .25;
}
if(dollarAmount>=.1){
    piggyBank.dimes = Math.floor(dollarAmount / .1);
    dollarAmount = dollarAmount % .1;
}
if(dollarAmount>=.05){
    piggyBank.nickels = Math.floor(dollarAmount / .05);
    dollarAmount = dollarAmount % .05;
}
if(dollarAmount>=.01){
    piggyBank.pennies = Math.floor(dollarAmount / .01);
    dollarAmount = dollarAmount % .01;
}

console.log(piggyBank)