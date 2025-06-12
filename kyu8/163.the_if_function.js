function _if(bool, func1, func2) {
    // console.log("alamat:", func1);
    // console.log("output:", func1());
    return bool ? func1() : func2();
}

console.log(_if(true, () => 42, () => 0))