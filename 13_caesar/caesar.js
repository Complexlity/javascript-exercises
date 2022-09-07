const caesar = function(myString, key) {

    key = (key + 26) % 26
    let newString = ''
    for (let char of  myString) {
       newString += shiftby(char, key) 
    }
  return newString
};

function shiftby(character, key){
    if (character.match(/[^a-z]/i)) return character
    asciiNumber = character.charCodeAt(0)
    let cap = 90;
    if (character.toLowerCase() === character) cap = 122
    newAsciiNumber = asciiNumber + key;
    if ( newAsciiNumber > cap) newAsciiNumber -= 26
    return  String.fromCharCode(newAsciiNumber)
}

// Do not edit below this line
module.exports = caesar;
