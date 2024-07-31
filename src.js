// EXERCISE 1
//  Δημιουργείστε νέο πίνακα που θα περιέχει τα αυτοκίνητα που έχουν φτιαχτεί μετά το 2001.
// const cars = [
//   {
//     brand: "audi",
//     year: 2000,
//   },
//   {
//     brand: "fiat",
//     year: 2002,
//   },
//   {
//     brand: "toyota",
//     year: 2002,
//   },
// ];

// const carsAfter2001 = cars.filter((car) => car.year > 2001);

// console.log("carsAfter2001", carsAfter2001);
// ---------------------------------------------------------------------------------
// EXERCISE 2
// Σε κάθε ένα αυτοκίνητο στον πίνακα cars προσθέστε ένα καινούργιο attribute που θα λέγεται serviced και θα έχει value true.
// const cars = [
//   {
//     brand: "audi",
//     year: 2000,
//   },
//   {
//     brand: "fiat",
//     year: 2002,
//   },
// ];

// const newCars = cars.map((car) => {
//   car.serviced = true;
//   return car;
// });

// console.log(newCars);
// ---------------------------------------------------------------------------------
// EXERCISE 3
// Να δημιουργήσετε το παρακάτω αποτέλεσμα χρησιμοποιώντας τον πίνακα cars της 2 άσκησης:
// const cars = [
//   {
//     brand: "audi",
//     year: 2000,
//   },
//   {
//     brand: "fiat",
//     year: 2002,
//   },
// ];

// const newCars3 = cars.map(({ brand, year }) => ({ [brand]: year }));

// console.log(newCars3);

// ---------------------------------------------------------------------------------

// EXERCISE 4
// Να δημιουργήσετε το παρακάτω αποτέλεσμα χρησιμοποιώντας τον πίνακα cars της 2 άσκησης:

// const newCars4 = {
//   audi: 2000,
//   fiat: 2002
// };

// const cars = [
//   {
//     brand: "audi",
//     year: 2000,
//   },
//   {
//     brand: "fiat",
//     year: 2002,
//   },
// ];

// Απάντηση:
// const newCars4 = (cars, idProp) => {
//   const newObj = {};
//   cars.forEach((car) => {
//     const brand = car[idProp];
//     newObj[brand] = car.year;
//   });
//   return newObj;
// };

// const carsTransformed = newCars4(cars, "brand");

// console.log(carsTransformed);

// ---------------------------------------------------------------------------------

// EXERCISE 5
// Find the item with id: 133.
//  Should log ["1", {"id":"133","name":"Ioanna"}]

// const y = {
//   0: {
//     id: "123",
//     name: "Achilleas",
//   },
//   1: {
//     id: "133",
//     name: "Ioanna",
//   },
//   2: {
//     id: "143",
//     name: "Ioanna",
//   },
// };

// // Απάντηση:
// const result = Object.entries(y).map(([key, value]) => {
//   if (value.id == "133") return [key, value];
// })[1];

// console.log(result);

// ---------------------------------------------------------------------------------

// EXERCISE 6
// Transform to an object that has the brand name as key e.g. {Audi: {year: 1999, price:12222}, Nissan: {...}}.
// const cars = [
//   {
//     brand: "Audi",
//     year: 1999,
//     price: 12222,
//   },
//   {
//     brand: "Nissan",
//     year: 2003,
//     price: 24222,
//   },
// ];

// // turn into:

// const cars2 = {
//   Audi: {
//     year: 1999,
//     price: 12222,
//   },
//   Nissan: {
//     year: 2003,
//     price: 24222,
//   },
// };

// // Απάντηση:

// const transform = (cars, idProp) => {
//   const newObj = {};
//   cars.forEach((car) => {
//     const brand = car.brand;
//     newObj[brand] = {
//       year: car.year,
//       price: car.price,
//     };
//   });
//   return newObj;
// };

// const transformedCars = transform(cars, "brand");

// console.log(transformedCars);

// ---------------------------------------------------------------------------------

// HOMEWORK ON CODESANDBOX

// const users = [
//   {
//     id: 13443,
//     name: "John",
//     surname: "Volter",
//     age: 3,
//     sex: "M",
//   },
//   {
//     id: 25466,
//     name: "Mary",
//     surname: "Wild",
//     age: 18,
//     sex: "F",
//   },
//   {
//     id: 21121,
//     name: "John",
//     surname: "Porter",
//     age: 28,
//     sex: "M",
//   },
// ];

// const getUsersById = (id) => users.find((user) => user.id === id);

// const getUsersByName = (name) =>
// users.filter((user) => user.name === name);

// const getMalesFullName = () => {
//   return users
//     .filter((user) => user.sex === "M")
//     .map((user) => {
//       return { id: user.id, fullname: `${user.name} ${user.surname}` };
//     });
// };

// const getAdultsObject = () => {
//   const adults = users.filter((user) => user.age >= 18);
//   const newObj = {};
//   adults.forEach((adult) => {
//     const id = adult.id;
//     newObj[id] = {
//       name: adult.name,
//       surname: adult.surname,
//       age: adult.age,
//     };
//   });
//   return newObj;
// };

// console.log(getAdultsObject());

// ---------------------------------------------------------------------------------

// HOMEWORK
// Check if the certification has _id

// const certification = {
//   _id: "3567798099455779",
//   name: "Marios",
//   age: 45,
//   year: 2005,
//   grade: 8,
// };

// const result = certification._id
//   ? "It has an '_id' field."
//   : "It does not have an '_id' field";

// or, with optional chaining:

// const result = certification?._id;

// console.log(result);

// ---------------------------------------------------------------------------------

