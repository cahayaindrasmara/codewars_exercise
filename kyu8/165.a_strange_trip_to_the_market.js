function isLochNessMonster(s) {
    let regex = /3\.50|tree fiddy/.test(s);
    // console.log(regex);
    return regex;
}

console.log(isLochNessMonster("Your girlscout cookies are ready to ship. Your total comes to tree fiddy")); //true
console.log(isLochNessMonster("Hello, I come from the year 3150 to bring you good news!")) //false
console.log(isLochNessMonster("I'm from Scottland. I moved here to be with my family sir. Please, $3.50 would go a long way to help me find them")); //true
console.log(isLochNessMonster("By 'tree fiddy' I mean 'three fifty'")); //true
