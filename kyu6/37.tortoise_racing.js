function race(v1, v2, g) {
    let speed1 = v1 / 3600;
    let speed2 = v2 / 3600;

    let selisihKecepatan = speed2 - speed1;
    let waktuDetik = Math.floor(g / selisihKecepatan + 1e-9);
    // Hindari error floating point dengan menambahkan epsilon kecil
    console.log(waktuDetik)

    let hour = Math.floor(waktuDetik / 3600);
    let minute = Math.floor((waktuDetik % 3600) / 60);
    let second = Math.floor(waktuDetik % 60)

    return [hour, minute, second]

    //kiss
    /*
    let time=g/(v2-v1);
    return v2>v1 ? [Math.floor(time),Math.floor(time*60%60),Math.floor(time*3600%60)] : null;
    */
}

// console.log(race(720,850,70));
// console.log(race(80,91,37));
// console.log(race(80,100,40));
console.log(race(405, 495, 140)); //[ 1, 33, 20 ]
console.log(race(116, 215, 99)); //[ 1, +0, +0 ]