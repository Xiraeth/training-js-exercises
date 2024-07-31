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
