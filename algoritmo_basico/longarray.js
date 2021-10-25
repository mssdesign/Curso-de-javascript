function findLongestWordLength(str) {
    let arr = str.split(" ");
    let arr2 = [];
    let arr3 = 0;
    for(let word in arr) {
      if (word.length > 0) {
        arr2.push(arr[word].length);
      }
    }
    for (let i = 0; i < arr2.length; i++) {
      if(arr2[i] > arr3) {
        arr3 = arr2[i];
      }
    }
    return arr3
  }
  
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))