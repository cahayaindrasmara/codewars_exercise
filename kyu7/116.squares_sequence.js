function squares(x, n) {
    if (n <= 0) return 0;

    let list = [x];

    for (let i = 0; i < n - 1; i++) {
        list.push(list[i] ** 2);
    }

    // console.log(list);
    return list;

    //rekursif
    // const squares = (x, n) => n > 0 ? [x, ...squares(x ** 2, n - 1)] : [];

    // another way
    // for(let i = x; arr.length < n; i*=i) {
    //       arr.push(i);
    //   }
    //   return arr
}

console.log(squares(2, 5)); //[ 2, 4, 16, 256, 65536 ]
console.log(squares(3, 3)); //[ 3, 9, 81 ]
console.log(squares(5, 3)); //[ 5, 25, 625 ]
