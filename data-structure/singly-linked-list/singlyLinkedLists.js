class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class singlyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  pushSomeData() {
    this.push(0);
    this.push(1);
    this.push(2);
    this.push(3);
    this.push(4);
    this.push(5);
    this.push(6);
    this.push(7);
  }

  reset() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    const firstValue = this.length === 0;
    if (firstValue) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  findNewTail() {
    let current = this.head;
    for (let i = 1; i < this.length - 1; i++) {
      current = current.next;
    }
    return current;
  }

  pop() {
    if (!this.length) return;
    // in this line newTail is the new tail with it's next property.
    const newTail = this.findNewTail();

    // this is the element will be removed => next or the last.
    const removedItem = newTail.next || this.head;

    if (!newTail.next) {
      // case of last item.
      this.head = null;
      this.tail = null;
    } else {
      // set new tail.
      newTail.next = null;
      this.tail = newTail;
    }
    this.length--;
    return removedItem;
  }

  shift() {
    if (!this.head) return;
    const elementNeedToRemoved = this.head;
    if (!elementNeedToRemoved.next) {
      // last item case.
      this.tail = null;
    }

    this.head = elementNeedToRemoved.next;
    this.length--;
    return elementNeedToRemoved;
  }

  unshift(val) {
    const newNode = new Node(val);
    const firstValue = !this.head;
    if (firstValue) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    const isValidIndex = index < this.length && index >= 0;
    if (!isValidIndex) return;
    let element = this.head;
    for (let counter = 0; counter !== index; counter++) {
      element = element.next;
    }
    return element;
  }

  set(index, val) {
    const element = this.get(index);
    if (element) {
      element.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index > this.length || index < 0) return false;
    if (index === 0) return !!this.unshift(val);

    if (index === this.length) return !!this.push(val);

    // insert at middle
    const element = this.get(index - 1);
    const newNode = new Node(val);
    const nextElement = element.next;
    newNode.next = nextElement;
    element.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index >= this.length || index < 0) return;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    // remove from middle
    const prev = this.get(index - 1);
    const elementToBeRemoved = prev.next;
    prev.next = elementToBeRemoved.next;
    this.length--;
    return elementToBeRemoved;
  }

  reverse() {
    // save head and original length
    let current = this.head;
    const length = this.length;

    // this function sets the head and tail to null and length to zero
    this.reset();
    let i = 0;
    while (i < length) {
      const currentVal = current.val;
      this.unshift(currentVal);
      console.log("current val", currentVal);
      console.log("list", this);
      current = current.next;
      i++;
    }

    return this;
  }
}

const list = new singlyLinkedList();
