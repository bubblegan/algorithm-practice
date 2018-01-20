//Worst 0(n^2)

function SelectionSort(array) {

  //Outer Loop
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < array.length; j++) {
      if(array[j] < array[minIndex]){
        //swap element
        let temp = array[minIndex];
        array[minIndex] = array[j];
        array[j] = temp;
      }
    }
  }

  return array;
}


let testArray = [9,1,4,3,5,2,8];
console.log(SelectionSort(testArray));