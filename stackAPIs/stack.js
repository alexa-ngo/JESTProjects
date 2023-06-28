export default class Stack {
  constructor() {
    this.items = [];
  }

  push(value){
    this.items.push(value);
  }

  pop() {
    const poppedItem = this.items.pop();
    return poppedItem;
  }

  top() {
    const topOfStack = this.items[this.items.length - 1];
    return topOfStack
  }

  isEmpty() {
    if (this.items.length === 0) {
      return true;
    }
    return false;
  }

  print(){
    return `The values in the stack are: ${this.items}`;
  }
}

