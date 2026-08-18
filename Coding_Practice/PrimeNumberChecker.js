const num = 17;
let found = false;

for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        found = true;
        break;
    }
}

if (found) {
    console.log("NO");
} else {
    console.log("YES");
}