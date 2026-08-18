const num = 17;

let found = false;

if (num < 2) {
    found = true;   // 0, 1, and negative numbers are not prime
} else {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            found = true;
            break;
        }
    }
}

if (found) {
    console.log("NO");
} else {
    console.log("YES");
}