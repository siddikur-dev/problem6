

/** Problem -03 ( Medicine Planner ) */
var lastDay = 6;
//write your code here

for (var i = 1; i <= lastDay; i++) {
  if (i % 3 === 0) {
    console.log(i + " - " + "medicine");
  } else {
    console.log(i + " - " + "rest");
  }
}



/** Problem 05 - ( PH Email Generator )  */
var student = { name: "mewo", roll: 96, department: "cse" };
//write your code here

var studentEmailGenerator =
  student.name.toLowerCase() +
  student.roll +
  "." +
  student.department.toLowerCase() +
  "@ph.ac.bd";
console.log(studentEmailGenerator);

/** Problem 06 :  Current Salary ( Challenge Problem ) */
var experience = 3;
var startingSalary = 15000;
//write your code here

var currentSalary = startingSalary * Math.pow(1.05, experience);
console.log(currentSalary.toFixed(2));
