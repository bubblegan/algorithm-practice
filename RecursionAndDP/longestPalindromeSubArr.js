
function longestPalindrome(str){
  
  function recurse( str ,leftIndex = 0, rightIndex = str.length - 1){

    if(leftIndex == rightIndex){
      return 1;
    }

    if(rightIndex < leftIndex){
      return 0;
    }
    
    let maxPalin = 0;

    if(str[leftIndex] == str[rightIndex]){
      maxPalin = recurse(str, leftIndex + 1, rightIndex - 1) + 2;
    } else {
      maxPalin = Math.max(recurse(str,leftIndex + 1, rightIndex),recurse(str, leftIndex,rightIndex - 1));
    }

    return maxPalin;
  }

  return recurse(str);
}

let testStr = 'GEEKSFORGEEKS';
console.log(longestPalindrome(testStr));