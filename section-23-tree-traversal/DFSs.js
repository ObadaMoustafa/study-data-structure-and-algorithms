class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    if (this.root === null) {
      this.root = new Node(value);
      return this;
    } else {
      var current = this.root;
      while (true) {
        if (value < current.value) {
          if (current.left === null) {
            current.left = new Node(value);
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = new Node(value);
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
  DFSPreOrder() {
    let currentNode = this.root,
      visited = [];

    function DFS(node) {
      visited.push(node.value);
      if (node.left) DFS(node.left);
      if (node.right) DFS(node.right);
    }

    DFS(currentNode);
    return visited;
  }
  DFSInOrder() {
    let currentNode = this.root,
      visited = [];

    function DFS(node) {
      if (node.left) DFS(node.left);
      visited.push(node.value);
      if (node.right) DFS(node.right);
    }

    DFS(currentNode);
    return visited;
  }
  DFSPostOrder() {
    let currentNode = this.root,
      visited = [];

    function DFS(node) {
      if (node.left) DFS(node.left);
      if (node.right) DFS(node.right);
      visited.push(node.value);
    }

    DFS(currentNode);
    return visited;
  }
}
var binarySearchTree = new BinarySearchTree();
binarySearchTree
  .insert(15)
  .insert(20)
  .insert(10)
  .insert(12)
  .insert(1)
  .insert(5)
  .insert(50);
console.log(binarySearchTree.DFSPreOrder()); // [15, 10, 1, 5, 12, 20, 50]
console.log(binarySearchTree.DFSInOrder()); // [1, 5, 10, 12, 15, 20, 50]
console.log(binarySearchTree.DFSPostOrder()); // [5, 1, 12, 10, 50, 20, 15]
