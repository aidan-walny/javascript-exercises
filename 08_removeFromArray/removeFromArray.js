const removeFromArray = function(passed_array, ...passed_removable) {

    // New empty array
    const newArray = [];

    passed_array.forEach(element)
        if(!passed_removable.includes(element)){
            newArray.push(element);
        }

    return newArray;
    

};

// removeFromArray([1, 2, 3, 4], 3)
// Do not edit below this line
module.exports = removeFromArray;
