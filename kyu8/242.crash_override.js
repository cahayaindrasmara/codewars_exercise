function aliasGen(first, last) {
    firstName = {
        A: 'Alpha',
        B: 'Beta',
        C: 'Cache',
        D: 'Data',
        E: 'Energy',
        F: 'Function',
        G: 'Glitch',
        H: 'Half-life',
        I: 'Ice',
        J: 'Java',
        K: 'Keystroke',
        L: 'Logic',
        M: 'Malware',
        N: 'Nagware',
        O: 'OS',
        P: 'Phishing',
        Q: 'Quantum',
        R: 'RAD',
        S: 'Strike',
        T: 'Trojan',
        U: 'Ultraviolet',
        V: 'Vanilla',
        W: 'WiFi',
        X: 'Xerox',
        Y: 'Y',
        Z: 'Zero'
    }

    surname = {
        A: 'Analogue',
        B: 'Bomb',
        C: 'Catalyst',
        D: 'Discharge',
        E: 'Electron',
        F: 'Faraday',
        G: 'Gig',
        H: 'Hacker',
        I: 'IP',
        J: 'Jabber',
        K: 'Killer',
        L: 'Lazer',
        M: 'Mike',
        N: 'n00b',
        O: 'Overclock',
        P: 'Payload',
        Q: 'Quark',
        R: 'Roy',
        S: 'Spy',
        T: 'T-Rex',
        U: 'Unit',
        V: 'Virus',
        W: 'Worm',
        X: 'X',
        Y: 'Yob',
        Z: 'Zombie'
    }

    //   console.log(firstName);
    //   console.log(surname);
    let checkChar = /[^a-zA-Z]/;

    if (checkChar.test(first[0]) || checkChar.test(last[0])) {
        return "Your name must start with a letter from A - Z."
    }

    for (let item in firstName) {
        //     console.log(item, firstName[item]);

        if (first[0].toUpperCase() === item) {
            first = firstName[item]
        }
    }

    for (let item in surname) {
        if (last[0].toUpperCase() === item) {
            last = surname[item]
        }
    }

    return `${first} ${last}`;
}

console.log(aliasGen("Mike", "Milington")); //Malware Mike
console.log(aliasGen("Fahima", "Tash")); //Function T-Rex
console.log(aliasGen("Daisy", "Petrovic")); //Data Payload
console.log(aliasGen("7393424", "Anumbha")); //Your name must start with a letter from A - Z.