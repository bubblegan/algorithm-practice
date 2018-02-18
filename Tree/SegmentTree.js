
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

    for (let i = 0; i < this.segmentTreeArray.length; i++) {
      this.segmentTreeArray[i] = this.maxValue;
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

    if(qHigh > this.segmentTreeArray.length - 1){
      return false;
    }
    let leftChildIndex = 2 * currentPos + 1;
    let rightChildIndex = 2 * currentPos + 2;

    //Total Overlap, query overlap tree
    if (qLow <= low && qHigh >= high) {
      return this.segmentTreeArray[currentPos];
    }

    //No Overlap
    if (qLow > high || qHigh < low) {
      return this.maxValue;
    }

    let mid = Math.floor((high + low) / 2);

    return Math.min(this.rangeMinQuery(qLow, qHigh, low, mid, leftChildIndex)
      , this.rangeMinQuery(qLow, qHigh, mid + 1, high, rightChildIndex));
  }
}

let testArray = [-1, 2, 4, 0];
let segmentTree = new SegmentTree(testArray);
console.log(segmentTree.rangeMinQuery(1,3));
console.log(segmentTree.rangeMinQuery(0,3));
console.log(segmentTree.rangeMinQuery(0,2));
