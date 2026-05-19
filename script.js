const exerciseTimeMinutes = 30;
let message = "";

// if (exerciseTimeMinutes < 30) {
//   message = "you need to try harder";
// } else {
//   message = "doing good";
// }

exerciseTimeMinutes < 30
  ? (message = "you need to try harder")
  : (message = "doing good");
console.log(message);
