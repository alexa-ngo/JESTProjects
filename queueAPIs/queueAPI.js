export default class Queue {
  constructor() {
    this.queue = [];
  }

  // Pushes a value into the queue.
  enqueue(value) {
    this.queue.push(value);
  }

  // Removes the first value from the queue.
  dequeue() {
    this.queue.shift();
    return this.queue;
  }

  // Returns the first value in the queue.
  firstValueInQueue() {
    return this.queue[0];
  }

  // Returns the last value in the queue.
  lastValueInQueue() {
    const queueLength = this.queue.length - 1;
    return this.queue[queueLength];
  }

  // Returns a boolean of whether the queue is empty.
  isEmpty() {
    if (this.queue.length === 0) {
      return true;
    }
    return false;
  }

  // Prints all the values in the queue.
  printValuesInQueue() {
    let result = "";
    for (let i = 0; i < this.queue.length; i++) {
      result = result + `${this.queue[i]} -> `;
    }
    result = result + "null";
    return result;
  }
}
