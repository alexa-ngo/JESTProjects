import {sum, subtract, multiply, divide} from './calculator'

// Add function    
it('adds 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3);
});

it('adds 0 + 0 to equal 0', () => {
    expect(sum(0,0)).toBe(0);
});

it('adds -4 + -9 to equal -13', () => {
    expect(sum(-4, -9)).toBe(-13);
})

it('adds the letter "a" and "b" together to equal "ab" ', () => {
    expect(sum("a","b")).toBe("ab");
})

it('adds the symbol "$" and "zzzzz" together to equal "$zzzzz"', () => {
    expect(sum("$", "zzzzz")).toBe("$zzzzz");
})

// Subtract function
it('subtracts 4 - 3 to equal 1', () => {
    expect(subtract(4,3)).toBe(1);
})

it('uses 4 and subtracts negative 9 to equal 13', () => {
    expect(subtract(4,-9)).toBe(13);
})

it('subtracts 1 from 6 to equal -5', () => {
    expect(subtract(1,6)).toBe(-5);
})

it('"a" subtract from "z" is not equal to "az"', () => {
    expect(subtract("z", "az")).not.toBe("a");
})

// Multiply function
it('multiply 4 * 3 to equal 12', () => {
    expect(multiply(4,3)).toBe(12);
})

it('multiply -1 * -4 to equal 4', () => {
    expect(multiply(-1,-4)).toBe(4);
})

it('multiply -24 * 5 to equal -120', () => {
    expect(multiply(-24,5)).toBe(-120);
})

it('multiply 0 * 3 to equal 0', () => {
    expect(multiply(0,3)).toBe(0);
})

it('multiply "cat" * 3 to not equal "cat3"', () => {
    expect(multiply("cat",3)).not.toBe("cat3");
})

// Divide function
it('divide 12/3 to equal 4', () => {
    expect(divide(12,3)).toBe(4)
})

it('divide -1/3 to equal negative 1/3', () => {
    expect(divide(-1,3)).toBe(-1/3)
})

it('divide 0/12 to equal 0', () => {
    expect(divide(0,12)).toBe(0)
})

it('divide -12/120 to equal -1/10', () => {
    expect(divide(-12,120)).toBe(-1/10)
})
