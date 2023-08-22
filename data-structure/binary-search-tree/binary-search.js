class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newValue = new Node(value);
    if (!this.root) {
      this.root = newValue;
      return this;
    }

    let root = this.root;
    while (true) {
      if (value === root.value) return;
      else if (value > root.value) {
        // here will work on the right side of the root
        if (!root.right) {
          root.right = newValue;
          return this;
        }
        root = root.right;
      } else {
        // here will work on the left side of the root
        if (!root.left) {
          root.left = newValue;
          return this;
        }
        root = root.left;
      }
    }
  }

  find(value) {
    if (!this.root) return false;
    let current = this.root;
    while (true) {
      if (!current) return false;
      if (value === current.value) return current;
      if (value > current.value) {
        // search in the right side
        current = current.right;
      } else {
        // search the left side
        current = current.left;
      }
    }
  }

  BFS() {
    let current = this.root;
    const queue = [current],
      visited = [];
    while (queue.length) {
      // delete the first element from the queue
      current = queue.shift();
      // push the node to visited var and put it's right and left in the queue
      visited.push(current.value);
      const right = current.right;
      const left = current.left;
      if (left) queue.push(left);
      if (right) queue.push(right);
    }

    return visited;
  }
}

const tree = new BinaryTree();
/*
          10
      6       15
    3   8        20
*/
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
