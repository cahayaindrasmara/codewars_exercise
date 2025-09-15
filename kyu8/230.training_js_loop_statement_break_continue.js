function grabDoll(dolls) {
    var bag = [];
    //coding here

    for (let i = 0; i < dolls.length; i++) {
        //     console.log(dolls[i]);

        if (dolls[i] === "Barbie doll" || dolls[i] === "Hello Kitty") {
            bag.push(dolls[i]);
        }

        if (bag.length < 3) {
            continue;
        } else if (bag.length === 3) {
            break;
        }
    }

    return bag;
}

console.log(grabDoll(["Mickey Mouse", "Hello Kitty", "Snow white"]));
console.log(grabDoll(["Mickey Mouse", "Hello Kitty", "Hello Kitty", "Barbie doll", "Snow white"]));
console.log(grabDoll(["Mickey Mouse", "Barbie doll", "Hello Kitty", "Hello Kitty", "Hello Kitty", "Snow white"]));