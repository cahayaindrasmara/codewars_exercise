/*
Sebuah robot sedang mencoba memanjat tembok setinggi wallHeight meter.
Robot bisa memanjat sejauh climb meter setiap detik.
Namun karena gravitasi, setiap detik setelah memanjat, robot akan tergelincir turun sejauh slip meter.
Proses ini berulang setiap detik:

Naik climb

Turun slip

Robot akan berhenti saat ia mencapai atau melewati puncak tembok setelah memanjat (sebelum tergelincir lagi).
*/

function climbingTime(wallHeight, climb, slip) {
    if (climb <= slip && climb < wallHeight) return -1

    let count = 0;
    let currentJump = 0;

    while (true) {
        count++
        currentJump += climb;
        console.log("current:", currentJump);

        if (currentJump >= wallHeight) break;

        currentJump -= slip;
        console.log("jatuh:", currentJump)
    }
    return count
}

console.log(climbingTime(10, 3, 1))
console.log(climbingTime(10, 5, 1))
console.log(climbingTime(10, 2, 2))
console.log(climbingTime(8, 10, 2))
