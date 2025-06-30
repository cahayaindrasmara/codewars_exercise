function simplifyActions(actions) {
    let stack = [];

    for (let i = 0; i < actions.length; i++) {
        let current = actions[i];
        let top = stack[stack.length - 1];

        if (current === "UNDO" && top === "DO") {
            stack.pop();
        } else if (current === "REDO" && top === "UNDO") {
            stack.pop();
        } else {
            stack.push(current);
        }

        if (stack.length === 0) {
            stack.push(current)
        }
    }

    return stack;
}

console.log(simplifyActions(["DO", "UNDO", "REDO", "DO", "DO", "UNDO", "UNDO"]));
// Output: [REDO]
