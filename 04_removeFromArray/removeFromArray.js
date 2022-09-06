const removeFromArray = function() {
    const args = Array.from(arguments);
    checkedArguments = args.splice(1)
    mainArray = args[0]
    
    for (let arg of checkedArguments){
            argumentIndex = mainArray.indexOf(arg)
            if (argumentIndex > -1 ) mainArray.splice(argumentIndex, 1)
        }
    
    return mainArray
}

removeFromArray([1,2,3,4], 4)
// Do not edit below this line
module.exports = removeFromArray;
