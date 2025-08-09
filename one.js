// my func
let a = 100;

const ans = SumAllNum(a);
console.log(ans);

function SumAllNum(num) {
    let sum = 0;
    for(let i = 1; i <= a; i++) {
        sum+=i;
    }
    return sum;
}