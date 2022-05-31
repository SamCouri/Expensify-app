//object destructuring

// console.log('destructuring');

// const person = {
//     name: 'Samir',
//     age: '28',
//     location: {
//         city: 'Montreal',
//         temp: '20 degree C'
//     }
// }; 

// const {name : firstName  = 'Anonymous', age} = person;
// console.log(`${firstName} is ${age}.`);
// const {city, temp: temperature} = person.location;

// if(city && temperature) {
// console.log(`it is ${temperature} in ${city}.`);
// };

// const book = {
// title: 'Ego is the Enemy',
// author: 'Ryan Holiday',
// publisher: {
//     name: 'penguin'
//     }
// };

// const {name: publisherName= 'Self Published'} = book.publisher;

// if (publisherName){
// console.log(`the publisher name is: ${publisherName}`);
// };


//Array destructuring

// const address = ['1299 S. juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

// const [street, city, state='New York', zip] = address;

// console.log(`you are in ${city} ${state}.`);

const item = ['coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , mediumPrice='$1'] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);