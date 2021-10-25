function chunkArrayInGroups(arr, size) {
    var d = arr.length/size
    for (var i = 0, k = 0, narr = []; i < d; i++) {
        narr.push([])
        for (var j = 0; j < size; j++,k++) {
            if (arr[k] != undefined) {
                narr[i].push(arr[k])
            }
        }
    }
    return narr;
  }
  
  console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));