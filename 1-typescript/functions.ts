// let sum =  (n1, n2) => {
//     return n1 + n2;
// };

let sum;
sum =  (n1, n2) => n1 + n2;
sum = 22;
const square = n => n*n;

let people = [
    {name: 'Sam',age: 21},
    {name: 'David',age: 22},
    {name: 'Monica',age: 31}
];
let peopleLessThan30 = people
    .filter(p => p.age < 30)
    .map(p => p.name);
        
console.log(peopleLessThan30);

