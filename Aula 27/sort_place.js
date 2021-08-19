function getIndexToIns(arr, num) {
    let ordered = arr.sort(function(a,b) {return (a-b)})
    if (ordered[0] === undefined) {
        return 0
    } else {
        for (var i = 0, j = 1, res = 0; j < ordered.length; i++, j++) {
            if (num <= ordered[0]) {
                res = 0
            } else if (num > ordered[i] && num < ordered[j]) {
                res = j
            } else if (num > ordered[j]) {
                res = j+1
            }
        }
        return res
    }    
  }
  
  console.log(getIndexToIns([5, 3, 20, 3], 5));