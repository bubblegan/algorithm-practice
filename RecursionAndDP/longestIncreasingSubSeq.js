

function longestIncreasingSub(array) {

  let memoize = {};

  function recurse(currIndex) {


    if (currIndex == 0) {
      return 1;
    }

    if(memoize[array[currIndex]]){
      return memoize[array[currIndex]];
    }


    let recurseArray = [];

    for (let i = 0; i <= currIndex - 1; i++) {
      let value = recurse(i);
      if (array[currIndex] >= array[i]) {
        value = value + 1;
      }
      recurseArray.push(value);
    }

    memoize[array[currIndex]] = Math.max(...recurseArray);

    return memoize[array[currIndex]];
  }

  return recurse(array.length - 1);
}

let testArray = [10, 22, 9, 33, 21, 50, 41, 60, 80,0];
console.log(longestIncreasingSub(testArray));