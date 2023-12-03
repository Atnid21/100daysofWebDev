// High Order function : accept function as an argument
// Callback function : which is accept as argument

function add(a,b,cb){
    let res = a+b
    cb(res)
}

add(2,4,function(val){
    console.log(val);
})