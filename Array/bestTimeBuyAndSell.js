// Maximum 

// Example 1:
// Input: [7, 1, 5, 3, 6, 4]
// Output: 5

// max. difference = 6-1 = 5 (not 7-1 = 6, as selling price needs to be larger than buying price)
// Example 2:
// Input: [7, 6, 4, 3, 1]
// Output: 0

function bestTime(array) {

  let max = 0;
  let min = array[i];
  
  if(array.length === 1)
    return max;

  for (let i = 1; i < array.length; i++) {
    if(array[i] > min){
      max = Math.max(max, array[i] - min);
    } else {
      min = array[i];
    }
  }

  return max;
}


