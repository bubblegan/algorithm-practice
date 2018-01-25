function subArraySum(array, targetSum) {

  let sumSoFar = 0;
  let sumMap = {};

  for (let i = 0; i < array.length; i++) {
    
    sumSoFar += array[i];

    if(sumSoFar == targetSum){
      console.log(`The sum is from index 0 to index ${i}`);
      return;
    }


    if(!isNaN(sumMap[sumSoFar - targetSum])){
      console.log(`The sum is from index ${sumMap[sumSoFar - targetSum] + 1} to index ${i}`);
      return;
    }

    sumMap[sumSoFar] = i;
  }

  console.log('dont have any');
}

let testArray = [9,2,-3,5,8]
let targetSum = 10;
subArraySum(testArray, targetSum);
