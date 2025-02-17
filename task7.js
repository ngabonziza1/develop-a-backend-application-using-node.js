
function sumArray(numbers) {
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}
console.log(sumArray([1, 2, 3, 4])); // 10
console.log(sumArray([5, 10, 15])); // 30
console.log(sumArray([-1, 2, -3, 4])); // 2
console.log(sumArray([100, 200, 300])); // 600
console.log(sumArray([0, 0, 0])); // 0
Explanation:
[1, 2, 3, 4] → Sum is 10.
[5, 10, 15] → Sum is 30.
[-1, 2, -3, 4] → Sum is 2.
[100, 200, 300] → Sum is 600.
[0, 0, 0] → Sum is 0.





function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("hello")); // "olleh"
console.log(reverseString("world")); // "dlrow"
console.log(reverseString("JavaScript")); // "tpircSavaJ"
console.log(reverseString("racecar")); // "racecar" (palindrome, so it stays the same)
console.log(reverseString("12345")); // "54321"
Explanation:
split('') 
reverse()
join('') 
"hello" → Reversed string: "olleh"
"world" → Reversed string: "dlrow"
"JavaScript" → Reversed string: "tpircSavaJ"
"racecar" string: "racecar" 
"12345" → string: "54321"
const students = [
    { name: "Alice", age: 20, grade: 85 },
    { name: "Bob", age: 22, grade: 72 },
    { name: "Charlie", age: 19, grade: 90 },
    { name: "David", age: 21, grade: 65 },
    { name: "Eve", age: 20, grade: 88 }
];

function getTopStudents(students, threshold) {
    return students
        .filter(student => student.grade > threshold)  // Filter students by grade
        .map(student => student.name);                 // Extract the names of top students
}
console.log(getTopStudents(students, 80)); // ["Alice", "Charlie", "Eve"]

console.log(getTopStudents(students, 70)); // ["Alice", "Bob", "Charlie", "Eve"]