function multiplyAll(arr) {
    var product = 1;
    
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0, vezes = +1; j < arr[i].length; j++) {
            vezes *= arr[i][j];
        }
        
        product *= vezes;
    }
    
    console.log(product);
  }
  
  multiplyAll([[1,2],[3,4],[5,6,7]]);