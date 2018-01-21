
class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST{
  constructor(){
    this.root = null;
  }

  add(data){
    const node = this.root;
    if(node === null){
      this.root = new Node(data)
      return;
    } else {
      const searchTree = function(node) {
        if( data < node.data) {
          if(node.left === null){
            node.left = new Node(data);
            return;
          }else{
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if(node.right === null){
            node.right = new Node(data);
            return;
          } else {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      }
      return searchTree(node);
    }
  }

  findMin(){
    let currentNode = this.root;
    while(currentNode.left !== null){
      currentNode = currentNode.left
    }
    return currentNode;
  }

  findMax(){
    let currentNode = this.root;
    while(currentNode.right !== null){
      currentNode = currentNode.right
    }
    return currentNode;
  }

  find(data){
    let currentNode = this.root;
    while(currentNode){
      if(data > currentNode.data){
        currentNode = currentNode.right;
      }
      if(data < currentNode.data){
        currentNode = currentNode.left;
      }
      if(data === currentNode.data){
        return data;
      }
    }
    return null;
  }

  //Remove will take the LEFTEST NODE of the RIGHT NODE. and remove the LEFTEST NODE
  remove(data) {
    const removeNode = function(node, data) {
      if (node == null) {
        return null;
      }
      if (data == node.data) {
        // node has no children 
        if (node.left == null && node.right == null) {
          return null;
        }
        // node has no left child 
        if (node.left == null) {
          return node.right;
        }
        // node has no right child 
        if (node.right == null) {
          return node.left;
        }
        // node has two children 
        var tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    }
    this.root = removeNode(this.root, data);
  }

  isBalanced(){
    return (this.findMinHeight() >= this.findMaxHeight() - 1);
  }

  findMinHeight(node = this.root){
    if(node === null){
      return -1;
    }

    let leftNodeCount = this.findMinHeight(node.left);
    let rightNodeCount = this.findMinHeight(node.right);

    if(leftNodeCount < rightNodeCount){
      return leftNodeCount + 1;
    } else {
      return rightNodeCount + 1;
    }
  }

  findMaxHeight(node = this.root){
    if(node === null){
      return -1;
    }
    let leftNodeCount = this.findMaxHeight(node.left);
    let rightNodeCount = this.findMaxHeight(node.right);

    if(leftNodeCount > rightNodeCount){
      return leftNodeCount + 1;
    } else {
      return rightNodeCount + 1;
    }
  }

  //DFS
  inOrder(){
    if(this.root === null){
      return null;
    } else {
      let results = []
      function tranverseInOrder(node){
        node.left && tranverseInOrder(node.left);
        results.push(node.data);
        node.right && tranverseInOrder(node.right);
      }
      tranverseInOrder(this.root);
      return results;
    }
  }

  preOrder(){
    if(this.root === null){
      return null;
    } else {
      let results = []
      function tranverseInOrder(node){
        results.push(node.data);        
        node.left && tranverseInOrder(node.left);
        node.right && tranverseInOrder(node.right);
      }
      tranverseInOrder(this.root);
      return results;
    }
  }

  postOrder(){
    if(this.root === null){
      return null;
    } else {
      let results = []
      function tranverseInOrder(node){
        node.left && tranverseInOrder(node.left);
        node.right && tranverseInOrder(node.right);
        results.push(node.data);                
      }
      tranverseInOrder(this.root);
      return results;
    }
  }

  //BFS
  levelOrder(){
    let results = [];
    let queue = [];
    if(this.root != null){
      queue.push(this.root);
      while(queue.length > 0){
        let node = queue.shift();
        results.push(node.data);
        if(node.left !== null){
          queue.push(node.left);
        }
        if(node.right !== null){
          queue.push(node.right);
        }
      }
      return results;
    } else {
      return null;
    }
  }


}

let bstTest = new BST();
bstTest.add(5);
bstTest.add(2);
bstTest.add(3);
bstTest.add(4);
bstTest.add(12);
bstTest.add(8);
console.log(bstTest.find(4));
console.log('min height : ' + bstTest.findMinHeight());
console.log('max height : ' + bstTest.findMaxHeight());
console.log('DFS : ' + bstTest.inOrder());
console.log('BFS : ' + bstTest.levelOrder());


