// Find elements within a specified range in an array:

function arrBetween(a, b, arr) {
    return arr.filter(function(item) {
        return item > a && item < b;
    });
}

console.log(arrBetween(3, 8, [1, 5, 95, 0, 4, 7])); // [5, 4, 7]
console.log(arrBetween(1, 10, [1, 10, 25, 8, 11, 6])); // [8, 6]
console.log(arrBetween(7, 32, [1, 2, 3, 78])); // []
