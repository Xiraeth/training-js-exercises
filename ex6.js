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
