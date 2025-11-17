const sumAll = function(passedMin, passedMax) {

    if (!Number.isInteger(passedMin) || !Number.isInteger(passedMax)) 
        return "ERROR";

    if (passedMin < 0 || passedMax < 0 )
        return "ERROR";

    if (passedMin > passedMax) {
        const temp = passedMin;
        min = passedMax;
        max = temp;
    }

    let sum = 0;
    for (let count = passedMin; count <= passedMax; count++) {
        sum = sum + count
    }
    return sum;


};

sumAll(4,1)
// Do not edit below this line
module.exports = sumAll;
