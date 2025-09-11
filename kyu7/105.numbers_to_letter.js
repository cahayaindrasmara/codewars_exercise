function switcher(x) {
    let code = x.map(char => +char >= 1 && +char <= 26 ? String.fromCharCode(123 - +char)
        : char === "27" ? String.fromCharCode(60 - +char)
            : char === "29" ? String.fromCharCode(61 - +char)
                : "?"
    ).join("")

    return code;

    //index way
    /*
    const alpha = ' zyxwvutsrqponmlkjihgfedcba!? '
    const switcher = x => x.map(item => alpha[item]).join('')
    */

    //other way

    /*
    function switcher(x)
    {
    return x.map(a => 
        {
        if(a == 27) return "!";
        if(a == 28) return "?";
        if(a == 29) return " ";
        return String.fromCharCode(97 + 26 - parseInt(a));
        
        }).join('');
    }
    */
}


console.log(switcher(['24', '12', '23', '22', '4', '26', '9', '8']));//codewars
console.log(switcher(['25', '7', '8', '4', '14', '23', '8', '25', '23', '29', '16', '16', '4'])); //btswmdsbd kkw