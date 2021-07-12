const repeatString = function(str, n) {
    
    if(Number(n) < 0){
        return "ERROR";
    }

    ans = "";
    for(let i = 0; i < Number(n); i++){
        ans += str;
    }
    return ans;
};

module.exports = repeatString;
