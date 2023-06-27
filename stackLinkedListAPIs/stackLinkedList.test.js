import { Node, Stack } from "./stackLinkedList";

it("Makes 1 node.", () => {
  const node1 = new Node(1);
  expect(node1).toEqual({ _next: null, _value: 1 });
});

it("Makes 1 stack.", () => {
  const stack = new Stack();
  expect(stack).toEqual({ _head: null, _oldHead: null });
});

it("Pushes 1 node containing undefined as a value.", () => {
  const node1 = new Node(undefined);
  const stack = new Stack();
  stack.push(node1);
  const result = stack.toString();
  expect(result).toEqual("undefined -> null");
});

it("Pushes 1 node containing a string.", () => {
  const node1 = new Node("mountain");
  const stack = new Stack();
  stack.push(node1);
  const result = stack.toString();
  expect(result).toEqual("mountain -> null");
});

it("Pushes 1 node containing integer as a value.", () => {
  const node1 = new Node(4);
  const stack = new Stack();
  stack.push(node1);
  const result = stack.toString();
  expect(result).toEqual("4 -> null");
});

it("Pushes 4 nodes containing integer and string values.", () => {
  const node1 = new Node("dogs");
  const node2 = new Node(2);
  const node3 = new Node("dragons");
  const node4 = new Node(4);
  const stack = new Stack();
  stack.push(node1);
  stack.push(node2);
  stack.push(node3);
  stack.push(node4);
  const result = stack.toString();
  expect(result).toEqual("4 -> dragons -> 2 -> dogs -> null");
});

it("Pops 1 node from the stack of 1 node.", () => {
  const node1 = new Node(1);
  const node2 = new Node(2);
  const node3 = new Node(3);
  const node4 = new Node(4);
  const stack = new Stack();
  stack.push(node1);
  stack.push(node2);
  stack.push(node3);
  stack.push(node4);
  stack.pop();
  const result = stack.toString();
  expect(result).toEqual("3 -> 2 -> 1 -> null");
});

it("Pops 5 nodes from the stack of 6 nodes.", () => {
  const node1 = new Node(1);
  const node2 = new Node(2);
  const node3 = new Node(3);
  const node4 = new Node(4);
  const node5 = new Node(5);
  const node6 = new Node(6);
  const stack = new Stack();
  stack.push(node1);
  stack.push(node2);
  stack.push(node3);
  stack.push(node4);
  stack.push(node5);
  stack.push(node6);
  stack.pop();
  stack.pop();
  stack.pop();
  stack.pop();
  stack.pop();
  const result = stack.toString();
  expect(result).toEqual("1 -> null");
});

it("Pops 7 nodes from the stack of 6 nodes. A message of `The stack is empty` is returned.", () => {
  const node1 = new Node(1);
  const node2 = new Node(2);
  const node3 = new Node(3);
  const node4 = new Node(4);
  const node5 = new Node(5);
  const node6 = new Node(6);
  const stack = new Stack();
  stack.push(node1);
  stack.push(node2);
  stack.push(node3);
  stack.push(node4);
  stack.push(node5);
  stack.push(node6);
  stack.pop();
  stack.pop();
  stack.pop();
  stack.pop();
  stack.pop();
  stack.pop();
  const result = stack.pop();
  expect(result).toEqual("The stack is empty.");
});

it("Checks the top of the stack of 1 node.", () => {
  const node1 = new Node(1);
  const stack = new Stack();
  stack.push(node1);
  const result = stack.isTop();
  expect(result).toEqual(1);
});

it("Checks the top of the stack of 5 nodes.", () => {
  const node1 = new Node(1);
  const node2 = new Node(2);
  const node3 = new Node(3);
  const node4 = new Node(4);
  const node5 = new Node(5);
  const stack = new Stack();
  stack.push(node1);
  stack.push(node2);
  stack.push(node3);
  stack.push(node4);
  stack.push(node5);
  const result = stack.isTop();
  expect(result).toEqual(5);
});

it("Checks the top of the stack when there are no nodes.", () => {
  const stack = new Stack();
  const result = stack.isTop();
  expect(result).toEqual("The stack is empty.");
});

it("Returns true if the stack is empty.", () => {
  const stack = new Stack();
  const result = stack.isEmpty();
  expect(result).toEqual(true);
});

it("Returns false if the stack is not empty.", () => {
  const node1 = new Node(1);
  const node2 = new Node(2);
  const node3 = new Node(3);
  const node4 = new Node(4);
  const node5 = new Node(5);
  const stack = new Stack();
  stack.push(node1);
  stack.push(node2);
  stack.push(node3);
  stack.push(node4);
  stack.push(node5);
  const result = stack.isEmpty();
  expect(result).toEqual(false);
});

it("Returns null when the stack is empty.", () => {
  const stack = new Stack();
  const result = stack.toString();
  expect(result).toEqual("null");
});

it("Returns a string when the stack has 1 node.", () => {
  const node1 = new Node(1);
  const stack = new Stack();
  stack.push(node1);
  const result = stack.toString();
  expect(result).toEqual("1 -> null");
});

it("Returns a string when the stack has 3 nodes.", () => {
  const node1 = new Node(1);
  const node2 = new Node(2);
  const node3 = new Node(3);
  const stack = new Stack();
  stack.push(node1);
  stack.push(node2);
  stack.push(node3);
  const result = stack.toString();
  expect(result).toEqual("3 -> 2 -> 1 -> null");
});

it("Returns a string when the stack has 5 nodes.", () => {
  const node1 = new Node(1);
  const node2 = new Node(2);
  const node3 = new Node(3);
  const node4 = new Node(4);
  const node5 = new Node(5);
  const stack = new Stack();
  stack.push(node1);
  stack.push(node2);
  stack.push(node3);
  stack.push(node4);
  stack.push(node5);
  const result = stack.toString();
  expect(result).toEqual("5 -> 4 -> 3 -> 2 -> 1 -> null");
});
