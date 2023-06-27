export class Node {
  constructor(value) {
    this._value = value;
    this._next = null;
  }

  getValue() {
    return this._value;
  }

  getNext() {
    return this._next;
  }

  setNext(newNode) {
    this._next = newNode;
  }
}

export class Stack {
  constructor(head = null) {
    this._head = head;
    this._oldHead = null;
  }

  push(node) {
    let workingNode = node;
    workingNode.setNext(this._head);
    this._head = workingNode;
    return this._head;
  }

  pop() {
    if (this._head === null) {
      return "The stack is empty.";
    }
    const head = this._head;
    this._head = head.getNext();
    return this._head;
  }

  isTop() {
    if (this._head === null) {
      return "The stack is empty.";
    }
    return this._head.getValue();
  }

  isEmpty() {
    if (this._head === null) {
      return true;
    } else {
      return false;
    }
  }

  toString() {
    let result = "";
    while (this._head !== null) {
      const workingValue = this._head.getValue();
      result = result + workingValue + " -> ";
      this._head = this._head.getNext();
    }
    result = result + "null";
    return result;
  }
}
