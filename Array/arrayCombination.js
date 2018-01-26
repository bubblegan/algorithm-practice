

function allCombination(array) {
  let combination = [];
  function recursion(array, index) {
  
    if(index == -1 ){
      return;
    }

    combination.push(array);

    recursion(array.splice(index, 1), index - 1);
    recursion(array , index - 1);    
  }

  recursion(array, array.length - 1)

  return combination;
}

let testArray = [4,1,8,2,5];
console.log(allCombination(testArray));