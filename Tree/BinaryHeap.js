// left child : i * 2
// right child : i * 2 + 1
// parent : i / 2 and ROUND DOWN

let MinHeap = function (array) {

  let heap = [null];

  this.insertArray = function (array) {
    for (let i = 0; i < array.length; i++) {
      this.insert(array[i]);
    }
  }

  this.insert = function (num) {
    heap.push(num);
    if (heap.length > 2) {
      let lastIndex = heap.length - 1;
      //if less den parents, swap up!
      while (heap[lastIndex] < heap[Math.floor(lastIndex / 2)]) {
        //ES6 swap
        [heap[Math.floor(lastIndex / 2)], heap[lastIndex]] = [heap[lastIndex], heap[Math.floor(lastIndex / 2)]];
        if (Math.floor(lastIndex / 2) > 1) {
          //move the index
          lastIndex = Math.floor(lastIndex / 2);
        } else {
          //finish it become the root
          break;
        };
      };
    };
  };


  this.remove = function () {
    let smallest = heap[1];
    if (heap.length > 2) {
      heap[1] = heap[heap.length - 1];
      heap.splice(heap.length - 1);
      if (heap.length == 3) {
        if (heap[1] > heap[2]) {
          [heap[1], heap[2]] = [heap[2], heap[1]];
        };
        return smallest;
      };
      let i = 1;
      let left = 2 * i;
      let right = 2 * i + 1;
      while (heap[i] >= heap[left] || heap[i] >= heap[right]) {
        if (heap[left] < heap[right]) {
          [heap[i], heap[left]] = [heap[left], heap[i]];
          i = 2 * i
        } else {
          [heap[i], heap[right]] = [heap[right], heap[i]];
          i = 2 * i + 1;
        };
        left = 2 * i;
        right = 2 * i + 1;
        if (heap[left] == undefined || heap[right] == undefined) {
          break;
        };
      };
    } else if (heap.length == 2) {
      heap.splice(1, 1);
    } else {
      return null;
    };
    return smallest;
  };

  // n log n heapsort
  this.sort = function () {
    let result = new Array();
    while (heap.length > 1) {
      result.push(this.remove());
    };
    return result;
  }

  this.minHeapify = function(array){
    let recurse = function(array, index, length) {
      while (true) {
        let left = index * 2 + 1;
        let rights = index * 2 + 2;
        let parent = index;

        if (left < length && array[left] < array[parent]) {
          parent = left;
        }

        if (right < length && array[right] < array[parent]) {
          parent = right;
        }

        if (parent == index) {
          break;
        }

        [array[parent], array[index]] = [array[index], array[parent]];
        index = parent;
      }
    }
  }

}

let testArray = [4, 2, 3, 9, 10];
let heap = new MinHeap();
heap.insertArray(testArray);

console.log(heap.sort());


