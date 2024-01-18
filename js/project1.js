// Creating our first javascript project using node packages
// SLOT MACHINE

// we use prompt package to take user input in js

// 1 deposit some money
// 2 decide no of lines to bet on
// 3 decide the bet money
// 4 spin the machine
// 5 check is user won
// 6 reward money if won
// 7 play again or stop if less money/ choice

//takes user imput
// npm init
// npm i prompt-sync
const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT ={
    "A": 5,
    "B": 4,
    "C": 3,
    "D": 6
}

const SYMBOLS_VALUE = {
    "A" : 9,
    "B" : 6,
    "C" : 3,
    "D" : 1
}

const spin = () =>{

    //array of all the symbols
    const symbols = [];
    for(const[symbol,count] of Object.entries(SYMBOLS_COUNT)){
        for(let i =0;i<count;i++){
            symbols.push(symbol);
        }
    }

    //array of columns -> each element of arr is a column in slot mc
    const reels = [];
    for(let i=0;i<COLS;i++){
        reels.push([]); // gives reels[ [] ,[],[] ]
        const reelSymbols = [...symbols]; // copying the arr
        for(let j=0;j<ROWS;j++){
            // random fn gives random float value between 0 to 1
            const randomIndex = Math.floor(Math.random() * reelSymbols.length);
            const selectedSymbol = reelSymbols[randomIndex];
            reels[i].push(selectedSymbol);
            reelSymbols.splice(randomIndex,1); //splice adds or removes array elements splice(index,no of items to remove or add,elemnt to add)
        }
    }
    return reels;
};




// get initial deposit amt
const deposit = () => {

    while(true){
    const depoMoney = prompt("enter the deposit money: ");
    const numDepoMoney = parseFloat(depoMoney);

    if(isNaN(numDepoMoney) || numDepoMoney<=0){
        console.log("Invalid deposit amount , Try again!");
    }
    else{
        return numDepoMoney;
    }
}
};

//get no of lines to bet on
const getNumberOfLines = () => {

    while(true){
    const lines = prompt("Enter the no of lines to bet on (1-3): ");
    const numLines = parseFloat(lines);

    if(isNaN(numLines) || numLines<=0 || numLines >3){
        console.log("Invalid no of lines , Try again!"); 
    }
    else{
        return numLines;
    }
}
}



//get amt of bet
const getBet = (balance,line) => {
   
    while(true){
        const bet = prompt("Enter the bet amt per line: ");
        const numBet = parseFloat(bet);
    
        if(isNaN(numBet) || numBet<=0 || numBet >balance/line){
            console.log("Invalid bet amt , Try again!"); 
        }
        else{
            return numBet;
        }
    }

}
// convert columns into rows for better checking
const transpose = (reels) => {
    const rows= [];
    for(let i=0;i<ROWS;i++){
        rows.push([]);
        for(let j=0;j<COLS;j++){
            rows[i].push(reels[j][i]);
            
        }
    }
    return rows;
}

const printRows = (rows) =>{
    
    for(const row of rows){
        let rowString = "";
        for(const [i,symbol] of row.entries()){
            rowString += symbol;
            if( i!= row.length -1){
                rowString += "|" ;
            }
        }
        console.log(rowString);
    }
}

const getWinnings = (rows,bet,lines) => {
    let winnings = 0;

    for(let row =0;row<lines;row++){
        const symbols =  rows[row];
        let allSame = true;
        for(const symbol of symbols){
            if(symbol != symbols[0]){
                allSame = false;
                break;
            }
            
        }
        if(allSame){
            winnings += bet * SYMBOLS_VALUE[symbols[0]];
        }
        
    }
    return winnings;
}

const game = () =>{
    let balance = deposit();  //can make changes in the deposit amt
    while(balance != 0){ 
    console.log("Balance amt: " + balance);
    
    const numberOfLines = getNumberOfLines();
    let totalBet = getBet(balance,numberOfLines);
    balance -= numberOfLines*totalBet;
    const reels = spin();

    const transrow = transpose(reels);
    printRows(transrow);
    const winnings = getWinnings(transrow,totalBet,numberOfLines);
    balance += winnings;
    console.log("you won " + winnings.toString());

    if(balance<=0){
        console.log("Insufficient balance");
        break;
    }
    const playAgain = prompt("Do you want to play again? (y/n) ");
        if(playAgain!= "y") break;
    }
}
game();






