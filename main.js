// Array methods practice

const people =[
    {firstName: 'Joe', lastName: 'Khan', age: 21},
    {firstName: 'Dorian', lastName: 'Khan', age: 15},
    {firstName: 'Tammy', lastName: 'Smith', age: 41},
    {firstName: 'Noor', lastName: 'Biles', age: 33},
    {firstName: 'Sumatva', lastName: 'Chen', age: 19},
];

people.sort(function (a,b){
    if(a.age < b.age){
        return -1;
    } else if(a.age > b.age){
        return 1;
    }else{
        return 0;
    }
});

console.log(people);

const numbers= [2, 42, 5, 304, 1, 13];

const maximumFail = Math.max(...numbers);
console.log(maximumFail)