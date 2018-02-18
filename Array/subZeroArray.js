

let testArray = [15, -2, 2, 13, -8, 1, 7, 10, 23];


function longestConsecutiveZero(array){

  let sum = 0;
  let map = {};
  let maxLength = 0;

  for(let i = 0 ; i < array.length ; i++){
    sum += array[i];

    if(array[i] == 0 && maxLength == 0){
      maxLength = 1;
    }

    if(sum == 0){
      maxLength = i + 1;
    }

    let previousMax = map[sum];

    if(previousMax !== undefined){
      maxLength = Math.max(i - previousMax,maxLength);
    } else {
      map[sum] = i;
    }
  }

  return maxLength;
}

console.log(longestConsecutiveZero(testArray));