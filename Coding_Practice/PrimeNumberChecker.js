const num = 17;
let found = false;

if (num < 2) {
    found = true;
} else if (num === 2) {
    found = false; 
} else if (num % 2 === 0) {
    found = true;
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