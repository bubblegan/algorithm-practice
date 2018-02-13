// Also known as kadane algo
function maxSubArray(array){

  let maxSoFar = 0;
  let maxCurrent = 0;
  let startIndex = 0;
  let endIndex = 0;

  for(let i = 0; i < array.length ; i++){
    maxCurrent = maxCurrent + array[i];
    
    if(maxCurrent <= 0){
      maxCurrent = 0;
      startIndex = i;
    }

    if(maxSoFar < maxCurrent){
      maxSoFar = maxCurrent;
      endIndex = i;
    }

  }
  return {startIndex, endIndex, maxSoFar};
}


let testArray = [5,3,6,-7,-7,1,10,11]
console.log(maxSubArray(testArray));