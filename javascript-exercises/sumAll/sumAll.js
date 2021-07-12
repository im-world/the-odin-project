const sumAll = function(a, b) {
 
    if( (!(typeof a == "number")) || (!(typeof b == "number")) || a*b < 0){
        return "ERROR";
    } 

    let sum = 0;
    let min = 0;
    let max = 0;

    if(a > b){
        min = b;
        max = a; 
    }
    else{
        min = a;
        max = b;
    }

    for(let i = min; i <= max; i++){
        sum += i;
    }

    return sum;

};

module.exports = sumAll;
