function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("hello")); // "olleh"
console.log(reverseString("world")); // "dlrow"
console.log(reverseString("JavaScript")); // "tpircSavaJ"
console.log(reverseString("racecar")); // "racecar" (palindrome, so it stays the same)
console.log(reverseString("12345")); // "54321"