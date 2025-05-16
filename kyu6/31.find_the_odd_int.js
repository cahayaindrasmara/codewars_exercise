// function findOdd(A) {
//     let countOdd = {};

//     for (let i = 0; i < A.length; i++) {
//         countOdd[A[i]] = (countOdd[A[i]] || 0) + 1;
//     }
//     console.log(countOdd)

//     for (let count in countOdd) {
//         if (countOdd[count] % 2 === 1) {
//             return +count;
//         }
//     }
// }

const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
// menggunakan operasi XOR
/*
Step-by-step reduce:

1 ^ 2 = 3
3 ^ 3 = 0
0 ^ 2 = 2
2 ^ 3 = 1
1 ^ 1 = 0
0 ^ 5 = 5 ✅

xor itu bekerja di level bit (binner) dari angka
untuk setiap posisi bit:
- kalau bitnya sama (0 atau 0 dan 1 atau 1), hasilnya 0
- kalau bitnya beda (0 dan 1) hasil nya 1

xor itu mengubah decimal ke binner, lalu setelah diseleksi mengubah binner ke decimal kembali
*/

console.log(findOdd([0, 1, 0, 1, 0])); // 0
console.log(findOdd([7])); // 7
console.log(findOdd([0])); // 0
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])); //4
