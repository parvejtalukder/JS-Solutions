var fastName = "Parvej";
var middleName = "Husen";
var lastName = "Talukder";
var name = fastName.concat(" ").concat(middleName).concat(" ").concat(lastName);
// console.log(name);
var arrname = name.split(" ");
var STRname = arrname.join(" + ");
// console.log(STRname);
// var rev = ' ';
// for (const no of STRname) {
//     // console.log(no);
//     rev = no + rev;
// }
// console.log(rev);
const rev = STRname.split(" ").reverse().join(" ");
// console.log(rev);
const pht = {
    name: "Parvej Husen Talukder", 
    age: 19,
    prof: {
        one: "Engineer",
        div: "and",
        thr: "Poet"
    }
}
console.log(pht.prof.one);