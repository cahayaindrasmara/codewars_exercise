function foldTo(distance) {
    let paper = 0.0001;
    let folds = 0;
    if (distance <= 0) {
        return null;
    } else {
        while (distance > paper) {
            paper *= 2;
            console.log(paper)
            folds += 1;
        }
    }
    return folds;
}

console.log(foldTo(384000000))