function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString(string) {
    return string.split('').reverse().join('');
}

const calculator = {
    add(a, b) {
        return a + b;
    },

    subtract(a, b) {
        return a - b;
    },

    divide(a, b) {
        return a / b;
    },

    multiply(a, b) {
        return a * b;
    },
};

function caesarCipher(string, shift) {
    const letters = string.split('');
    const newLetters = letters.map((l) => {
        let newCharCode = l.charCodeAt(0) + shift;
        if (newCharCode > 122) {
            newCharCode -= 26;
        } else if (l.charCodeAt(0) < 67) {
            return l;
        }
        return String.fromCharCode(newCharCode);
    });

    return newLetters.join('');
}

function analyzeArray(array) {
    const total = array.reduce((acc, num) => acc + num, 0);
    const average = Math.floor(total / array.length);
    const min = Math.min(...array);
    const max = Math.max(...array);

    const result = {
        average: average,
        min: min,
        max: max,
        length: array.length,
    };

    return result;
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
