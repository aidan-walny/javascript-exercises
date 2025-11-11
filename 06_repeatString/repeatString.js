const repeatString = function(string, increment) {
    let counter = 0
    let newWord = ''
    while (counter < increment){
        newWord += string;
        counter += 1;
    }
    return string;

};
// Do not edit bel                                                                                                                              ``````++++++++++++++ow this line
module.exports = repeatString;
