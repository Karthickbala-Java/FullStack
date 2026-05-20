// coffee
// sandwiches
// salad
// lemon cake

function selectItem(item) {
  let price = 0;
  switch (item) {
    case "coffee":
      price = 2;
      break;
    case "sandwiches":
      price = 5;
      break;
    case "salad":
      price = 4;
      break;
    case "lemon cake":
      price = 3;
      break;
    default:
      return `sorry we didn't sell ${item}`;
  }
  return `you selected ${item} that will $${price} `;
}

console.log(selectItem(""));
