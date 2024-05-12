//for of loop

let arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    console.log(num);
}


let greetings = "Hello World";

for (const greets of greetings) {
    console.log(`Value of each char ${greets}`);
}


//Maps

const map = new Map()
map.set('PK', 'Pakistan')
map.set('IN', 'India')
map.set('SR', 'Srilanka')

for (const [key, value] of map) {
    console.log(key + ' :- ' + value);
}


