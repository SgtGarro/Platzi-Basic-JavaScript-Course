var students = ["Maria", "Sergio", "Rosa", "Daniel"];

function grettingsStudents(student) {
  console.log(`Hello, ${student}`);
}

// for (var i = 0; i < students.length; i++) {
//   grettingsStudents(students[i]);
// }

for (var student of students) {
  grettingsStudents(student);
}
