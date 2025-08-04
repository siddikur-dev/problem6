/** Problem 05 - ( PH Email Generator )  */
var student = { name: "mewo", roll: 96, department: "cse" };

var studentEmailGenerator =
  student.name.toLowerCase() +
  student.roll +
  "." +
  student.department.toLowerCase() +
  "@ph.ac.bd";
console.log(studentEmailGenerator);
