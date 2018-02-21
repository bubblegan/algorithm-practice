

function editDistance(strA, strB){

  function recurse(indexA, indexB){
    
    if(indexA == -1){
      return indexB + 1 ;
    }

    if(indexB == -1){
      return indexA + 1;
    }

    if(strA[indexA] == strB[indexB])
      return recurse(indexA - 1, indexB - 1);

    return 1 + Math.min(
      recurse(indexA , indexB - 1), //insert
      recurse(indexA - 1, indexB), //remove
      recurse(indexA - 1, indexB - 1),   //edit   
    )
  }

  let minEditDistance = recurse(strA.length - 1, strB.length - 1);
  return minEditDistance;
}

console.log(editDistance('saturday', 'sundayy'));

