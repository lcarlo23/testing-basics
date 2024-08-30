import {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray,
} from './top_testing.js';

test('Capitalize string', () => {
    expect(capitalize('capitalized')).toBe('Capitalized');
});

test('Reverse string', () => {
    expect(reverseString('reversed')).toBe('desrever');
});

test('Calculator add', () => {
    expect(calculator.add(10, 2)).toBe(12);
});

test('Calculator subtract', () => {
    expect(calculator.subtract(10, 2)).toBe(8);
});

test('Calculator divide', () => {
    expect(calculator.divide(10, 2)).toBe(5);
});

test('Calculator multiply', () => {
    expect(calculator.multiply(10, 2)).toBe(20);
});

test('Caesar Cipher', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('Caesar Cipher lettercase', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});

test('Caesar Cipher punctuation', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

test('Object from array', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6,
    });
});
