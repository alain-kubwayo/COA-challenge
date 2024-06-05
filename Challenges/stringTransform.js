/*
Function to transform a string:

Given a string, transform it based on the following rules:
● If the length of the string is divisible by 3, reverse the entire string.
● If the length of the string is divisible by 5, replace each character with its ASCII code.
● If the length of the string is divisible by both 3 and 5 (i.e., divisible by 15), perform
both operations in the order specified above.
*/

function transformString(s) {
    const length = s.length;
    if (length % 15 === 0) {
        // reverse the string and replace each character with its corresponding ASCII code
        const reversedString = s.split('').reverse().join('');
        return reversedString.split('').map(char => char.charCodeAt(0)).join(' ');
    } else if (length % 5 === 0) {
        // replace each character with its corresponding ASCII code
        return s.split('').map(char => char.charCodeAt(0)).join(' ');
    } else if (length % 3 === 0) {
        // reverse the string
        return s.split('').reverse().join('');
    } else {
        return s;
    }
}

// Test with given strings
console.log(transformString("Hamburger"));  // Output: "regrubmaH"
console.log(transformString("Pizza"));      // Output: "80 105 122 122 97"
console.log(transformString("Chocolate Chip Cookie"));  // Output: "eikooCpihCetalocohC"
