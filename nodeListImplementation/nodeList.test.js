import { LinkedList, Node } from "./nodeList";

it("adds a node to a list.", () => {
  const node = new Node(1);
  const list = new LinkedList(node);

  const result = list.plainList(node);

  expect(result).toEqual([1]);
});

it("adds a node to an empty linked list.", () => {
  const node = new Node(1);
  const list = new LinkedList();
  list.add(node);

  const result = list.plainList(node);
  expect(result).toEqual([1]);
});

it("adds a new node to to a list.", () => {
  const node1 = new Node(1);
  const node2 = new Node(2);
  node1.setNext(node2);

  const list = new LinkedList(node1);
  const result = list.plainList(node1);
  expect(result).toEqual([1, 2]);

  list.add(3);
  const result2 = list.plainList(node1);
  expect(result2).toEqual([1, 2, 3]);
});

it("adds five random integers to a list.", () => {
  const node1 = new Node(-4);
  const node2 = new Node(9);
  const node3 = new Node(11);
  const node4 = new Node(-2);
  const node5 = new Node(11);
  node1.setNext(node2);
  node2.setNext(node3);
  node3.setNext(node4);
  node4.setNext(node5);

  const list = new LinkedList(node1);
  const result = list.plainList(node1);
  expect(result).toEqual([-4, 9, 11, -2, 11]);
});

it("adds five random strings and integers to a list.", () => {
  const node1 = new Node("hi");
  const node2 = new Node("everyone");
  const node3 = new Node(3);
  const node4 = new Node(-2);
  const node5 = new Node("day");
  node1.setNext(node2);
  node2.setNext(node3);
  node3.setNext(node4);
  node4.setNext(node5);

  const list = new LinkedList(node1);
  const result = list.plainList(node1);
  expect(result).toEqual(["hi", "everyone", 3, -2, "day"]);
});

it("removes the first value. If the number is not found, the original list is returned.", () => {
  const node1 = new Node(1);
  const node2 = new Node(2);
  const node3 = new Node(3);
  const node4 = new Node(4);
  const node5 = new Node(5);
  node1.setNext(node2);
  node2.setNext(node3);
  node3.setNext(node4);
  node4.setNext(node5);

  const list = new LinkedList(node1);
  const resultAfterRemove = list.remove(1);
  const result2 = list.plainList(resultAfterRemove);
  expect(result2).toEqual([2, 3, 4, 5]);
});

it("removes the second value.", () => {
  const node1 = new Node(1);
  const node2 = new Node(2);
  const node3 = new Node(3);
  const node4 = new Node(4);
  const node5 = new Node(5);
  node1.setNext(node2);
  node2.setNext(node3);
  node3.setNext(node4);
  node4.setNext(node5);

  const list = new LinkedList(node1);
  list.remove(2);
  const result = list.plainList(node1);
  expect(result).toEqual([1, 3, 4, 5]);
});

it("removes an a value that does not exist. The original list is returned.", () => {
  const node1 = new Node(1);
  const node2 = new Node(2);
  const node3 = new Node(3);
  const node4 = new Node(4);
  const node5 = new Node(5);
  node1.setNext(node2);
  node2.setNext(node3);
  node3.setNext(node4);
  node4.setNext(node5);

  const list = new LinkedList(node1);
  list.remove(9);
  const result = list.plainList(node1);
  expect(result).toEqual([1, 2, 3, 4, 5]);
});

it("removes the 4th node of the linked list containing 5 nodes.", () => {
  const node1 = new Node(1);
  const node2 = new Node(2);
  const node3 = new Node(3);
  const node4 = new Node(4);
  const node5 = new Node(5);
  node1.setNext(node2);
  node2.setNext(node3);
  node3.setNext(node4);
  node4.setNext(node5);

  const list = new LinkedList(node1);
  list.remove(4);
  const result2 = list.plainList(node1);
  expect(result2).toEqual([1, 2, 3, 5]);
});

it("removes the 5th node of the linked list containing 5 nodes.", () => {
  const node1 = new Node(1);
  const node2 = new Node(2);
  const node3 = new Node(3);
  const node4 = new Node(4);
  const node5 = new Node(5);
  node1.setNext(node2);
  node2.setNext(node3);
  node3.setNext(node4);
  node4.setNext(node5);

  const list = new LinkedList(node1);
  list.remove(5);
  const result2 = list.plainList(node1);
  expect(result2).toEqual([1, 2, 3, 4]);
});

it("contains the number 11 to the linked list.", () => {
  const node1 = new Node(-4);
  const node2 = new Node(9);
  const node3 = new Node(11);
  const node4 = new Node(-2);
  const node5 = new Node(11);
  node1.setNext(node2);
  node2.setNext(node3);
  node3.setNext(node4);
  node4.setNext(node5);

  const list = new LinkedList(node1);
  const result = list.contains(11);
  expect(result).toBe(true);
});

it("does not contain the number 99 in the linked list.", () => {
  const node1 = new Node(-4);
  const node2 = new Node(9);
  const node3 = new Node(11);
  const node4 = new Node(-2);
  const node5 = new Node(11);
  node1.setNext(node2);
  node2.setNext(node3);
  node3.setNext(node4);
  node4.setNext(node5);

  const list = new LinkedList(node1);
  const result = list.contains(99);
  expect(result).toBe(false);
});

it("contains the string `hello` to the linked list.", () => {
  const node1 = new Node(-4);
  const node2 = new Node(9);
  const node3 = new Node("hello");
  const node4 = new Node(-2);
  const node5 = new Node(11);
  node1.setNext(node2);
  node2.setNext(node3);
  node3.setNext(node4);
  node4.setNext(node5);

  const list = new LinkedList(node1);
  const result = list.contains("hello");
  expect(result).toBe(true);
});

it("reverses the 5 nodes in the linked list.", () => {
  const node1 = new Node(-4);
  const node2 = new Node(9);
  const node3 = new Node(14);
  const node4 = new Node(-2);
  const node5 = new Node(11);
  node1.setNext(node2);
  node2.setNext(node3);
  node3.setNext(node4);
  node4.setNext(node5);

  const list = new LinkedList(node1);
  const result = list.reverse(node1);
  expect(result.getValue()).toEqual(11);
  expect(result.getNext().getNext().getValue()).toBe(14);
});

it("reverses the 8 nodes in the linked list.", () => {
  const node1 = new Node(-4);
  const node2 = new Node(9);
  const node3 = new Node(14);
  const node4 = new Node(-2);
  const node5 = new Node(11);
  const node6 = new Node(14);
  const node7 = new Node(-2);
  const node8 = new Node(13);
  node1.setNext(node2);
  node2.setNext(node3);
  node3.setNext(node4);
  node4.setNext(node5);
  node5.setNext(node6);
  node6.setNext(node7);
  node7.setNext(node8);

  const list = new LinkedList(node1);
  const result = list.reverse(node1);
  expect(result.getValue()).toEqual(13);
  expect(result.getNext().getNext().getValue()).toBe(14);
});
