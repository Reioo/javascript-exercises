function sortPeopleByAge(arr) {
    const oldest = arr.sort((a, b) => {
        const currentYear = new Date().getFullYear();
        let nextGuy;
        let lastGuy;
        if(isNaN(a.yearOfDeath)) {
            nextGuy = currentYear - a.yearOfBirth;   
            // console.log(nextGuy);
        } else {
            nextGuy = a.yearOfDeath - a.yearOfBirth;   
            // console.log(nextGuy);
        }
        if(isNaN(b.yearOfDeath)) {
            lastGuy = currentYear - b.yearOfBirth;   
            // console.log(lastGuy);
        } else {
            lastGuy = b.yearOfDeath - b.yearOfBirth;   
            // console.log(lastGuy);
        }
        return (lastGuy < nextGuy) ? -1 : 1;
    })
    return oldest;
}

const findTheOldest = function(arr) {    
    const sortedByAge = sortPeopleByAge(arr);
    // console.log(sortedByAge[0]);
    return sortedByAge[0];
};
const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]
  console.log(findTheOldest(people).name);

// Do not edit below this line
module.exports = findTheOldest;
