



function longestWithoutRepeat(inputStr) {

  let visited = {};
  let maxLength = 0;
  let maxSoFar = 0;

  for (let i = 0; i < inputStr.length; i++) {

    //if visited
    if (visited[inputStr[i]]) {
      maxSoFar = Math.max(maxLength, maxSoFar);      
      visited = {};
      maxLength = 0;
    }

    maxLength += 1;
    visited[inputStr[i]] = 1;
  }
  return Math.max(maxLength, maxSoFar);
}

let testStr = 'GEEKSFORGREEKSABCDFH';
console.log(longestWithoutRepeat(testStr));
