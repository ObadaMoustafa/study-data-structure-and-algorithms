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
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    var current = this.root;
    while (true) {
      if (value === current.value) return;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
  find(value) {
    if (this.root === null) return false;
    var current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return;
    return current;
  }
  contains(value) {
    if (this.root === null) return false;
    var current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
  BFS() {
    if (!this.root) return;
    let currentNode = this.root,
      queue = [currentNode],
      visited = [];

    while (queue.length) {
      currentNode = queue[0];
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
      visited.push(queue.shift().value);
    }

    return visited;
  }
  DFSPreOrder() {
    let currentNode = this.root;
    if (!currentNode) return false;
    const visited = [];

    function checkValues(node) {
      visited.push(node.value);
      if (node.left) checkValues(node.left);
      if (node.right) checkValues(node.right);
    }

    checkValues(currentNode);
    return visited;
  }

  DFSPostOrder() {
    let currentNode = this.root;
    if (!currentNode) return false;
    const visited = [];

    function checkValues(node) {
      if (node.left) checkValues(node.left);
      if (node.right) checkValues(node.right);
      visited.push(node.value);
    }

    checkValues(currentNode);
    return visited;
  }

  DFSInOrder() {
    let currentNode = this.root;
    if (!currentNode) return false;
    const visited = [];

    function checkValues(node) {
      if (node.left) checkValues(node.left);
      visited.push(node.value);
      if (node.right) checkValues(node.right);
    }

    checkValues(currentNode);
    return visited;
  }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.DFSInOrder());
