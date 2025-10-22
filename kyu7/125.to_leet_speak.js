function toLeetSpeak(str) {
    let leet = {
        A: '@',
        B: '8',
        C: '(',
        D: 'D',
        E: '3',
        F: 'F',
        G: '6',
        H: '#',
        I: '!',
        J: 'J',
        K: 'K',
        L: '1',
        M: 'M',
        N: 'N',
        O: '0',
        P: 'P',
        Q: 'Q',
        R: 'R',
        S: '$',
        T: '7',
        U: 'U',
        V: 'V',
        W: 'W',
        X: 'X',
        Y: 'Y',
        Z: '2'
    }

    let result = ""

    for (let i = 0; i < str.length; i++) {
        //     console.log(str[i]);
        let found = false;
        let check = ""

        for (let char in leet) {
            //       console.log("inner loop:", char);

            if (str[i] === char) {
                found = true;
                check = char;
            }
        }

        if (found) {
            result += leet[check]
        } else {
            result += str[i]
        }
    }

    console.log(result);
    return result;

    //kiss
    //  return str.split('').map(char => alpha[char] || char).join('');

}

console.log(toLeetSpeak("LEET")) //1337
console.log(toLeetSpeak("HELLO WORLD")) //#3110 W0R1D
