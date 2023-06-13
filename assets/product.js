document.addEventListener("DOMContentLoaded", function () {
  const description = document.querySelector(".description");
  const policy = document.querySelector(".policy");
  description.addEventListener("click", function () {
    description.classList.toggle("hidden");
    policy.classList.toggle("hidden");
  });
  policy.addEventListener("click", function () {
    description.classList.toggle("hidden");
    policy.classList.toggle("hidden");
  });
  const number = Number(document.getElementById(number).textContent);
  console.log(number);
  const plus = document.querySelector(".plus");
  const sub = document.querySelector(".subtract");
  plus.addEventListener("click", function () {
    number++;
    document.getElementById(number).textContent = number;
    consolelog(number);
  });
  sub.addEventListener("click", function () {
    number--;
    document.getElementById(number).textContent = number;
  });
});
