//https://practice.geeksforgeeks.org/problems/leaders-in-an-array/0


function leaderArray(array){

  let maxStacks = [];

  maxStacks.push(-10000000);
  array.forEach(item =>{
    while(maxStacks[maxStacks.length - 1] < item){
      maxStacks.pop();
    }
    maxStacks.push(item);
  })

  return maxStacks;
}

let testArray = [16,17,4,3,5,2];
console.log(leaderArray(testArray));