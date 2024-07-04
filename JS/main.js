let showResult = document.querySelector(".show");
let inputs = document.querySelectorAll("input");
let dayInput = document.querySelector(".day input");
let drkbdy = document.querySelector("body");
let resDark = document.querySelectorAll(".result p");
let darlabel = document.querySelectorAll(".input-date p.m-1");
let darkBox = document.querySelector(".box");
let monthInput = document.querySelector(".month input");
let yearInput = document.querySelector(".year input");
let dayValid = document.querySelector(".validDay");
let monthValid = document.querySelector(".validMonth");
let yearValid = document.querySelector(".validYear");
let year = document.querySelector(".yearResult");
let month = document.querySelector(".monthResult");
let day = document.querySelector(".dayResult");
let toggler = document.querySelector(".toggle");
let date = new Date();

inputs.forEach((inp) => {
  inp.addEventListener("input", (e) => {
    if (inp.value != Number(inp.value)) {
      inp.value = "";
    }
  });
});

showResult.addEventListener("click", () => {
  if (dayInput.value > 31 || dayInput.value == "") {
    dayValid.style.display = "block";
    dayInput.style.borderColor = "red";
  } else {
    dayValid.style.display = "none";
    dayInput.style.borderColor = "hsl(0, 0%, 86%)";
  }
  if (monthInput.value > 12 || monthInput.value == "") {
    monthValid.style.display = "block";
    monthInput.style.borderColor = "red";
  } else {
    monthValid.style.display = "none";
    monthInput.style.borderColor = "hsl(0, 0%, 86%)";
  }
  if (
    yearInput.value > date.getFullYear() ||
    yearInput.value == "" ||
    yearInput.value < 1950
  ) {
    yearValid.style.display = "block";
    yearInput.style.borderColor = "red";
  } else {
    yearValid.style.display = "none";
    yearInput.style.borderColor = "hsl(0, 0%, 86%)";
  }
  let birthDate = new Date(
    `${yearInput.value}-${monthInput.value}-${dayInput.value}`
  );
  calcAge(birthDate);
});

toggler.addEventListener("click", () => {
  
  drkbdy.classList.toggle("dark-body");
  darkBox.classList.toggle("dark");
  inputs.forEach((inp) => {
    inp.classList.toggle("dark-input");
  });
  darlabel.forEach((lbl) => {
    lbl.classList.toggle("dark-text");
  });
  resDark.forEach((r) => {
    r.classList.toggle("dark-text");
  });
});

function calcAge(bd) {
  let diff = date - bd;
  let age = new Date(diff);
  let y = age.getFullYear() - 1970;
  if (y > 90) {
    return 0;
  }
  let m = age.getMonth();
  let d = age.getDate() - 1;
  year.innerHTML = Math.trunc(y);
  month.innerHTML = Math.trunc(m);
  day.innerHTML = Math.trunc(d);
}
let d = new Date("99-1-1");
let ddd = date - d;
let r = new Date(ddd);

console.log(r.getFullYear() - 1970);
