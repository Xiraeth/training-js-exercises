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
