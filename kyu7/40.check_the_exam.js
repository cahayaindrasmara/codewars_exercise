function checkExam(array1, array2) {
    let result = 0;

    for (let i = 0; i < array1.length; i++) {
        console.log(array1[i])
        let correct = false;
        let blank = false;
        for (let j = 0; j < array2.length; j++) {
            console.log("2:", array2[i]);
            if (i === j && array1[i] === array2[j]) {
                correct = true;
                break;
            } else if (i === j && array2[j] === "") {
                blank = true;
            }
        }

        if (correct) {
            result += 4
        } else if (blank) {
            result += 0
        } else {
            result += -1
        }
    }

    return result < 0 ? 0 : result;

    /* bisa seperti ini karna length nya sama
    var score = 0;
        for (var i = 0; i < array2.length; i++){
            if (array2[i] === ""){
                score += 0
            } else if (array1[i] === array2[i]){
                score += 4
            } else if (array1[i] !== array2[i]){
                score -= 1
            }
        } 
            if (score >= 0){
            return score;
            } else {
            return 0
            }
    */

}


console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"])) //6
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""])) //7
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"])) //16
console.log(checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"])) //0
