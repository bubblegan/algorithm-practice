



function maxProductSum(array, maxNumber = 3) {

  let totalSoFar = -9999999;

  if (array.length < 3) {
    return -9999999;
  }

  function recurse(currentIndex = 0 ,currentCount = 0, totalProd = ''){
  

    if(currentIndex === array.length && currentCount !== maxNumber){
      return -9999999;
    }

    if(currentCount === maxNumber){      
      totalSoFar = Math.max(totalProd, totalSoFar);
      return;
    } else {
      currentCount++;      
    }


    for(let i = currentIndex  ; i < array.length ; i++ ){
      recurse(i + 1 , currentCount,  totalProd + array[i]);
    }
  }

  recurse();
  return totalSoFar;
}

let testArray = ['a', 'b', 'c', 'd'];

console.log(maxProductSum(testArray));