//https://www.geeksforgeeks.org/dynamic-programming-set-18-partition-problem/


function havePartition(array){

  let totalSum = array.reduce((sum, current) => sum += current);

  function recurse(leftPart, rightPart = 0, index = array.length - 1){

    if(leftPart == rightPart)
      return true;

    if(index == -1)
      return false;
    
    return recurse(leftPart, rightPart, index - 1) 
            || recurse(leftPart - array[index], rightPart + array[index], index - 1)
  }

  return recurse(totalSum);

}


let testArray = [1,5,3,7];
console.log(havePartition(testArray));
