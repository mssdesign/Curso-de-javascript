function whatIsInAName(collection, source) {
    // Only change code below this line
    var key = Object.keys(source);

    return collection.filter(function(element) {
        return key.every(function(object) {
            if(element.hasOwnProperty(object) && element[object] === source[object]) {
                return true;
            } else {
                return false
            }
        })
    })    
    // Only change code above this line
}

console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }));

//MODO NINJA