function repeatStringNumTimes(str, num) {
    if(num <= 0) {
        return ""
    } else {
        for (var i = 1, string = str; i < num; i++) {
            string += str; 
        }
    }
    return string
  }
  
  console.log(repeatStringNumTimes("ab", 3));