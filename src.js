// Exercise 1
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

// Exercise 2
// Σε κάθε ένα αυτοκίνητο στον πίνακα cars προσθέστε ένα καινούργιο attribute που θα λέγεται serviced και θα έχει value true.
const cars = [
  {
    brand: "audi",
    year: 2000,
  },
  {
    brand: "fiat",
    year: 2002,
  },
];

const newCars = cars.map((car) => {
  car.serviced = true;
  return car;
});

console.log(newCars);
