// const person = {
//     name: 'Hai',
//     age: 33,
//     location: {
//         city: 'hcm',
//         temp: 92
//     }
// };

// const {name, age} = person;

// console.log(`${name} is ${age}`);

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);

//
//
// Array destruturing

// const address = ['1299 Juniper Street', 'Philadelphia', '700000'];
// const [street, city, zip] = address;
// console.log(`You are in ${city} ${zip}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [coffee, sizeCost] = item;

console.log(`A ${coffee} cost ${sizeCost}`);