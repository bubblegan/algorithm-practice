
let sequence = 5
let memoizeTable = new Array(sequence);

function fibonacci(sequenceNumber) {


  if(memoizeTable[sequenceNumber] !== undefined){
    return memoizeTable[sequenceNumber];
  }
  memoizeTable[sequenceNumber] = fibonacci(sequenceNumber - 1) + fibonacci(sequenceNumber - 2);
  return memoizeTable[sequenceNumber];
}

memoizeTable[0] = 0;
memoizeTable[1] = 1;
console.log(fibonacci(sequence));