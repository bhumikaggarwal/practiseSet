let nam = "Dolly"
let n = nam.length
for(let i = 0 ; i+1 <= n ; i++){
    console.log(nam[i])
}   
console.log(nam.startsWith('D'))

//Extracting a number from the string and converting it into a actual string.
let sentence = "Please give rupees 1000"
let amount = Number.parseInt(sentence.slice("please give rupees".length ))
console.log(amount)
// strings are immutable . An original string can never be changed.

let newNam = nam.replace(nam[3] , 'p')
console.log(newNam)
