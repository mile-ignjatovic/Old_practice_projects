var bills = [124, 48, 268];
var tip;
function tipCalc(bill) {
    if (bill < 50) {
        tip = 0.2;
    } else if (bill > 50 && bill < 200) {
        tip = 0.15; 
    } else {
        tip = 0.1;
    }
    return bill * tip;
}

var billTips = [tipCalc(bills[0]), tipCalc(bills[1]), tipCalc(bills[2])];
var paid = [bills[0]+billTips[0], bills[1]+billTips[1], bills[2]+billTips[2]];

console.log('tips: ' + billTips);
console.log('paid: ' + paid);