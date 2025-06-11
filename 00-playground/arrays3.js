// From: https://javascript.info/array-methods#tasks

//==========================================
// Task 'Map to Names'
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [john, pete, mary];

// let names = users.map((item) => item.name);
// console.log(names); // John, Pete, Mary

// ===========================================
//Task 'Map to Objects'

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [john, pete, mary];

// let usersMapped = users.map(item => ({ fullName: `${item.name} ${item.surname}`, id: item.id }));

// /*
// usersMapped = [
//   { fullName: "John Smith", id: 1 },
//   { fullName: "Pete Hunt", id: 2 },
//   { fullName: "Mary Key", id: 3 }
// ]
// */

// console.log(usersMapped[0].id); // 1
// console.log(usersMapped[0].fullName)

//=============================================
// Task: 'Sort users by age'

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [pete, john, mary];

// function sortByAge(objArr) {
//     return objArr.sort((a, b) => (a.age - b.age));
// }

// sortByAge(arr);

// // now: [john, mary, pete]
// console.log(arr[0].name); // John
// console.log(arr[1].name); // Mary
// console.log(arr[2].name); // Pete

//=========================================
// Task: "Get average age"

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [john, pete, mary];

// function getAverageAge(objArr) {
//     return (objArr.reduce((sum, person) => sum + person.age, 0) / objArr.length);
//     // console.log(`Total Years: ${totalYears}`);
// }

// console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28

//===================================================
// Task 'Create keyed object from array'

let users = [
    { id: 'john', name: "John Smith", age: 20 },
    { id: 'ann', name: "Ann Smith", age: 24 },
    { id: 'pete', name: "Pete Peterson", age: 31 },
];

function groupById(objArr) {
    let newObj = {};
    objArr.forEach(obj => {
        newObj[obj.id] = { id: obj.id, name: obj.name, age: obj.age };
    });
    return newObj
}

let usersById = groupById(users);

console.log(usersById)

/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/


