const students = [
  {
    name: "Sara",
    source: 92,
  },
  {
    name: "Omar",
    source: 68,
  },
  {
    name: "Lina",
    source: 79,
  },
];
let PASS = 0;
let FAIL = 0;
for (const student of students) {
  if (student.source <= 75) {
    console.log(`${student.name} :${student.source} => PASS`);
    PASS++;
  } else {
    console.log(`${student.name} :${student.source} => FAIL`);
    FAIL++;
  }
}
console.log(`${PASS} of ${students.length} students passed.`);
console.log(`${FAIL} of ${students.length} students failed.`);
// const scores = [
//   {
//     math: 90,
//     ar: 89,
//     en: 92,
//     cince: 85,
//   },
// ];

// for (let i = 0; i < 50; i++) {
//   console.log(i);
// }
