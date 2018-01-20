//Worst O(n log n)

function MergeSort(array) {
  if (array.length == 1) {
    return array;
  }

  const middleIndex = Math.floor(array.length / 2);
  const leftArray = array.slice(0, middleIndex);
  const rightArray = array.slice(middleIndex);

  return Merge(MergeSort(leftArray), MergeSort(rightArray));
}

function Merge(leftArray, rightArray) {
  let mergedArray = []
  let leftIndex = 0;
  let rightIndex = 0;
  
  //Merge left array and right array until one of the array is complete
  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    if (leftArray[leftIndex] < rightArray[rightIndex]) {
      mergedArray.push(leftArray[leftIndex]);
      leftIndex++;
    } else if (rightArray[rightIndex] < leftArray[leftIndex]) {
      mergedArray.push(rightArray[rightIndex]);
      rightIndex++;
    }
  }

  //Merge the remaining for either left or right array
  return mergedArray.concat(leftArray.slice(leftIndex)).concat(rightArray.slice(rightIndex));
}


let testArray = [3,4,1,2,7,5,12,9,15,6];
console.log(MergeSort(testArray));