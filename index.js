function getLotteryDrawDate(date) {
    var lotteryDrawDate = new Date(date || new Date());
    if (lotteryDrawDate.getDay() < 4) {
        // get next wednesday
        getSpecificDay(lotteryDrawDate, 3);

        // get next saturday
        if (lotteryDrawDate.getHours() > 20) {
            getSpecificDay(lotteryDrawDate, 6);
        }
    } else {
        // get next saturday
        getSpecificDay(lotteryDrawDate, 6);
    }
    lotteryDrawDate.setHours(20, 00, 00);
    return lotteryDrawDate.toLocaleString();
}

function getSpecificDay(lotteryDrawDate, iterator) {
    return lotteryDrawDate.setDate(lotteryDrawDate.getDate() + (iterator - lotteryDrawDate.getDay()));
}

var tomorrow = new Date();
tomorrow.setDate(new Date().getDate() + 1);

var nextThursday = new Date();
nextThursday.setDate(new Date().getDate() + 3);

console.log(getLotteryDrawDate(new Date()));
console.log(getLotteryDrawDate(tomorrow));
console.log(getLotteryDrawDate(nextThursday));
console.log(getLotteryDrawDate(new Date("2020-04-22 21:00")))


