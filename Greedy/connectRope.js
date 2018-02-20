const MinHeap = require('../Tree/BinaryHeap');

//put into heap and pop out the first 2 everytime to get min cost

let ropes = [4,3,2,6];

function minCostConnectRope(array){

  let heap = new MinHeap();
  heap.insertArray(array);

  let connectCost = 0;

  while(heap.size() > 2){

    let min1 = heap.remove();
    let min2 = heap.remove();

    connectCost += min1 + min2;
    heap.insert(min1 + min2);
  }

  return connectCost;
}

console.log(minCostConnectRope(ropes));