
//https://www.geeksforgeeks.org/given-an-array-arr-find-the-maximum-j-i-such-that-arrj-arri/

function maxLeftRight(array){

  let leftMin = [];
  let rightMax = [];

  leftMin[0] = array[0]
  for(let i = 1 ; i < array.length ; i++){
    leftMin[i] = Math.min(array[i], leftMin[i - 1]);
  }

  rightMax[array.length - 1] = array[array.length - 1];
  for(let k = array.length - 2 ; k >= 0 ; k--){
    rightMax[k] = Math.max(array[k], rightMax[k  + 1])
  }

  console.log(leftMin);
  console.log(rightMax);

  let leftIndex = 0, rightIndex = 0, maxDiff = 0
  while(leftIndex < array.length && rightIndex < array.length){
    if(rightMax[rightIndex] > leftMin[leftIndex]){
      maxDiff = Math.max(maxDiff, rightIndex - leftIndex);
      rightIndex++;
    } else {
      leftIndex++;
    }
  }

  return maxDiff;
}


console.log(maxLeftRight([34, 8, 10, 3, 2, 80, 30, 33, 1]));