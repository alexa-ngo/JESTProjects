export class Node {
  constructor(value) {
    this._value = value;
    this._next = null;
  }

  getNext() {
    return this._next;
  }

  setNext(newNode) {
    this._next = newNode;
  }

  getValue() {
    return this._value;
  }
}

export class Queue {
  constructor(head = null) {
    this._head = head;
    this._lastNode = null;
  }

  enqueue(node) {
    let temp = this._head;
    if (this._head === null) {
      this._head = node;
      this._lastNode = node;
      return this._head;
    }
    while (temp.getNext() !== null) {
      temp = temp.getNext();
    }
    temp.setNext(node);
    this._lastNode = node;
    return this._head;
  }

  dequeue() {
    if (this._head === null) {
      return "The queue is now empty.";
    }
    this._head = this._head.getNext();
    return this._head;
  }

  firstValueInQueue() {
    if (this._head === null) {
      return "The queue is now empty.";
    }
    return this._head.getValue();
  }

  lastValueInQueue() {
    if (this._head === null) {
      return "The queue is now empty.";
    } else {
      return this._lastNode.getValue();
    }
  }

  isEmpty() {
    if (this._head === null) {
      return true;
    } else {
      return false;
    }
  }

  toString() {
    let result = "Values in the queue: ";
    while (this._head !== null) {
      let value = this._head.getValue();
      result = result + value + " -> ";
      this._head = this._head.getNext();
    }
    result = result + "null";
    return result;
  }
}
