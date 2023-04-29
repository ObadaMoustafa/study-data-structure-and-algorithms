class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.size) {
      (this.first = newNode), (this.last = newNode);
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    return ++this.size;
  }

  shift() {
    if (!this.size) return null;
    const removedItem = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = removedItem.next;
    }

    this.size--, (removedItem.next = null);
    return removedItem.val;
  }
}

const queue = new Queue();
queue.push(0);
queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
queue.push(5);
