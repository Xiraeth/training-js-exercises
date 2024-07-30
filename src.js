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
// };

// // Απάντηση:
// const result = Object.entries(y).map((entry) => {
//   const [key, value] = entry;
//   if (value.id == "133") {
//     return [key, value];
//   }
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

// //Η απάντηση σας να είναι της μορφής

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
