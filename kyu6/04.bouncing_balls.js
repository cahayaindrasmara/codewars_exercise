function bouncingBall(h, bounce, window) {
    if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
        return -1;
    }

    let total = 1;
    let height = bounce * h;

    while (height > window) {
        total += 2;
        height *= bounce;
    }

    return total;
}

console.log(bouncingBall(3.0, 0.66, 1.5)); //3
console.log(bouncingBall(30.0, 0.66, 1.5)); //15
console.log(bouncingBall(3.0, 1.0, 1.5)); // -1

/* 

lantai ke - n
tinggi lantai dari permukaan tanah diketahui

h = 30
bounce = 0,66
window = 1,5

pertama kali jatuh +1, sebelum loop dimulai
30 * 0,66 = 19,8 > 1,5 -> +2 (naik turun)
19,8 * 0,66 = 13, 068 > 1,5 -> + 2 (naik dan turun)
13,068 * 0,66 = 8,62488 > 1,5 -> + 2 (naik turun)
8,62488 * 0,66 = 5,6924208 > 1,5 -> + 2 (naik turun
5,6924208 * 0,66 = 3,756997728 > 1,5 -> + 2
3,756997728 * 0,66 = 2,47961850048 > 1,5 -> +2
2,47961850048 * 0,66 = 1,6365482103168 > 1,5 + 2
1,6365482103168 * 0,66 = 1,080121818809088 < 1,5 X

*/