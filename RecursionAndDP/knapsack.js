

//array of [ value, weight ] array[0] = value, array[1] = weight

let memoizeTable = [];


function knapsack(array, currentIndex, currentWeight) {

  //Index more den array length
  if(currentIndex === 0 || currentWeight === 0){
    return 0;
  }

  //if calculate before
  /*
  if(memoizeTable[currentIndex][currentWeight] !== -1)
    return memoizeTable[currentIndex][currentWeight];
  */

  //skip if the item too heavy
  if(array[currentIndex][1] > currentWeight){
    knapsack(array, currentIndex - 1, currentWeight)
  }

  //Pick and dont pick branch
  return Math.max(
    array[currentIndex][0] + knapsack(array, currentIndex - 1, currentWeight - array[currentIndex][1]),
    knapsack(array, currentIndex - 1, currentWeight),
  )
}

let weight = 5;
let testArray = [[1,3],[2,5],[3,2]];
/*
for(let totalItem = 0 ; totalItem < testArray.length ; totalItem++){
  for(let totalWeight = 0 ; totalWeight < weight ; totalWeight++){
    memoizeTable.push([-1,-1]);
  }
}*/
console.log(knapsack(testArray, testArray.length - 1, 5));