// If the given input is an array of numbers, return the sum of all the positive ones. If the array is empty or there aren't any positive numbers, return 0.
// const Numbers = [1, -4, 12, 0, -3, 29, -150];

// const result = Numbers.filter((number) => number > 0).reduce(
//   (acc, cur) => acc + cur,
//   0
// );

// console.log(result);

// ---------------------------------------------------------------------------------

// a) Find the number of suppliers’ certifications (check the user type)(sum)
// b) Find the number of Approved certifications

// const users = [
//   {
//     _id: "3546565",
//     name: "Maria",
//     type: "SUPPLIER",
//     certifications: [
//       {
//         _id: "3565",
//         title: "ISO2020",
//         type: "ISO",
//         status: "Approved",
//       },
//       {
//         _id: "35655",
//         title: "FLAG2020",
//         type: "FLAG",
//         status: "Approved",
//       },
//     ],
//   },
//   {
//     _id: "355646565",
//     name: "Manos",
//     type: "SHIPPING_COMPANY",
//   },
//   {
//     _id: "3546565",
//     name: "Maria",
//     type: "SUPPLIER",
//     certifications: [
//       {
//         _id: "35654",
//         title: "ISO2018",
//         type: "ISO",
//         status: "Pending",
//       },
//     ],
//   },
// ];

// a)
// const result = users
//   .filter((user) => user.type === "SUPPLIER")
//   .map((user) => {
//     let count = 0;
//     user.certifications.forEach((cer) => count++);
//     return count; // the variable'count' here is an array, each element containing the number of certificates of the respective supplier
//
//   })
//   .reduce((acc, cur) => cur + acc, 0);

// b)
// const result = users
//   .filter((user) => user.type === "SUPPLIER")
//   .filter((user) => {
//     return user.certifications[0].status === "Approved";
//   })
//   .map((user) => {
//     let count = 0;
//     user.certifications?.forEach((cert) => count++);
//     return count; // same as above
//   })
//   .reduce((acc, cur) => acc + cur, 0);

// console.log(result);

// ---------------------------------------------------------------------------------
// a) Return the first 3 users with the most points
// b) Return the first 3 users with the most points in the United Kingdom

// const users = [
//   {
//     name: "Maria",
//     age: 24,
//     country: "Greece",
//     points: 100,
//   },
//   {
//     name: "Kostas",
//     age: 50,
//     country: "Italy",
//     points: 2000,
//   },
//   {
//     name: "John",
//     age: 30,
//     country: "France",
//     points: 20,
//   },
//   {
//     name: "James",
//     age: 30,
//     country: "United Kingdom",
//     points: 1400,
//   },
//   {
//     name: "Jennifer",
//     age: 28,
//     country: "United Kingdom",
//     points: 3000,
//   },
// ];

// a)
// const result = users.sort((a, b) => b.points - a.points).slice(0, 3);

// b)
// const result2 = users
//   .filter((user) => user.country === "United Kingdom")
//   .sort((a, b) => b.points - a.points)
//   .slice(0, 3);

// console.log(result2);

// ---------------------------------------------------------------------------------

// EXERCISE 7 -SHOPPING CART

const priceList = {
  apple: 0.12,
  orange: 0.32,
  pen: 0.22,
  notebook: 0.89,
  peach: 0.18,
};

// cart 1
const cart1 = ["apple", "apple", "orange", "apple"];
let sum1 = 0;
cart1.forEach((item) => (sum1 += priceList[item]));

// cart 2
const cart2 = [
  "apple",
  "pen",
  "peach",
  "apple",
  "pen",
  "peach",
  "notebook",
  "notebook",
  "orange",
];
let sum2 = 0;
cart2.forEach((item) => (sum2 += priceList[item]));

// cart 3
/*
  if you buy 2 apples you get 1 of them free
  if you buy 3 oranges you get 1 of them free
*/
const cart3 = [
  "apple",
  "apple",
  "apple",
  "apple",
  "apple",
  "orange",
  "orange",
  "orange",
  "orange",
  "orange",
  "orange",
  "orange",
  "orange",
  "orange",
];
let sum3 = 0;
// let appleCounter = 0;
// let orangeCounter = 0;
// let amount = 1;

// or, in object form:

const products = {
  apple: {
    price: 0.12,
    discountThreshold: 5, // how many apples are required for the discount to happen
    discountAmount: 2, // how many apples are discounted once the discount happens
    discount: 0.12, // price of discount (1 apple)
    count: 0, // the amount the user has in their cart
  },
  orange: {
    price: 0.32,
    discountThreshold: 8,
    discountAmount: 2,
    discount: 0.32,
    count: 0,
  },
};

cart3.forEach((item) => {
  products[item].count++;
  sum3 += products[item].price;
});

for (const [key, value] of Object.entries(products)) {
  const dividend = value.count; // Δ
  const remainder = value.count % value.discountThreshold; // υ
  const quotient = value.discountThreshold; // π
  const divider = (dividend - remainder) / quotient; // δ
  const discount = divider * value.discountAmount * value.discount;
  sum3 -= discount;
}

/*
  Substract the discount, which is the quotient of totalApples / discountThreshold, given by the Euclidean Division:
  Δ = δ * π + υ => π = (Δ - υ) / δ, discount = π * amount * price
  multiplied by the amount that the exercise description gives us,
  where discountAmount is how many apples you get back
  e.g. here: 
    In 5 apples the 2 apples of them are free, in 8 oranges the 2 oranges of them are free
  the discountThreshold for apples is 5 and the discountAmount is 2.
 */

const sumFinal = Number(sum3.toFixed(2));
console.log(sumFinal);
