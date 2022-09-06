const palindromes = function (myString) {
   let stringMain =  myString.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g,"")
   let stringReversed = stringMain.split('').reverse().join('')
//    console.log(stringMain, '\n', stringReversed)
   return stringMain == stringReversed
   
};


// Do not edit below this line
module.exports = palindromes;
