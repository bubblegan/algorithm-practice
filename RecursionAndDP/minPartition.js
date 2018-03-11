//https://practice.geeksforgeeks.org/problems/the-painters-partition-problem/0

let maxPainter = 2;

function sum(array, startIndex, endIndex) {
  let total = 0;
  for (let i = startIndex; i <= endIndex; i++) {
    total += array[i];
  }
  return total;
}



function minPartition(array, partition) {

  function recurse(index, currentPartition = partition) {

    if (currentPartition === 1) {
      return sum(array, 0, index - 1);
    }
    if(array.length[0]){
      return array[0];
    }

    let best = 9999999;


    for (let index = 1; index <= array.length; index++) {
      best = Math.min(best,  Math.max(recurse(index, currentPartition - 1),sum(array, index, array.length - 1))
      );
    }
    return best
  }

  return recurse(array.length);
}

let testArray = [10, 20, 60, 50, 30, 40 ];
console.log(minPartition(testArray,2))

