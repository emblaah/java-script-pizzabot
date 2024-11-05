const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

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

const pizzaName = document.getElementById("order");
const amount = document.getElementById("amount");
const btn = document.getElementById("btn");
const totalPrice = document.getElementById("totalPrice");
const totalTime = document.getElementById("totalTime");
const wrongPizza = document.getElementById("wrongInput");

btn.addEventListener("click", () => {
  event.preventDefault();
  const orderName = pizzaName.value.toLowerCase();
  if (checkOrderName(orderName)) {
    const orderQuantity = parseInt(amount.value, 10);
    const orderTotal = totalCost(orderQuantity);
    totalPrice.textContent = `Total: ${orderTotal} kr`;
    const time = cookingTime(orderQuantity);
    totalTime.textContent = `ETA: ${time} minutes.`;
    wrongPizza.textContent = ``;
  } else {
    wrongPizza.textContent = `Pizza not on the menu.`;
  }
});
