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

    console.log(sumMap);
    sumMap[sumSoFar] = i;
  }

  console.log('dont have any');
}

let testArray = [3,9,2,4,-3,5,8]
let targetSum = 6;
subArraySum(testArray, targetSum);
