const num = 17;
let found = false;

if (num < 2) {
    found = true; // treat 0, 1, negatives as "not prime"
} else if (num === 2) {
    found = false; // 2 is prime
} else if (num % 2 === 0) {
    found = true; // other even numbers aren't prime
} else {
    for (let i = 3; i * i <= num; i += 2) {
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