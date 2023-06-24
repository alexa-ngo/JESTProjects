import Stack from "./stack";

it('push 1 value to the stack.', () => {
    const pushValue = new Stack();
    pushValue.push(2);
    const result = pushValue.top();
    expect(result).toBe(2);
})

it('push 2 values to the stack.', () => {
    const stack = new Stack();
    stack.push(4);
    stack.push(5);
    const result = stack.top();
    expect(result).toBe(5);
})

it('push 5 negative values to the stack, pop off three frames, and checks the top of the stack.', () => {
    const stack = new Stack();
    stack.push(-1);
    stack.push(-4);
    stack.push(-3);
    stack.push(-2);
    stack.push(-7);
    stack.pop();
    stack.pop();
    stack.pop();
    const result = stack.top();
    expect(result).toBe(-4);
})

it('push 5 strings to the stack, pop off 2 frames, and checks the top of the stack.', () => {
    const stack = new Stack();
    stack.push("hi");
    stack.push("everyone");
    stack.push("I");
    stack.push("hope");
    stack.push("you are doing well!");
    stack.pop();
    stack.pop();
    const result = stack.top();
    expect(result).toBe("I");
})

it('returns empty if there are no values in the stack.', () => {
    const stack = new Stack();
    const isEmptyResult = stack.isEmpty();
    expect(isEmptyResult).toBe(true);
})


it('returns not empty using the empty function.', () => {
    const stack = new Stack();
    stack.push(1);
    const isEmptyResult = stack.isEmpty();
    expect(isEmptyResult).toBe(false);
})

it('undefined if all the values are popped from the stack.', () => {
    const stack = new Stack();
    stack.push(-2);
    stack.push(-4);
    stack.push(-3);
    stack.push(-2);
    stack.push(-7);
    stack.pop();
    stack.pop();
    stack.pop();
    stack.pop();
    stack.pop();
    const result = stack.pop();
    expect(result).toBe(undefined);
})

it('prints the items in the array.', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    const isPrintResult = stack.print();
    expect(isPrintResult).toEqual("The values in the stack are: 1,2,3");
})


it('prints "" if the array is empty.', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.pop();
    stack.pop();
    stack.pop();
    const isPrintResult = stack.print();
    expect(isPrintResult).toEqual("The values in the stack are: ");
})