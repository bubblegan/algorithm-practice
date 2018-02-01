


let rods = [1 , 2 , 5];

function rodCutting(rodLength){

  if(rods.length == 0){
    return 0;
  }  
  
  let maxValue =0;
  for(let index = 0; index < rodLength ; index++){
    maxValue = Math.max(maxValue, rodCutting(index) + rods[rodLength - index - 1]);
  } 
  return maxValue;
}

let testRods = [1 , 2 , 5];
console.log(rodCutting(3));