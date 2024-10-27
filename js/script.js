let navbar = document.querySelector(".header .navbar");
let menu = document.querySelector("#menu");

// menu.onclick = () => {
//   menu.classList.toggle("fa-times");
//   navbar.classList.toggle("active");
// };

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

const total = [
  10, 50, 100, 10, 50, 100, 50, 10, 10, 100, 10, 50, 10, 100, 50, 50, 100, 50,
  10, 50, 100, 10, 100, 50, 50, 10, 100, 50, 100, 50, 10, 50, 100, 10, 50, 10,
  100, 50, 100, 10, 50, 100, 50, 10,
];

const amount = document.querySelector(".amount");
const don10 = document.querySelector("#ten");
const don50 = document.querySelector("#fifty");
const don100 = document.querySelector("#hundred");
const custom = document.querySelector("#am");
const inp = document.querySelector("#custom-amount");
const donateOnmMain = document.querySelector("#donate");
function donated() {
  const addedUp = total.reduce(function (a, v) {
    return (a += v);
  }, 0);
  amount.textContent = `R${addedUp}`;
}
donated();
let added = 0;
don10.addEventListener("click", function () {
  added = 10;

  donated();
});

don100.addEventListener("click", function () {
  total.push(100);

  donated();
});
don50.addEventListener("click", function () {
  total.push(50);

  donated();
});

custom.addEventListener("click", function (e) {
  const extraNum = Number(inp.value);
  e.preventDefault();
  if (isNaN(extraNum)) {
    console.log(extraNum);
    alert("not a number, please try again!");
  } else {
    total.push(extraNum);
    donated();
  }
});

document.querySelector(".sub").addEventListener("click", function (e) {
  e.preventDefault();
  total.push(added);
});

document.addEventListener("click", function () {});
// donated();
