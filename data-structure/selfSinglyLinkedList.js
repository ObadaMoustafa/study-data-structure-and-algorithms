class Element {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  resetList() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  seedData() {
    this.push(0).push(1).push(2).push(3).push(4).push(5).push(6);
  }

  isEmptyHead() {
    return !this.head;
  }

  isInvalidIndex(index) {
    return isNaN(index) || index < 0 || index > this.length - 1;
  }

  get(index) {
    if (this.isInvalidIndex(index)) return;
    let current = this.head,
      counter = 0;
    while (counter < index) {
      current = current.next;
      counter++;
    }

    return current;
  }

  push(val) {
    const newNode = new Element(val);
    if (this.isEmptyHead()) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    // if there is no element to remove
    if (!this.head) return;

    let removedElement;
    // if this is the last element
    if (!this.head.next) {
      removedElement = this.head;
      this.resetList();
    } else {
      const newTailElement = this.get(this.length - 2);
      removedElement = newTailElement.next;

      newTailElement.next = null;
      this.tail = newTailElement;
      this.length--;
    }
    return removedElement;
  }

  unshift(val) {
    const newElement = new Element(val);
    if (this.isEmptyHead()) {
      this.head = newElement;
      this.tail = this.head;
    } else {
      newElement.next = this.head;
      this.head = newElement;
    }

    this.length++;
    return this;
  }

  shift() {
    if (this.isEmptyHead()) return;
    const removedElement = this.head;
    const newHead = this.head.next;
    this.head = newHead;
    this.length--;
    if (this.isEmptyHead()) this.resetList();

    return removedElement;
  }

  set(index, val) {
    const element = this.get(index);
    if (!element) return false;
    element.val = val;
    return true;
  }

  insert(index, val) {
    if (index === 0) {
      this.unshift(val);
      return true;
    }

    if (index === this.length) {
      this.push(val);
      return true;
    }

    if (this.isInvalidIndex(index)) return false;

    // insert from middle
    const newElement = new Element(val);
    const prev = this.get(index - 1);
    const shouldBeAfter = prev.next;
    newElement.next = shouldBeAfter;
    prev.next = newElement;
    this.length++;

    return true;
  }

  remove(index) {
    if (index === 0) {
      this.shift();
      return true;
    }

    if (index === this.length - 1) {
      this.pop();
      return true;
    }

    if (this.isInvalidIndex(index)) return false;

    // remove from middle
    const prev = this.get(index - 1);
    const shouldBeAfter = prev.next.next;

    prev.next = shouldBeAfter;
    this.length--;

    return true;
  }
}

const list = new SingleLinkedList();
list.seedData();
