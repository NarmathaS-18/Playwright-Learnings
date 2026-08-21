let year = 1900;
if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    console.log("YES");
} else {
    console.log("NO");
}
