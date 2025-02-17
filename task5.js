function sumArray(numbers) {
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}
console.log(sumArray([1, 2, 3, 4])); // 10
console.log(sumArray([5, 10, 15])); // 30
console.log(sumArray([-1, 2, -3, 4])); // 2
console.log(sumArray([100, 200, 300])); // 600
console.log(sumArray([0, 0, 0])); // 0