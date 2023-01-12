// let bonuspoint = 50;
// console.log(bonuspoint);

// bonuspoint = bonuspoint + 50;
// console.log(bonuspoint);

// bonuspoint = bonuspoint - 75;
// console.log(bonuspoint);

// bonuspoint = bonuspoint + 45;
// console.log(bonuspoint);

// function increment() {
//   console.log("the button was cliked");
// }

// function firstfunc() {
//   console.log(42);
// }

// firstfunc();

// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;

// function laptime() {
//   let totlaptime = lap1 + lap2 + lap3;
//   console.log(totlaptime);
// }

// laptime();

// let lapscompleted = 0;

// function lapscomplete() {
//   lapscompleted = lapscompleted + 1;
// }

// lapscomplete();
// lapscomplete();
// lapscomplete();

// console.log(lapscompleted);

// MAIN
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
  count += 1;
  countEl.innerText = count;
}

let saveEl = document.getElementById("save-el");

function save() {
  let countstr = count + " - ";
  saveEl.textContent += countstr;
  countEl.textContent = 0;
  count = 0;
  console.log(count);
}
