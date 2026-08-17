
let n = 5;

/*for (i = 1; i <= n; i++)
{
    console.log('*'.repeat(i));
}*/

for (i = 1; i <= n; i++) {
    for (j = 1; j <= i; j++) {

        process.stdout.write("*");
    }
    console.log("");
}



   
