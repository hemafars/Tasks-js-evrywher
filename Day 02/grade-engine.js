// 90–100  → A
// 80–89   → B
// 70–79   → C
// 60–69   → D
// below 60 → F
const digr = 61;
if (digr > 100 || digr < 0) {
  console.log("Invalid score");
} else if (digr >= 90) {
  console.log("a");
} else if (digr >= 80) {
  console.log("b");
} else if (digr >= 70) {
  console.log("c");
} else if (digr >= 60) {
  console.log("d");
} else {
  console.log("f");
}

let student = digr >= 60 ? console.log("Pass") : console.log("Fial");
//لا ينصح باستخدام هذا الكود او هذه الطريقة في كتابة اكثر من شرط لان الكود سيكون غير قابل للقراءة

// switch (expression) {
//   case x:
//     // code block
//     break;
//   case y:
//     // code block
//     break;
//   default:
//   // code block
// }
let day;
let date = new Date().getDay();
console.log(date);

switch (date) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
}
console.log(day);
const score = 70;
const attendance = 80;
if (score >= 70 && attendance >= 80) {
  console.log("Certificate awarded");
} else {
  console.log(`score${score} , attendance${attendance}`);
}

if (score >= 70 || attendance >= 80) {
  console.log("Review needed");
} else {
  console.log(`score${score} , attendance${attendance}`);
}
