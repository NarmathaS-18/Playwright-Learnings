
let arr = [10, 67, 41, 39, 50];
let max = arr[0];
for (i = 1; i < arr.length; i++) 
    {
    if (arr[i] > max) {
        max = arr[i];
        }
   
}
console.log(max);
