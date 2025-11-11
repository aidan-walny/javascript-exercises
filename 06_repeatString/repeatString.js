const repeatString = function(string, increment) {
    let counter = 0
    let newWord = ''
    if (increment < 0) return 'ERROR';
    while (counter < increment){
        newWord += string;
        counter += 1;
    }
    return newWord;

};
// repeatString('hey', 3);
// Do not edit bel                                                                                                                              ``````++++++++++++++ow this line
module.exports = repeatString;
