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