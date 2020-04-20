function getLotteryDrawDate(date) {
    var lotteryDrawDate = new Date(date || new Date());
    if (lotteryDrawDate.getDay() < 4) {
        // get next wednesday
        lotteryDrawDate.setDate(lotteryDrawDate.getDate() + (3 - lotteryDrawDate.getDay()));
    } else {
        // get next saturday
        lotteryDrawDate.setDate(lotteryDrawDate.getDate() + (6 - lotteryDrawDate.getDay()));
    }
    return lotteryDrawDate.toLocaleDateString();
}

var tomorrow = new Date();
tomorrow.setDate(new Date().getDate() + 1);

var nextThursday = new Date();
nextThursday.setDate(new Date().getDate() + 3);

console.log(getLotteryDrawDate(new Date()));
console.log(getLotteryDrawDate(tomorrow));
console.log(getLotteryDrawDate(nextThursday));