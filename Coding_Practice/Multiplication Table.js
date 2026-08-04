const data = require('fs').readFileSync(0, 'utf8');

for (i = 1; i <= 10; i++)
{
    const result = data * i;
    console.log(`${data} X ${i} = ${result} `);
}
