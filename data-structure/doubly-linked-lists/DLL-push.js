/* 

DLL push - Exercise
Implement the following on the DoublyLinkedList class

push

This function should accept a value add a node to the end of the DoublyLinkedList with the given value. It should return the DoublyLinkedList.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(val) {
    this.val = val;
    this.next = null;
  }

  push() {}
}
