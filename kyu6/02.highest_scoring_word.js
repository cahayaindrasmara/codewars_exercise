function high(x) {
    let word = x.split(" ");
    let maxScore = 0;
    let maxWord = "";
    //console.log("word:", word);
    for (let i = 0; i < word.length; i++) {
        let count = 0;
        //console.log("looping ke-1:", word[i]);
        for (let j = 0; j < word[i].length; j++) {
            //console.log("looping ke-2:", word[i][j]);
            count += word[i].charCodeAt(j) - 96
        }
        if (count > maxScore) {
            maxScore = count;
            maxWord = word[i];
        }
    }
    return maxWord;
}

console.log(high("man i need a taxi up to ubud")); // "taxi"
console.log(high("what time are we climbing up the volcano")); // "volcano"
console.log(high("take me to semynak")); // "semynak"
console.log(high("aa b")); // "aa"
console.log(high("bb d")); // "bb"
console.log(high("d bb")); // "d"
console.log(high("aaa b")); // "aaa"

/* 
function high(x){
  var arr = x.toLowerCase().split(" ");
  var sum = 0;
  var holder = 0;
  var holder2 = 0;
  for(var i = 0; i < arr.length; i++) {
  
    for(var j = 0; j < arr[i].length; j++) {
    
      sum += arr[i].charCodeAt(j) - 96;
      
    }
  
    if (sum > holder) { 
      holder = sum;
      holder2 = i;

     }
    sum = 0;
  }
   console.log(arr[holder2]);
   return arr[holder2];
  
}
*/