function uniteUnique(arr) {
    let newArr = []

    for (var i = 0; i < arguments.length; i++) {
        arguments[i].map(element => {
            
            if(!newArr.includes(element)) {
                newArr.push(element);
            }

        });
    }

    return newArr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));