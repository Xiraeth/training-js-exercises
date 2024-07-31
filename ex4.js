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
