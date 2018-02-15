

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


function knapsackUnboundRecursion(array, maxWeight){  

  function recurse(currentValue = 0, currentWeight = 0, index = 0){
    
    if(index >= array.length){
      return currentValue;
    }
    
    if(currentWeight + array[index][1] > maxWeight){
      return currentValue;
    }


    let highestValuePossible = Math.max(
        recurse(currentValue + array[index][0], currentWeight + array[index][1], index)
       ,recurse(currentValue, currentWeight, index + 1 ));


    return highestValuePossible;
  }

  return(recurse());
}



let weight = 5;
let testArray = [[1, 3], [2, 5], [3, 2]];

console.log(knapsackUnbound(testArray, 300));
console.log(knapsackUnboundRecursion(testArray, 300));


