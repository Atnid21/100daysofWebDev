

// array 

// const arr = [0,1,2,3,4,5]

// console.log(arr[0]);
// console.log(arr);

// Array methods

// arr.push(6);
// arr.pop();

// arr.unshift(0);
// arr.shift();

// console.log(arr.includes(9));
// console.log(arr.indexOf(9));

// const newArr = arr.join(); // converts arrays into string   

// console.log(newArr)
// console.log(typeof arr);
// console.log(typeof newArr);



// slice and splice : slice does not manipulate the original array while splice does.
//  Interview Specific

// console.log("A ",arr);

// const myn1 = arr.slice(1,3);

// console.log(myn1);

// console.log("B ",arr);

// const myn2 = arr.splice(1,3);

// console.log(myn2);
// console.log("C ",arr);



// const marvelHeros = ["thor", "Ironman","spiderman"]
// const dcHeros = ["superman", "flash","batman"]

// marvelHeros.push(dcHeros)

// console.log(marvelHeros);

// console.log("last index",marvelHeros[marvelHeros.length-1]);

// const newHerofamily = marvelHeros.concat(dcHeros);

// console.log(newHerofamily);


// const allNewHeros = [...marvelHeros,...dcHeros]
// console.log(allNewHeros);


// const anotherArray = [1,2,3,4,[5,3],[6,[2,3]]]

// const anotherNew = anotherArray.flat(Infinity);

// console.log(anotherArray);
// console.log(anotherNew);

// console.log(Array.from("Atharva"));


// let sc1 = 100
// let sc2 = 200
// let sc3 = 300

// console.log(Array.of(sc1,sc2,sc3));


const students =['Piyush','Joh','Jane']

students.push({name:"Atharva"})

console.log(students);


