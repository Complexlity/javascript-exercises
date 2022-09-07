const findTheOldest = function(arr) {
    let highestAge = 0
    let oldest_person;
    let thisYear = new Date().getFullYear()
    for (let i of arr){
       const yearOfBirth = i.yearOfBirth
       const yearOfDeath = i.yearOfDeath || thisYear
       const age = yearOfDeath - yearOfBirth
        // console.log(`${i.name} - ${age}`)
       if (age > highestAge) {
        highestAge = age
        oldest_person = i
    }
    
}
return oldest_person
};

// Do not edit below this line
module.exports = findTheOldest;
