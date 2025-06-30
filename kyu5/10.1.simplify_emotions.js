function simplifyEmotion(emotions) {
    const opposite = {
        "HAPPY": "SAD",
        "SAD": "HAPPY",
        "ANGRY": "CALM",
        "CALM": "ANGRY",
    }

    let stack = [];

    for (let i = 0; i < emotions.length; i++) {
        const currentEmotion = emotions[i];
        const prevEmotion = stack[stack.length - 1];

        if (opposite[currentEmotion] === prevEmotion) {
            stack.pop();
        } else {
            stack.push(currentEmotion);
        }
    }

    return stack;
}

console.log(simplifyEmotion(["HAPPY", "SAD", "ANGRY", "CALM", "CALM", "ANGRY", "HAPPY"]
))