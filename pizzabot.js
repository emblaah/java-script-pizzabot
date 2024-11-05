const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

alert(
  `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian}, and ${pepperoni}`
);

const pizzaPrice = 80;

function checkOrderName(orderName) {
  return (
    orderName === vegetarian.toLowerCase() ||
    orderName === hawaiian.toLowerCase() ||
    orderName === pepperoni.toLowerCase()
  );
}
function totalCost(orderQuantity) {
  let sum = 0;
  sum = orderQuantity * pizzaPrice;
  return sum;
}
function cookingTime(orderQuantity) {
  if (orderQuantity === 1 || orderQuantity === 2) {
    return 10;
  } else if (orderQuantity >= 3 && orderQuantity <= 5) {
    return 15;
  } else {
    return 20;
  }
}


let orderName = prompt(
  `Enter the name of the pizza you want to order today: (${vegetarian}, ${hawaiian}, or ${pepperoni})`
).toLowerCase();

while (true) {
  if (checkOrderName(orderName)) {
    const orderQuantity = prompt(`How many ${orderName}s do you want`);

    const time = cookingTime(orderQuantity);

    alert(`The pizzas will take ${time} minutes.`);

    const orderTotal = totalCost(orderQuantity); //Price
    alert(
      `Great, I will get started on your ${orderName} right away, it will cost ${orderTotal} kr.`
    );
    break;
  } else {
    alert(`Invalid pizza name. Please enter a valid pizza.`);
    orderName = prompt(
      `Enter the name of the pizza you want to order today: (${vegetarian}, ${hawaiian}, or ${pepperoni})`
    ).toLowerCase();
  }
}