const reverseString = function(str) {
    
    ans = '';
    
    n = Number(str.length);

    for(let i = 0; i < n; i++){
        ans += str[n - 1 - i];
    }

    return ans;
};

module.exports = reverseString;
