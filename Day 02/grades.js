const grades = [
  {
    name: "hema",
    grade: 90,
  },
  {
    name: "amir",
    grade: 80,
  },
  {
    name: "amr",
    grade: 70,
  },
  {
    name: "nada",
    grade: 60,
  },
  {
    name: "yaser",
    grade: 50,
  },
];
//Three bands: 90+ Excellent · 70–89 Good · below 70 Needs work
let Excellent = 0;
let Good = 0;
let NeedsWork = 0;

for (const student of grades) {
  // 90+ Excellent
  if (student.grade >= 90) {
    console.log(`${student.name} =>${student.grade} `);
    Excellent++;
  } else if (student.grade >= 70) {
    console.log(`${student.name} =>${student.grade} `);
    Good++;
    // below 70 Needs work
  } else {
    console.log(`${student.name} =>${student.grade} `);
    NeedsWork++;
  }
}
console.log(
  `Excellent: ${Excellent} ,  Good : ${Good} , NeedsWork : ${NeedsWork}`,
);
