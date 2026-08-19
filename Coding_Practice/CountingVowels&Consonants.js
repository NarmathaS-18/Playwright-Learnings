const str = "hello world";

let Vowels = 0;
let Consonants = 0;

for (i = 0; i < str.length; i++)
{
   

    if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u' ) 
    {
        Vowels = Vowels + 1;

    }
    else 
        if (str[i] >= 'a' && str[i] <= 'z'){
           Consonants++;
    }
}
console.log(`Vowels: ${Vowels}`);
console.log(`Consonants: ${Consonants}`);