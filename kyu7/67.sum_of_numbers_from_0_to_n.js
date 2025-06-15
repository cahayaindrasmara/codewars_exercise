var SequenceSum = (function () {
    function SequenceSum() { }

    SequenceSum.showSequence = function (count) {
        if (count < 0) return `${count}<0`;
        if (count === 0) return "0=0";

        let sum = 0;
        let word = "";
        for (let i = 0; i <= count; i++) {
            // console.log(i);
            sum += i;

            if (i < count) {
                word += `${i}+`
            } else {
                word += `${i} = ${sum}`
            }
        }
        return word;
    }

    return SequenceSum;
})();

console.log(SequenceSum.showSequence(6));
console.log(SequenceSum.showSequence(0));
console.log(SequenceSum.showSequence(-12));