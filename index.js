function getNextDraw(date = new Date()) {
    let d = new Date(+date);

    // If after 8 pm, set to midnight, i.e. next day 00:00:00
    if (d.getHours > 19) {
        d.setHours(24, 0, 0, 0);
    }

    // Set time to 8 pm
    d.setHours(20, 0, 0, 0);

    // Get the day of the week
    let day = d.getDay();

    // If Sun to Tue, set to Wed
    if (day < 3) {
        d.setDate(d.getDate() + 3 - day);
        // If Thu to Fri, set to Sat
    } else if (day > 3 && day < 6) {
        d.setDate(d.getDate() + 6 - day);
    }

    // Otherwise, already set to Wed or Sat
    return d;
}

// One week's worth of dates
for (let date = new Date(2020, 3, 27), i = 0; i < 7; i++) {
    console.log(date.toString().substr(0, 24) + ' : ' + getNextDraw(date).toString().substr(0, 24));
    date.setDate(date.getDate() + 1);
}