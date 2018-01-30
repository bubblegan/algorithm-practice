


let coins = [2, 3, 5, 6]
let totalOutput = 0;


function coinChanging(total, index) {

  if(total === 0){
    return 1;
  }

  if(total < 0 || index < 0){
    return 0;
  }

  return coinChanging(total - coins[index], index ) +  coinChanging(total, index - 1);
}

let startingIndex = coins.length - 1;
console.log(coinChanging(10, startingIndex));