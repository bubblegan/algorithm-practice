/**
 *
 * Given an input and total print all combinations with repetitions in this input
 * which sums to given total.
 * e.g
 * input - {2,3,5}
 * total - 10
 *
 * Output
 * [2,2,2,2,2],
 * [2,2,3,3],
 * [2,3,5],
 * [5,5]]
 * Reference
 * https://leetcode.com/problems/combination-sum/
 */

function sumCombination(array, target) {
  
  let combinations = [];

  function recurse(assigned = [], index = 0) {
    

    if(index >= array.length){
      return;
    }
    if(assigned.reduce( (a,b) => a + b , 0) === target){
      combinations.push(assigned);
      return;
    }
    if(assigned.reduce( (a,b) => a + b, 0) > target){
      return;
    }
   
        
    recurse([...assigned,array[index]], index); 
    recurse([...assigned], index + 1); 
  }

  recurse();
  console.log(combinations);

}


console.log(sumCombination([2,3,5],10));