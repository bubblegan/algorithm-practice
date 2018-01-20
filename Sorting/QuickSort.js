
function QuickSort(array, leftIndex, rightIndex) {

  if (leftIndex < rightIndex) {
    let partitionIndex = Partition(array, leftIndex, rightIndex);

    QuickSort(array, leftIndex, partitionIndex - 1);
    QuickSort(array, partitionIndex + 1, rightIndex);
  }

  return array;
}

function Partition(array, partitionIndex, pivotIndex) {
  
  //swapping process start from partition index
  for (let i = partitionIndex; i < array.length; i++) {
    if (array[i] < array[pivotIndex]) {
      let temp = array[i];
      array[i] = array[partitionIndex];
      array[partitionIndex] = temp;
      partitionIndex++;
    }
  }

  //swap the pivotIndex to middle
  let temp = array[pivotIndex];
  array[pivotIndex] = array[partitionIndex];
  array[partitionIndex] = temp;

  return partitionIndex;
}

//Use to random the pivot index, now is always picking right most
function RandomizePivot() {

}

let testArray = [3, 4, 1, 2, 7, 5, 12, 9, 15, 6];
console.log(QuickSort(testArray, 0, testArray.length - 1));