const song = `twinkle
twinkle
little star`

const ryhme = "twinkle\ntwinkle\nlittle star \"how I wonder\""

console.log(song)
console.log(ryhme)

let myName = `francis`
let state = `Abia`
let age = `80`

let intro = `My name is ${myName} and I am from ${state}. I was born in ${newDate().getFullYear() - age}.`

//CHANGE INTRO TO UPPER OR LOWER CASE
intro = intro.toUpperCase()
intro = intro.toLowerCase()

console.log(intro)

//FIRS AND LAST CHARACTERS OF INTRO RESPECTIVELY
console.log(intro[0])
console.log(intro(intro.length - 1))


console.log(intro.length)
//console.log()

//IF THE INDEX DOESNT EXIST IT BECOMES NEGATIVE 1 (-1)
console.log(intro.indexOf('m'))
console.log(intro.indexOf('z')) // -1
//NOTE:'.characterAt' => the REVERSE of '.indexOf'

//REGULAR EXPRESSION EXPLAINED

intro = intro.replace('abia','anambra') //default, only replaces the first occurence
intro = intro.replaceAll('I','me') //replaces all occurences

intro = intro.replace(/\d+/, '****')

console.log(intro.match(/\d+/g)) //bings out all digits
console.log(intro.match(/\s/g))  //brings out all white spaces
console.log(intro.match(/\S/g)) //brings out all characters/non-whitespacing
console.log(intro.match(/\S+/g))
console.log(intro.match(/Abia | Anambra/g))
console.log(intro.match(/Abia | ANambra/gi))  //makes it case insensitive