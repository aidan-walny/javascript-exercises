const removeFromArray = function(passed_array, passed_removable) {
    console.log(passed_array);
    removableIndex = passed_array.indexOf(passed_removable, 0)
    // console.log(removableIndex);
    passed_array.splice(removableIndex, 1);
    return passed_array;
    // console.log(passed_array);

};

// removeFromArray([1, 2, 3, 4], 3)
// Do not edit below this line
module.exports = removeFromArray;
