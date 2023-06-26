import Queue from "./queueAPI";

// Enqueue many types of values into the queue.
it("Enqueue one integer value to the queue.", () => {
  const workingQueque = new Queue();
  workingQueque.enqueue(1);
  expect(workingQueque).toEqual({ queue: [1] });
});

it("Enqueue three integer values to the queue.", () => {
  const workingQueque = new Queue();
  workingQueque.enqueue(1);
  workingQueque.enqueue(2);
  workingQueque.enqueue(3);
  expect(workingQueque).toEqual({ queue: [1, 2, 3] });
});

it("Enqueue three string values to the queue.", () => {
  const workingQueque = new Queue();
  workingQueque.enqueue("Hi");
  workingQueque.enqueue("everyone!");
  workingQueque.enqueue("It's a great day!");
  expect(workingQueque).toEqual({
    queue: ["Hi", "everyone!", "It's a great day!"],
  });
});

it("Enqueue a mix of 5 strings and integers to the queue.", () => {
  const workingQueque = new Queue();
  workingQueque.enqueue("There are");
  workingQueque.enqueue(60);
  workingQueque.enqueue("seconds");
  workingQueque.enqueue("!");
  workingQueque.enqueue(365);
  const result = workingQueque.printValuesInQueue();
  expect(result).toBe("There are -> 60 -> seconds -> ! -> 365 -> null");
});

// Dequeue a value from the front of the queue.
it('Dequeue the first value and returns a string of "null" when the queue is empty.', () => {
  const workingQueque = new Queue();
  workingQueque.dequeue();
  const result = workingQueque.printValuesInQueue();
  expect(result).toBe("null");
});

it("Dequeue the first value from the queue when it is an integer.", () => {
  const workingQueque = new Queue();
  workingQueque.enqueue(12);
  workingQueque.enqueue(14);
  workingQueque.enqueue(16);
  workingQueque.enqueue(18);
  const result1 = workingQueque.printValuesInQueue();
  expect(result1).toBe("12 -> 14 -> 16 -> 18 -> null");
  workingQueque.dequeue();
  const result2 = workingQueque.printValuesInQueue();
  expect(result2).toBe("14 -> 16 -> 18 -> null");
});

it("Dequeue the first value from the queue when it is a string.", () => {
  const workingQueque = new Queue();
  workingQueque.enqueue("there");
  workingQueque.enqueue("are");
  workingQueque.enqueue("birds");
  workingQueque.enqueue("outside");
  workingQueque.dequeue();
  const result1 = workingQueque.printValuesInQueue();
  expect(result1).toBe("are -> birds -> outside -> null");
});

// Returns undefined when using firstValueInQueue where the queue is empty.
it("Returns an empty queue when the queue is empty.", () => {
  const workingQueque = new Queue();
  const result = workingQueque.firstValueInQueue();
  expect(result).toEqual(undefined);
});

it("Returns the first value in the queue when it is an integer.", () => {
  const workingQueque = new Queue();
  workingQueque.enqueue(12);
  workingQueque.enqueue(14);
  workingQueque.enqueue(16);
  workingQueque.enqueue(18);
  const result = workingQueque.firstValueInQueue();
  expect(result).toEqual(12);
});

it("Returns the first value in the queue when it is a string.", () => {
  const workingQueque = new Queue();
  workingQueque.enqueue("Monday");
  workingQueque.enqueue("Tuesday");
  workingQueque.enqueue("Wednesday");
  workingQueque.enqueue("Thursday");
  const result = workingQueque.firstValueInQueue();
  expect(result).toEqual("Monday");
});

// Returns the last value in the queue using lastValueInQueue.
it("Returns an empty queue when the queue is empty.", () => {
  const workingQueque = new Queue();
  const result = workingQueque.lastValueInQueue();
  expect(result).toEqual(undefined);
});

it("Returns the last value in the queue when it is an integer.", () => {
  const workingQueque = new Queue();
  workingQueque.enqueue(12);
  workingQueque.enqueue(14);
  workingQueque.enqueue(16);
  workingQueque.enqueue(18);
  const result = workingQueque.lastValueInQueue();
  expect(result).toEqual(18);
});

it("Returns the last value in the queue when it is a string.", () => {
  const workingQueque = new Queue();
  workingQueque.enqueue("Monday");
  workingQueque.enqueue("Tuesday");
  workingQueque.enqueue("Wednesday");
  workingQueque.enqueue("Thursday");
  const result = workingQueque.lastValueInQueue();
  expect(result).toEqual("Thursday");
});

// Returns a boolean of whether the queue is empty.
it("Returns true when the queue is empty.", () => {
  const workingQueque = new Queue();
  const result = workingQueque.isEmpty();
  expect(result).toEqual(true);
});

it("Returns false when the queue is not empty.", () => {
  const workingQueque = new Queue();
  workingQueque.enqueue("Monday");
  workingQueque.enqueue("Tuesday");
  workingQueque.enqueue("Wednesday");
  workingQueque.enqueue("Thursday");
  const result = workingQueque.isEmpty();
  expect(result).toEqual(false);
});

// Prints all the value in the queue.
it('Prints the string of "null" when the queue is empty.', () => {
  const workingQueque = new Queue();
  const result = workingQueque.printValuesInQueue();
  expect(result).toEqual("null");
});

it("Prints the 5 mixed values in the queue.", () => {
  const workingQueque = new Queue();
  workingQueque.enqueue("The");
  workingQueque.enqueue(160);
  workingQueque.enqueue("students are here");
  workingQueque.enqueue("!");
  workingQueque.enqueue(365);
  const result = workingQueque.printValuesInQueue();
  expect(result).toBe("The -> 160 -> students are here -> ! -> 365 -> null");
});

it("Prints the 7 mixed values in the queue.", () => {
  const workingQueque = new Queue();
  workingQueque.enqueue(1);
  workingQueque.enqueue("two");
  workingQueque.enqueue(3);
  workingQueque.enqueue(4);
  workingQueque.enqueue("five");
  workingQueque.enqueue(6);
  workingQueque.enqueue(7);
  const result = workingQueque.printValuesInQueue();
  expect(result).toBe("1 -> two -> 3 -> 4 -> five -> 6 -> 7 -> null");
});
