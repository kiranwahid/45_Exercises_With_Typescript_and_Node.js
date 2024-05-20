// ============== Question no 21 ================

// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items


// ============== Answer no 21 ================

// create type interface...
interface car{
name:string,
model:string,
year:number,
color:string,
price:number
}

// make three object of car...

let car1:car={
    name:'Ford',
    model:'Mustange',
    year:2015,
    color:'red',
    price:1000000
}
let car2:car={
    name:'Toyota',
    model:'Camry',
    year:2015,
    color:'silver',
    price:75000
}
let car3:car={
    name:'Honda',
    model:'civic',
    year:2018,
    color:'black',
    price:30000
}
console.log(car1,car2,car3);
