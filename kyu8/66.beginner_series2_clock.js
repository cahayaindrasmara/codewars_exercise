function past(h, m, s) {
    let hour = 24 - (24 - h);
    //   console.log("#hour:",hour);
    let minute = 60 - (60 - m);
    //   console.log("#minute:",m);
    let second = 3600 - (3600 - s);
    //   console.log("#second:", second);

    if (h === hour) hour *= 3600000;

    if (m === minute) minute *= 60000;

    if (s === second) second *= 1000;

    // return h * 3600000 + m * 60000  + s * 1000;
    // keep it simple stupid

    return hour + minute + second;
}

console.log(past(0, 1, 1)); //61000
console.log(past(1, 1, 1)); //3661000
console.log(past(0, 0, 0)); //61000
console.log(past(1, 0, 1)); //3601000