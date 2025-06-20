const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const inOneOver19 = people.some((person) => ((2025 - person.year) > 19))
console.log(inOneOver19);

// Array.prototype.every() // is everyone 19 or older?
const everyoneOver19 = people.every((person) => ((2025 - person.year) > 19))
console.log(everyoneOver19);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const searchId = 823423;
record = comments.find((item) => item.id === searchId);
console.log(record);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
recordIndex = comments.findIndex((item) => item.id === searchId);
if (recordIndex !== -1) {
    comments.splice(recordIndex, 1);
}
console.log(comments);