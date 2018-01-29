

function allCombination(array) {
  let combination = [];
  function recursion(array, index) {
  
    if(index == -1 ){
      return;
    }
    combination.push([...array]);
    recursion(array , index - 1);
    recursion([...array.slice(0, index - 1), ...array.slice(index + 1, array.length -1)], index - 1);
  }

  recursion(array, array.length - 1)

  return combination;
}

//Combination of required limit
function getCombinations (items, required) {
  const combinations = []
  function recurse (assigned, i) {
    if (assigned.length < required) {
      while (i < items.length) {
        recurse([...assigned, items[i]], i + 1)
        i++
      }
    } else {
      combinations.push(assigned)
    }
  }
  recurse([], 0)
  return combinations
}


let testArray = [4,1,8,2,5];
console.log(getCombinations(testArray,4));