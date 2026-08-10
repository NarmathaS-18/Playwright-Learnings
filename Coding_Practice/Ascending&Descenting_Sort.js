//Sort and print the array elements in ascending & descending order.

let arr = [5, 3, 8, 1, 2];

arr.sort((a, b) => a - b);
console.log("Ascending Order:", arr.join(' ' ));

arr.sort((a, b) => b - a);
console.log("Descending Order:", arr.join(' ' ));