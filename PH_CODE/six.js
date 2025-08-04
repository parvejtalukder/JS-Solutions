/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;

var incre_per_year = 5 / 100;  
var salary = startingSalary;
for (var year = 1; year <= experience; year++) {
    salary = salary + (salary * incre_per_year);
}
console.log(salary.toFixed(2));
