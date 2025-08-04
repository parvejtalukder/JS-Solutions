/** Problem 05 - ( PH Email Generator )  */
var student= { name: "jhankar" , roll: 1014 ,department: "cse" };

var user_of_email = student.name + student.roll + "." + student.department;
var provider_of_email = "@ph.ac.bd"
console.log(user_of_email+provider_of_email);