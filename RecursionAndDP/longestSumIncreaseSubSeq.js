

function longestIncreasingSub(array) {

  let memoize = {};
  let sums = [];

  function recurse(currIndex) {

    if (currIndex == 0) {
      return array[currIndex];
    }

    let recurseArray = [];
    for (let i = 0; i <= currIndex - 1; i++) {
      let value = recurse(i);
      if (array[currIndex] >= array[i]) {
        value = value + array[currIndex];
        recurseArray.push(value); 
      } else {
        sums.push(value);
      }
    }

    return  Math.max(...recurseArray);
  }
  
  recurse(array.length - 1);

  return Math.max(...sums);
}

let testArray = [1, 101, 2, 3, 100, 4, 5];
console.log(longestIncreasingSub(testArray));