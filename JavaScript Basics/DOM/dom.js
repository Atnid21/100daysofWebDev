// const a = document.querySelector("h1") // class: .h1
// id: #h1 

// console.log(a);
// a.innerHTML = "New"

// a.style.color='red'

// a.style.backgroundColor = "black"

// a.addEventListener("click",function(){
//     a.innerHTML="Ho gaya click";
//     a.style.color="black";
//     a.style.backgroundColor="blue"
// })


// var bulb = document.querySelector("#bulb");

// var button=document.querySelector("button");

// var flag=0;

// button.addEventListener("click",function(){
//     if(flag==0){
//         bulb.style.backgroundColor="yellow";
//         flag=1;
//     }else{
//         bulb.style.backgroundColor="transparent";
//         flag=0;
// }

// })


const ele = document.getElementsByClassName("remove")
for(let i=0;i<ele.length;++i){
    ele.item(i).remove();
}

