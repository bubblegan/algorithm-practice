

//array of [ value, weight ] array[0] = value, array[1] = weight

let memoizeTable = [];


function knapsackUnbound(array, maxWeight) {

  for(let i = 0 ; i < maxWeight+1  ; i++){
    memoizeTable.push(0);
  }

  for (let weight = 0; weight <= maxWeight; weight++) {
    for(let itemIndex = 0; itemIndex < array.length; itemIndex++){
      if(array[itemIndex][1] <= weight){
        memoizeTable[weight] = Math.max(
          memoizeTable[weight],
          memoizeTable[weight - array[itemIndex][1]] + array[itemIndex][0]
        );
      }
    }
  }

  return memoizeTable[maxWeight];
}

let weight = 5;
let testArray = [[1, 3], [2, 5], [3, 2]];

console.log(knapsackUnbound(testArray, 8));

