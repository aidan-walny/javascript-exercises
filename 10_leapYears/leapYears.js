const leapYears = function(passedYear) {

    if (passedYear % 4 === 0 && (!(passedYear % 100 === 0) || (passedYear % 400 === 0)))   {
        return true;
    }

    else return false;
};

value = leapYears(2000)
console.log (value)
// Do not edit below this line
module.exports = leapYears;
