const exerciseTimeMinutes = 30;
let message = "";

// if (exerciseTimeMinutes < 30) {
//   message = "you need to try harder";
// } else {
//   message = "doing good";
// }

message =
  exerciseTimeMinutes < 30
    ? "you need to try harder"
    : exerciseTimeMinutes < 60
      ? "doing good"
      : "you are a pro";
console.log(message);
