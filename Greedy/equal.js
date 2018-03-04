
//https://www.hackerrank.com/challenges/equal/problem


function getDifferenceHighLow(array){

  let highestNumber = -999999;
  let lowestNumber = 999999;

  array.forEach(element => {
    
    if(element >= highestNumber){
      highestNumber = element;
    }

    if(element <= lowestNumber){
      lowestNumber = element;
    }
  });

  return highestNumber - lowestNumber;
}

function getHighestIndex(array){
  let highestNumber = -999999;
  let highestIndex = 0;
  for(let i = 0 ; i < array.length; i ++){
       if(array[i] >= highestNumber){
          highestNumber = array[i];   
          highestIndex = i;    
       }
  }

  return highestIndex;
}


function equalizer(array){

  let lastIndex = -1;
  let opsRecord = [];

  while(getDifferenceHighLow(array) !== 0){

    let highestIndex = getHighestIndex(array); 
    let highestDifference = getDifferenceHighLow(array);

    //Increase other den the highest
    for(let i = 0 ; i < array.length; i ++){
       if(i !== highestIndex){
          array[i] += highestDifference;         
       }
    }
    
    //Increase the couter
    opsRecord.push(highestDifference);
  }
  return opsRecord;
}

let testArray = [2,2,3,7,1,2,3,7,9,9];
console.log(equalizer(testArray));