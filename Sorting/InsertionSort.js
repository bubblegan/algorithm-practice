//Worst 0(n^2)

function InsertionSort(array){

  for(let i = 0; i < array.length ; i++){
    let currentValue = array[i];
    let j = i - 1;

    //This will push the array, if the previous value more then the current value
    while(j >= 0  && array[j] > currentValue){
      array[j + 1] = array[j];
      j--;
    }
    
    //Plus one cause will off by 1, insert it into right place
    array[j + 1] = currentValue;

  }

  return array;
} 

let testArray = [3,4,1,2,7,5,12,9];
console.log(InsertionSort(testArray));