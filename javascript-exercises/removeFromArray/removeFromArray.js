const removeFromArray = function(arr, ...toDelete) {
    for(let i = 0; i < toDelete.length; i++){
    
        let index = arr.indexOf(toDelete[i]);
        if (index !== -1) {
            arr.splice(index, 1);
        }
    
    }

    return arr;
    
};

module.exports = removeFromArray;
