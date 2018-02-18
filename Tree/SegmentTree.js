
class SegmentTree {
  constructor(array) {

    this.maxValue = 1000000000;//1 million
    this.array = array;

    let segmentTreeSize = 0;
    if ((Math.log(array.length) / Math.log(2)) % 1 === 0) {
      segmentTreeSize = array.length * 2 - 1;
    } else {
      segmentTreeSize = Math.pow(2, Math.ceil(Math.log(array.length) / Math.log(2))) * 2 - 1;
    }

    this.segmentTreeArray = new Array(segmentTreeSize);
    this.lazy = new Array(segmentTreeSize);

    for (let i = 0; i < this.segmentTreeArray.length; i++) {
      this.segmentTreeArray[i] = this.maxValue;
      this.lazy[i] = 0;
    }

    this.constructMinTree(array);
    console.log(this.segmentTreeArray);
  }

  constructMinTree(inputArray, low = 0, high = inputArray.length - 1, currentPos = 0) {

    let leftChildIndex = 2 * currentPos + 1;
    let rightChildIndex = 2 * currentPos + 2;

    if (high === low) {
      this.segmentTreeArray[currentPos] = inputArray[low];
      return;
    }
    let mid = Math.floor((high + low) / 2);

    //left Child
    this.constructMinTree(inputArray, low, mid, leftChildIndex);
    //right Child
    this.constructMinTree(inputArray, mid + 1, high, rightChildIndex);

    this.segmentTreeArray[currentPos] = Math.min(this.segmentTreeArray[leftChildIndex], this.segmentTreeArray[rightChildIndex]);
  }

  rangeMinQuery(qLow, qHigh, low = 0, high = this.array.length - 1, currentPos = 0) {

    if (qHigh > this.segmentTreeArray.length - 1) {
      return false;
    }

    //Total Overlap, query overlap tree
    if (qLow <= low && qHigh >= high) {
      return this.segmentTreeArray[currentPos];
    }

    //No Overlap
    if (qLow > high || qHigh < low) {
      return this.maxValue;
    }

    //Partial Overlap
    let mid = Math.floor((high + low) / 2);
    let leftChildIndex = 2 * currentPos + 1;
    let rightChildIndex = 2 * currentPos + 2;

    return Math.min(this.rangeMinQuery(qLow, qHigh, low, mid, leftChildIndex)
      , this.rangeMinQuery(qLow, qHigh, mid + 1, high, rightChildIndex));
  }

  updateSegmentTree(startRange, endRange, changes, low = 0, high = this.array.length - 1, currentPos = 0) {
    if (low > high) {
      return;
    }

    //update the segmentTree array if lazy is not 0;
    if (this.lazy[currentPos] != 0) {
      this.segmentTreeArray[currentPos] += this.lazy[currentPos];

      //update child
      if (low !== high) {
        this.lazy[2 * currentPos + 1] += this.lazy[currentPos];
        this.lazy[2 * currentPos + 2] += this.lazy[currentPos];
      }

      this.lazy[currentPos] = 0;
    }

    //no overlap
    if (startRange > high || endRange < low) {
      return;
    }

    //total overlap, update the lazy tree
    if (startRange <= low && endRange >= high) {
      this.segmentTreeArray[currentPos] += changes;
      if (low !== high) {
        this.lazy[2 * currentPos + 1] += changes;
        this.lazy[2 * currentPos + 2] += changes;
      }
      return;
    }

    let mid = (high + low) / 2;

    this.updateSegmentTree(startRange, endRange, changes, low, mid, currentPos * 2 + 1);
    this.updateSegmentTree(startRange, endRange, changes, mid + 1, high, currentPos * 2 + 2)
    this.segmentTreeArray[currentPos] = Math.min(this.segmentTreeArray[2 * currentPos + 1], this.segmentTreeArray[2 * currentPos + 2]);
  }

  rangeMinQueryLazy(qLow, qHigh, low = 0, high = this.array.length - 1, currentPos = 0) {

    if (qHigh > this.array.length - 1) {
      return false;
    }

    //update the segmentTree array if lazy is not 0;
    if (this.lazy[currentPos] != 0) {
      
      this.segmentTreeArray[currentPos] += this.lazy[currentPos];
      //update child
      if (low !== high) {
        this.lazy[2 * currentPos + 1] += this.lazy[currentPos];
        this.lazy[2 * currentPos + 2] += this.lazy[currentPos];
      }

      this.lazy[currentPos] = 0;
    }

    //Total Overlap, query overlap tree
    if (qLow <= low && qHigh >= high) {
      return this.segmentTreeArray[currentPos];
    }

    //No Overlap
    if (qLow > high || qHigh < low) {
      return this.maxValue;
    }

    //Partial Overlap
    let mid = Math.floor((high + low) / 2);
    let leftChildIndex = 2 * currentPos + 1;
    let rightChildIndex = 2 * currentPos + 2;

    return Math.min(this.rangeMinQueryLazy(qLow, qHigh, low, mid, leftChildIndex)
      , this.rangeMinQueryLazy(qLow, qHigh, mid + 1, high, rightChildIndex));
  }

  getSegmentTree() {
    return this.segmentTreeArray;
  }

  getOriginalArray() {
    return this.array;
  }

  getLazyTree() {
    return this.lazy;
  }

}

let testArray = [-1, 2, 4, 0];
let segmentTree = new SegmentTree(testArray);
segmentTree.updateSegmentTree(1, 3, -5);
console.log(segmentTree.rangeMinQueryLazy(0, 3));
console.log(segmentTree.getSegmentTree());