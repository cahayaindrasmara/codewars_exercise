function cutIt(arr){
  let result = [];
  let min = arr[0].length;
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    if (min > arr[i].length) {
      min = arr[i].length;
    }
  }
  
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i].slice(0, min))
  }
  
  return result;

  /*
  simple way
  const minLength = Math.min(...arr.map(x => x.length));
  return arr.map(x => x.slice(0, minLength));
  */
}

console.log(cutIt(["ab","cde","fgh"])); //[ 'ab', 'cd', 'fg' ]
console.log(cutIt(["codewars","javascript","java"])); //[ 'code', 'java', 'java' ]