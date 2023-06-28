// The Node class constructs a node using the value input by the user.
// There is the value property and the next property.
// The next property points to the following node.

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

// The Queue class implements a linked list API.
// enqueue: adds a node to the end of the queue.
// dequeue: removes a node from the front of the queue.
// firstValueInQueue: returns the first value in the queue.
// lastValueInQueue: returns the last value in the queue.
// isEmpty: returns a boolean if the queue is empty.
// toString: returns a string of the values in the queue.

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
