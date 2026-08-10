const data = require('fs').readFileSync(0, 'utf8');


for (i = 1; i <= 10; i++)
{
    console.log(`${data} x ${i} = ${data * i}`);
}
