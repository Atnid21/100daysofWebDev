// for each loop 

// const coding =["js","ruby","java","cpp"]



// const values = coding.forEach((item) => {
//     console.log(item);
// })

// console.log(values);


// filter 


// const nums =[1,2,3,4,5,6,7,8]

// const newNums = nums.filter((num)=> (num > 4))

// const newNums = nums.filter((num)=>{
//     return num > 4;
// })


// console.log(newNums);


// const nums =[1,2,3,4,5,6,7,8]

// const newNums =[]

// nums.forEach((num)=>{
//     if(num > 4)
//         newNums.push(num)
// })

// console.log(newNums);


// map 


// const nums =[1,2,3,4,5,6,7,8]

// const newNums = nums.map((num)=> num+10)


// const newNums =[]
// nums.forEach((num)=>{
//      num+=10;
//      newNums.push(num)

// })

// console.log(newNums);


// reduce method


// const nums=[1,2,3]

// const myNums = nums.reduce(function(acc,currVal){
//     return acc+currVal;
// },0)

// const myNums = nums.reduce( (acc,currVal)=>{
//     return acc+currVal   
// },0)


// console.log(myNums);


const shoppingCart = [
    {
        itemName:"js course",
        price:1000
    },
    {
        itemName:"java course",
        price:3000
    },
    {
        itemName:"py course",
        price:2000
    }
    
]


const bill = shoppingCart.reduce((acc,item)=> acc + item.price ,0)

console.log(bill);

