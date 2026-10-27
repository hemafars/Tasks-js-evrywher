const name = "hema";
const age = 40;
const city = "egypt";
const score = 90;
// if (score === 95) {
//   console.log("Excellent");
// } else if (score >= 70) {
//   console.log("good");
// } else {
//   console.log("needs woork");
// }

const scores =
  score === 95
    ? console.log("Excellent")
    : score >= 70
      ? console.log("good")
      : console.log("needs woork");

const names = ["salma", "mlk", "mohamed", "yaseen"];
for (let name of names) {
  if (name.length >= 6) {
    console.log(`${name}`);
  }
}

// if(){

// }
