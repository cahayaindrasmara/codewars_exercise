function Node(data) {
    this.data = data;
    this.next = null;
}

function length(head) {
    let count = 0;
    let current = head;
    while (current !== null) {
        count++;
        current = current.next;
    }

    return count;
}

function count(head, data) {
    let total = 0;
    let current = head;
    while (current !== null) {
        if (current.data === data) {
            total++
        }
        current = current.next;
    }

    return total;
}

console.log(length(new Node(99)));
console.log(length(null));
// console.log(buildOneTwoThree())
console.log(length(buildOneTwoThree())); //3