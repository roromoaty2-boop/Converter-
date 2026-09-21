const input = document.querySelector(".number");
const btn = document.querySelector(".input-btn button");
const result = document.querySelector(".result-btn p");

function calculate() {
  let inch = Number(input.value);
  let meter = inch / 39.3701;

  result.textContent = meter;
}

btn.onclick = calculate;