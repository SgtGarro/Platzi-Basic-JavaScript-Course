var students = ["Maria", "Sergio", "Rosa", "Daniel"];

function grettingsStudents(student) {
  console.log(`Hello, ${student}`);
}

while (students.length > 0) {
  var student = students.shift();
  grettingsStudents(student);
}
