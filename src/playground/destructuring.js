//
// Object destructuring
//

// const person = {
//   name: 'Nevan',
//   age: 22,
//   location:{
//     city: 'Guelph',
//     temp: -8
//   }
// };

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if(city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(publisherName);

const address = ['5595 Wellington Rd. 86 N', 'Ariss', 'Ontario', 'N0B 1B0'];
const [, city, state = 'New York'] = address;
console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [ itemName, , medPrice ] = item;
console.log(`A medium ${itemName} costs ${medPrice}`);