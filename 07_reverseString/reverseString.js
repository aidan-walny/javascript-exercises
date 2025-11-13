const reverseString = function(passed_string) {
    let newString = ''
    newString = passed_string.split('').reverse().join('');
    return newString
};

reverseString("test")
// Do not edit below this line
module.exports = reverseString;
