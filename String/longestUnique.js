

function longestUnique(str){

  let longestSoFar = 0;
  let currentLength = 0;
  let startIndex = 0;
  let strMap = {};

  for(let index = 0 ; index <= str.length - 1 ; index++ ){
    if(!strMap[str[index]]){      
      currentLength += 1;
      strMap[str[index]] = index;       
    } 
    else if(strMap[str[index]] !== undefined && strMap[str[index]] < startIndex){
      currentLength += 1;
      strMap[str[index]] = index;       
    }
    else {
      currentLength = index - strMap[str[index]];
      startIndex =  strMap[str[index]] + 1;
    }

    longestSoFar = Math.max(longestSoFar, currentLength); 
  }

  return longestSoFar;
}

console.log(longestUnique("abcdeb"))