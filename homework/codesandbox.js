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
