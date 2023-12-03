function main(a){

    function adder(b){
        console.log(a+b);
    }


    return adder;

}

const addTo5 = main(5);

addTo5(2);