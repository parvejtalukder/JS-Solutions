/** Problem -01 ( Divide the Asset ) */
var area = 800;
if (area > 0 && area <= 1000000000) {
    console.log(area/2);
}

/** Problem -02 ( Cycle or Laptop ) */
var money = 10000;
if (money > 0 && money <= 1000000000) {
    if (money >= 25000) {
        console.log("Laptop");
    } else if (money >= 10000 && money < 25000) {
        console.log("Cycle");
    } else {
        console.log("Chocolate");
    }
}

/** Problem -03 ( Medicine Planner ) */
var lastDay = 11;
if (lastDay > 3 && lastDay <= 30) {
    for(var runner = 1; runner <= lastDay; runner++) {
        if (runner % 3 == 0) {
            console.log(runner + " - medicine");
        } else {
            console.log(runner + " - rest");
        }
    }
}

/** Problem 04 - (Delete / Store) */
var fileName = "pdfData.jpg";  
var start, part, end;
start = fileName[0];  
part = fileName.split(".");  
end = part[part.length - 1];  
if (start === "#" || end === "pdf" || end === "docx") {
    console.log("Store");
} else {
    console.log("Delete");
}

/** Problem 05 - ( PH Email Generator )  */
var student= { name: "jhankar" , roll: 1014 ,department: "cse" };

var user_of_email = student.name + student.roll + "." + student.department;
var provider_of_email = "@ph.ac.bd"
console.log(user_of_email+provider_of_email);

/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;

var incre_per_year = 5 / 100;  
var salary = startingSalary;
for (var year = 1; year <= experience; year++) {
    salary = salary + (salary * incre_per_year);
}
console.log(salary.toFixed(2));
