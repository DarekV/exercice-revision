const box1 = document.querySelector(".box-1");
let on = function () {
  box1.classList.toggle("on");
};
box1.addEventListener("click", on);

const box2 = document.querySelector(".box-2");
const box3 = document.querySelector(".box-3");
let on2 = function () {
  box3.classList.toggle("on2");
};
box2.addEventListener("click", on2);

const box5 = document.querySelector(".box-5");
const box6 = document.querySelector(".box-6");
const box4 = document.querySelector(".box-4");
let visible = function () {
  box5.classList.toggle("visible");
  box6.classList.toggle("visible");
};

box4.addEventListener("click", visible);
