function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
    let peopleTime = pontoonDistance / youSpeed;
    let effectiveSharkSpeed = dolphin ? sharkSpeed / 2 : sharkSpeed;
    let sharkTime = sharkDistance / effectiveSharkSpeed;

    return sharkTime <= peopleTime ? "Shark Bait!" : "Alive";
}

console.log(shark(12, 50, 4, 8, true)); //Alive!
console.log(shark(24, 0, 4, 8, true)); //Shark Bait!
console.log(shark(7, 55, 4, 16, true)); //Alive!