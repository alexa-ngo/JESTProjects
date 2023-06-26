// The Node class contstructs a node to be used in the linked list class.
// Each node connects together using the ._next attritbute.
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

  setNext(newNext) {
    this._next = newNext;
  }
}

// The LinkedList class starts off with a head initialized as null.
// By using the add method, we can connect each node together.
// The LinkedList class has the add, contains, toPlainlist, remove, and reverse methods.

export class LinkedList {
  constructor(head = null) {
    this._head = head;
  }

  // Adds a node to the end of the linked list.
  add(value) {
    const newNode = new Node(value);
    let temp = this._head;

    if (temp === null) {
      temp = newNode;
      return temp;
    }

    while (temp.getNext() !== null) {
      temp = temp.getNext();
    }
    temp.setNext(newNode);
    return temp;
  }

  // Returns a boolean of true if the value is found in the linked list.
  // If not, a boolean of false is returned.
  contains(value) {
    let temp = this._head;

    while (temp !== null) {
      if (temp.getValue() === value) {
        return true;
      }
      temp = temp.getNext();
    }
    return false;
  }

  // Returns an array of the values of the linked list.
  toPlainList(node1) {
    let temp = node1;
    const result = [];

    while (temp !== null) {
      result.push(temp.getValue());
      temp = temp.getNext();
    }
    return result;
  }

  // Removes the node containing the value.
  // If the value is not found, the original linked list is returned.
  remove(removeVal) {
    let temp = this._head;
    let node1 = this._head;

    if (node1.getValue() === removeVal) {
      node1 = node1.getNext();
      return node1;
    }
    while (temp.getNext() !== null) {
      if (temp.getNext().getValue() === removeVal) {
        temp.setNext(temp.getNext().getNext());
        return node1;
      }
      temp.setNext(temp.getNext());

      for (let temp = node1; temp.getNext() !== null; temp = temp.getNext()) {
        const nextNode = temp.getNext();
        if (nextNode.getValue() === removeVal) {
          temp.setNext(nextNode.getNext());
          return node1;
        }
      }
      return node1;
    }
  }

  // Returns the reverse list of the linked list.
  reverse(node1) {
    const oldHead = node1;
    let p1 = node1;
    let p2 = p1.getNext();
    let p3 = p2;

    while (p2 !== null) {
      p3 = p2.getNext();
      p2.setNext(p1);
      p1 = p2;
      p2 = p3;
    }
    oldHead.setNext(null);
    return p1;
  }
}
