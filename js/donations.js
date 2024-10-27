const total = [
  10, 50, 100, 10, 50, 100, 50, 10, 10, 100, 10, 50, 10, 100, 50, 50, 100, 50,
  10, 50, 100, 10, 100, 50, 50, 10, 100, 50, 100, 50, 10, 50, 100, 10, 50, 10,
  100, 50, 100, 10, 50, 100, 50, 10,
];

let currentAmount = total.reduce(function (acc, v, i, a) {
  return (acc += v);
}, 0); // Starting amount
const goal = 10000;

function updateDisplay() {
  document.getElementById("amount").innerText = `R${currentAmount.toFixed(2)}`;
  const progress = (currentAmount / goal) * 100;
  document.getElementById("progress").style.width = `${Math.min(
    progress,
    100
  )}%`;
}

function donate(amount) {
  total.push(amount); // Push the donated amount to the array
  currentAmount = total.reduce((acc, v) => acc + v, 0); // Recalculate the current amount
  updateDisplay();
}

function donateCustom() {
  const customAmount = parseFloat(
    document.getElementById("custom-amount").value
  );
  if (!isNaN(customAmount) && customAmount > 0) {
    donate(customAmount);
    document.getElementById("custom-amount").value = "";
  }
}

// Animate initial amount on load
let displayAmount = 0;
const animationInterval = setInterval(() => {
  if (displayAmount < currentAmount) {
    displayAmount += 50;
    document.getElementById("amount").innerText = `R${displayAmount.toFixed(
      2
    )}`;
  } else {
    clearInterval(animationInterval);
    updateDisplay();
  }
}, 20);
