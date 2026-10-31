const students = [
  { name: "Ahmed", score: 85, attendance: 90 },
  { name: "Sara", score: 92, attendance: 95 },
  { name: "Mohamed", score: -2, attendance: 80 },
  { name: "Layla", score: 88, attendance: 85 },
  { name: "Omar", score: 65, attendance: 70 },
  { name: "Nour", score: 95, attendance: 60 },
  { name: "Youssef", score: 72, attendance: 75 },
  // ⚠️ Broken Record: اسم فارغ + درجة غير رقمية + حضور غير صحيح
  { name: "", score: "غير متوفر", attendance: 150 },
];
// الدرجة	التقدير
// 90–100	A
// 80–89	B
// 70–79	C
// 60–69	D
// أقل من 60	F
let skippedRecords = 0;
let atRiskCount = 0;
let countA = 0;
let countB = 0;
let countC = 0;
let countD = 0;
let countF = 0;
let totalScore = 0;
let highestStudent = null;
let lowestStudent = null;

console.log(
  "Name".padEnd(15) +
    "Score".padStart(7) +
    "Attendance".padStart(15) +
    "Grade".padStart(10) +
    "Status".padStart(12),
);
console.log("-".repeat(59));
for (const student of students) {
  if (
    typeof student.name !== "string" ||
    student.name.trim() === "" ||
    typeof student.score !== "number" ||
    student.score > 100 ||
    student.score < 0 ||
    typeof student.attendance !== "number" ||
    student.attendance > 100 ||
    student.attendance < 0
  ) {
    console.log(`${student.name} السجل غير صالح`);

    skippedRecords++;
    continue;
  }

  if (highestStudent === null || student.score > highestStudent.score) {
    highestStudent = { name: student.name, score: student.score };
  }
  if (lowestStudent === null || student.score < lowestStudent.score) {
    lowestStudent = { name: student.name, score: student.score };
  }
  if (student.attendance < 70 || student.score < 60) {
    atRiskCount++;
  }
  let grade = "";
  let status = "";
  if (student.attendance < 70 || student.score < 60) {
    status = "At Risk";
  } else {
    status = "Normal";
  }

  totalScore += student.score;

  if (student.score >= 90) {
    grade = "A";
    countA++;
  } else if (student.score >= 80) {
    grade = "B";
    countB++;
  } else if (student.score >= 70) {
    grade = "C";
    countC++;
  } else if (student.score >= 60) {
    grade = "D";
    countD++;
  } else if (student.score < 60) {
    grade = "F";
    countF++;
  }
  console.log(
    student.name.padEnd(15) +
      String(student.score).padStart(7) +
      String(student.attendance).padStart(15) +
      grade.padStart(10) +
      status.padStart(12),
  );
}

console.log(`السجلات غير صالحه${skippedRecords}`);
console.log(`ضعيف الحضور${atRiskCount}`);
console.log(`A: ${countA}`);
console.log(`B: ${countB}`);
console.log(`C: ${countC}`);
console.log(`D: ${countD}`);
console.log(`F: ${countF}`);
console.log(`Highest: ${highestStudent.name} - ${highestStudent.score}`);
console.log(`lowes: ${lowestStudent.name} - ${lowestStudent.score}`);

console.log(
  `Average: ${(totalScore / (students.length - skippedRecords)).toFixed(1)}`,
);
// console.log(name.padEnd(15) + String(score).padStart(5));
