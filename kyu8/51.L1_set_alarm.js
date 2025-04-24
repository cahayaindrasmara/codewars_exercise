function setAlarm(employed, vacation) {
    if ((employed === true && vacation === true) || (employed === false && vacation === false)) {
        return false
    } else if (employed === true) {
        return true;
    } else if (vacation === true) {
        return false;
    }

    // const setAlarm = (employed, vacation) => employed && !vacation;
    // keep it simple stupid
}

console.log(setAlarm(true, true)); //false
console.log(setAlarm(false, true)); //false
console.log(setAlarm(true, false)); //true
