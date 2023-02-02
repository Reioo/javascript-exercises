const findTheOldest = function(arr) {
    const oldest = arr.sort((a, b) => {
        console.log(`a: ${a.yearOfBirth} \n b: ${b.yearOfBirth}`);
    })
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
 findTheOldest(people);
// Do not edit below this line
module.exports = findTheOldest;
