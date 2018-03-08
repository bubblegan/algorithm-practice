
//https://www.geeksforgeeks.org/merging-intervals/

const START = 0;
const END = 1;

function sortInterval(interval){

  interval.sort((a,b) => {
    return a[START] - b[START];
  })
  return interval;
}

function  mergeInterval(interval){

  let sortedInterval = sortInterval(interval);
  let mergedInterval = [];
  mergedInterval.push(sortedInterval[0]);

  for(let index = 1; index < sortedInterval.length ; index++){
    
    //no overlap
    if(mergedInterval[mergedInterval.length - 1][END] < sortedInterval[index][START] ){
      mergedInterval.push(sortedInterval[index]);      
    } else if (mergedInterval[mergedInterval.length - 1][END] < sortedInterval[index][END]) {
      //Merge
      mergedInterval[mergedInterval.length - 1][END] =  sortedInterval[index][END];
    }
  }


  return mergedInterval;


}

let testInterval = [[6,8], [1,9], [2,4], [4,7]];
console.log(mergeInterval(testInterval));