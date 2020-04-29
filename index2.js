function getNextDraw(date = new Date()) {
    let d = new Date(+date);
    d.setHours(d.getHours() < 20 ? 20 : 24, 0, 0, 0);
    d.setDate(d.getDate() + Math.ceil((d.getDay() || 1) / 3) * 3 - d.getDay());
    return d;
}

// One week's worth of dates
for (let date = new Date(2020, 3, 27), i = 0; i < 7; i++) {
    console.log(date.toString().substr(0, 24) + ' : ' + getNextDraw(date).toString().substr(0, 24));
    date.setDate(date.getDate() + 1);
}