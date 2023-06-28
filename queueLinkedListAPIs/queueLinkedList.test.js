import { Node, Queue } from "./queueLinkedList";

it("Makes 1 node.", () => {
  const node1 = new Node(1);
  expect(node1).toEqual({ _next: null, _value: 1 });
});

it("Enqueue 1 node into an empty queue.", () => {
  const node = new Node(3);
  const queue = new Queue();
  queue.enqueue(node);
  const result = queue.toString();
  expect(result).toEqual("Values in the queue: 3 -> null");
});

it("Enqueue 3 nodes.", () => {
  const node1 = new Node(3);
  const node2 = new Node(5);
  const node3 = new Node(7);
  const queue = new Queue();
  queue.enqueue(node1);
  queue.enqueue(node2);
  queue.enqueue(node3);
  const result = queue.toString();
  expect(result).toEqual("Values in the queue: 3 -> 5 -> 7 -> null");
});

it("Enqueue 5 nodes.", () => {
  const node1 = new Node(3);
  const node2 = new Node(5);
  const node3 = new Node(7);
  const node4 = new Node(11);
  const node5 = new Node(13);
  const queue = new Queue();
  queue.enqueue(node1);
  queue.enqueue(node2);
  queue.enqueue(node3);
  queue.enqueue(node4);
  queue.enqueue(node5);
  const result = queue.toString();
  expect(result).toEqual(
    "Values in the queue: 3 -> 5 -> 7 -> 11 -> 13 -> null"
  );
});

it("Dequeue 1 node from an empty queue.", () => {
  const queue = new Queue();
  const result = queue.toString();
  expect(result).toEqual("Values in the queue: null");
});

it("Dequeue 2 nodes.", () => {
  const node1 = new Node(3);
  const node2 = new Node(5);
  const node3 = new Node(7);
  const queue = new Queue();
  queue.enqueue(node1);
  queue.enqueue(node2);
  queue.enqueue(node3);
  queue.dequeue();
  queue.dequeue();
  const result = queue.toString();
  expect(result).toEqual("Values in the queue: 7 -> null");
});

it("Dequeue 4 nodes.", () => {
  const node1 = new Node(3);
  const node2 = new Node(5);
  const node3 = new Node(7);
  const node4 = new Node(11);
  const node5 = new Node(13);
  const queue = new Queue();
  queue.enqueue(node1);
  queue.enqueue(node2);
  queue.enqueue(node3);
  queue.enqueue(node4);
  queue.enqueue(node5);
  queue.dequeue();
  queue.dequeue();
  queue.dequeue();
  queue.dequeue();
  const result = queue.toString();
  expect(result).toEqual("Values in the queue: 13 -> null");
});

it("Dequeue 6 nodes.", () => {
  const node1 = new Node(3);
  const node2 = new Node(5);
  const node3 = new Node(7);
  const node4 = new Node(11);
  const node5 = new Node(13);
  const queue = new Queue();
  queue.enqueue(node1);
  queue.enqueue(node2);
  queue.enqueue(node3);
  queue.enqueue(node4);
  queue.enqueue(node5);
  queue.dequeue();
  queue.dequeue();
  queue.dequeue();
  queue.dequeue();
  queue.dequeue();
  queue.dequeue();
  const result = queue.toString();
  expect(result).toEqual("Values in the queue: null");
});

it("Checks the first value in a queue of an empty queue.", () => {
  const queue = new Queue();
  const result = queue.firstValueInQueue();
  expect(result).toEqual("The queue is now empty.");
});

it("Checks the first value in a queue of 3 nodes.", () => {
  const node1 = new Node(9);
  const node2 = new Node(14);
  const node3 = new Node(27);
  const queue = new Queue();
  queue.enqueue(node1);
  queue.enqueue(node2);
  queue.enqueue(node3);
  const result = queue.firstValueInQueue();
  expect(result).toEqual(9);
});

it("Checks the first value in a queue of 5 nodes.", () => {
  const node1 = new Node(3);
  const node2 = new Node(5);
  const node3 = new Node(7);
  const node4 = new Node(11);
  const node5 = new Node(13);
  const queue = new Queue();
  queue.enqueue(node1);
  queue.enqueue(node2);
  queue.enqueue(node3);
  queue.enqueue(node4);
  queue.enqueue(node5);
  const result = queue.firstValueInQueue();
  expect(result).toEqual(3);
});

it("Checks the last value in a queue of an empty queue.", () => {
  const queue = new Queue();
  const result = queue.lastValueInQueue();
  expect(result).toEqual("The queue is now empty.");
});

it("Checks the last value in a queue of 2 nodes.", () => {
  const node1 = new Node(9);
  const node2 = new Node(14);
  const queue = new Queue();
  queue.enqueue(node1);
  queue.enqueue(node2);
  const result = queue.lastValueInQueue();
  expect(result).toEqual(14);
});

it("Checks the last value in a queue of 4 nodes.", () => {
  const node1 = new Node(3);
  const node2 = new Node(5);
  const node3 = new Node(7);
  const node4 = new Node(11);
  const queue = new Queue();
  queue.enqueue(node1);
  queue.enqueue(node2);
  queue.enqueue(node3);
  queue.enqueue(node4);
  const result = queue.lastValueInQueue();
  expect(result).toEqual(11);
});

it("Checks the last value in a queue of 6 nodes.", () => {
  const node1 = new Node(32);
  const node2 = new Node(15);
  const node3 = new Node(72);
  const node4 = new Node(11);
  const node5 = new Node(13);
  const node6 = new Node(30);
  const queue = new Queue();
  queue.enqueue(node1);
  queue.enqueue(node2);
  queue.enqueue(node3);
  queue.enqueue(node4);
  queue.enqueue(node5);
  queue.enqueue(node6);
  const result = queue.lastValueInQueue();
  expect(result).toEqual(30);
});

it("isEmpty returns true if the queue is empty.", () => {
  const queue = new Queue();
  const result = queue.isEmpty();
  expect(result).toEqual(true);
});

it("isEmpty returns false if the queue is not empty.", () => {
  const queue = new Queue();
  const node1 = new Node(99);
  const node2 = new Node(129);
  queue.enqueue(node1);
  queue.enqueue(node2);
  const result = queue.isEmpty();
  expect(result).toEqual(false);
});

it("toString returns a string of null for an empty queue.", () => {
  const queue = new Queue();
  const result = queue.toString();
  expect(result).toEqual("Values in the queue: null");
});

it("toString returns a string with 3 nodes.", () => {
  const node1 = new Node(32);
  const node2 = new Node(15);
  const node3 = new Node(72);
  const queue = new Queue();
  queue.enqueue(node1);
  queue.enqueue(node2);
  queue.enqueue(node3);
  const result = queue.toString();
  expect(result).toEqual("Values in the queue: 32 -> 15 -> 72 -> null");
});

it("toString returns a string with 5 nodes.", () => {
  const node1 = new Node(32);
  const node2 = new Node(15);
  const node3 = new Node(72);
  const node4 = new Node(95);
  const node5 = new Node(172);
  const queue = new Queue();
  queue.enqueue(node1);
  queue.enqueue(node2);
  queue.enqueue(node3);
  queue.enqueue(node4);
  queue.enqueue(node5);
  const result = queue.toString();
  expect(result).toEqual(
    "Values in the queue: 32 -> 15 -> 72 -> 95 -> 172 -> null"
  );
});
