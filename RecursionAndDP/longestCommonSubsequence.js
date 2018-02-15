

function longestSubsequence(stringA, stringB){

  let total = 0;

  function recurse(indexA = stringA.length - 1, indexB  = stringB.length - 1){
    //base case
    if(indexA == -1 || indexB == -1 ){
      return 0; 
    }

    if(stringA[indexA] == stringB[indexB]){
      total = 1 + recurse(indexA - 1, indexB - 1);
    } else {
      total = Math.max(recurse(indexA - 1, indexB),recurse(indexA, indexB - 1))
    }

    return total;
  }

  return recurse();

}

let stringA = 'IAMBAD';
let stringB = 'IBKEAMD';

console.log(longestSubsequence(stringA,stringB))