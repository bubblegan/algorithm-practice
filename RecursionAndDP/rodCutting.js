


let rods = [3 , 4, 4, 5, 8 , 10];

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

console.log(rodCutting(6));