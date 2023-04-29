class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  resetList() {
    this.head = null;
    this.tail = null;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.length) return;
    const removedItem = this.tail;
    if (this.length === 1) {
      this.resetList();
    } else {
      this.tail = removedItem.prev;
      this.tail.next = null;
      removedItem.prev = null;
    }
    this.length--;
    return removedItem;
  }

  shift() {
    if (!this.length) return;
    const removedItem = this.head;
    if (this.length === 1) {
      this.resetList();
    } else {
      this.head = removedItem.next;
      this.head.prev = null;
      removedItem.next = null;
    }
    this.length--;
    return removedItem;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    const isValidIndex = index >= 0 && index < this.length;
    if (!isValidIndex) return null;

    // loop from beginning
    const shouldStartFromLeft = index <= this.length / 2;
    let i, node;

    if (shouldStartFromLeft) {
      i = 0;
      node = this.head;
      while (i !== index) {
        node = node.next;
        i++;
      }
    } else {
      i = this.length - 1;
      node = this.tail;

      while (i !== index) {
        node = node.prev;
        i--;
      }
    }

    return node;
  }

  set(index, value) {
    const node = this.get(index);
    if (node) {
      node.val = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    const isValidIndex = index >= 0 && index <= this.length;
    if (!isValidIndex) return false;

    if (index === 0) {
      this.unshift(value);
    } else if (index === this.length) {
      this.push(value);
    } else {
      const newNode = new Node(value),
        next = this.get(index),
        prev = next.prev;

      (newNode.next = next), (newNode.prev = prev);
      (prev.next = newNode), (next.prev = newNode);
      this.length++;
    }

    return true;
  }

  remove(index) {
    const isValidIndex = index >= 0 && index < this.length;
    if (!isValidIndex) return;

    if (index === 0) return this.shift();
    else if (index === this.length - 1) return this.pop();
    else {
      const nodeToRemove = this.get(index),
        prev = nodeToRemove.prev,
        next = nodeToRemove.next;

      (prev.next = next), (next.prev = prev);
      (nodeToRemove.next = null), (nodeToRemove.prev = null);
      this.length--;
      return nodeToRemove;
    }
  }
}

const list = new DoublyLinkedList();
list.push(0).push(1).push(2).push(3).push(4).push(5).push(6);
