

function maxNonConsecutive(array){

  function recurse(totalSum = 0, index = array.length - 1){

    if(index < 0) {
      return totalSum;
    }

    return Math.max(recurse(totalSum + array[index], index - 2 ) , recurse(totalSum , index - 1))
  }

  return recurse();
}

let testArray = [3,6,4];
console.log(maxNonConsecutive(testArray));