
class Stacks {
  constructor(maxSize = 10000) {
    this.array = new Array();   
    this.maxSize = maxSize;
    this.top = -1;
  }

  push(item){
    this.top++
    if(this.top < this.maxSize){
      this.array[this.top] = item; 
      return true;     
    }
  }

  pop(){    
    let item = this.array[this.top]
    this.top--;
    return item;
  }

  peek(){
    if(this.top >= 0)
      console.log(this.array[this.top]);
      return this.array[this.top];
  }
}

let stack = new Stacks();
stack.push('Gan');