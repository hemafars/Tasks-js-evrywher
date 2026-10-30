for (let i = 0; i < 20; i++) {
  if (i % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}
// num = 6 % 3;
// console.log(num);
const traks = ["html", "css", "JavaScript", "React", "Python", "Node.js"];
// console.log(traks);
for (let i of traks) {
  console.log(`${traks.indexOf(i) + 1} : ${i}`);
}

const students = {
  name: "Hema",
  age: 40,
  city: "Egypt",
  score: 95,
  track: "JavaScript",
};

for (let student in students) {
  console.log(student + ":" + students.age);
}
let num = 100;
while (num >= 1) {
  console.log(num);
  num = num / 2;
}

let num2 = 10;
do {
  console.log(num2);
  num2--;
} while (num2 > 10);

const scores = [35, 70, 45, 80, 98, 60, 100, 40];
for (let score of scores) {
  if (score < 50) {
    continue;
  } else if (score > 95) {
    break;
  }
  console.log(score);
}
// 70 ، 80
// تم تخطي الارقام اقل من 50 باستخدام continue
//تم ايقاف الكود بعد 95 باستخدام break
let sum = 0;
let avr = 0;
let highest = scores[0];
let lowest= scores[0];
for (let score of scores) {
  sum = sum + score;
  console.log(sum);
  if (score > highest) {
    highest = score;
  }
  if (score < lowest) {
    lowest = score;
  }
}
avr = sum / scores.length;
console.log(`avr : ${avr}`);
console.log(`highest : ${highest}`);
console.log(`Lowest : ${lowest}`);
