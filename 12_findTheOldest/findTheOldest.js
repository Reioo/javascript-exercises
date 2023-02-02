function sortPeopleByAge(arr) {
    const oldest = arr.sort((a, b) => {
        const nextGuy = a.yearOfDeath - a.yearOfBirth;
        const lastGuy = b.yearOfDeath - b.yearOfBirth;
        return (lastGuy < nextGuy) ? -1 : 1;
    })
    return oldest;
}

const findTheOldest = function(arr) {
    const sortedByAge = sortPeopleByAge(arr);
    return sortedByAge[0].name;
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
 console.log(findTheOldest(people)); 
// Do not edit below this line
module.exports = findTheOldest;
