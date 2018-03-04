


let coins = [7, 3, 5, 6];
let memoizeTable = {};
let MAX_VALUE = 2147483640;
let totalOutput = 0;

// The Total ways
function coinChangingTotalWay(total, index) {

  if(total === 0){
    return 1;
  }

  if(total < 0 || index < 0){
    return 0;
  }

  return coinChangingTotalWay(total - coins[index], index ) +  coinChangingTotalWay(total, index - 1);
}

function coinChangingMinCoin(total)  {

  //change finish
  if(total === 0) {
    return 0;
  }

  //overshot
  if(total < 0){
    return MAX_VALUE;
  }

  let minCoin = 1000000;

  if(memoizeTable[total]){
    return memoizeTable[total];
  }

  for(let i = 0; i < coins.length; i++){
    minCoin = Math.min(minCoin , coinChangingMinCoin(total - coins[i]));
  }

  minCoin = minCoin + 1;

  memoizeTable[total] = minCoin;

  return minCoin;
}




let startingIndex = coins.length - 1;
console.log(coinChangingTotalWay(10, startingIndex));
console.log(coinChangingMinCoin(100));
