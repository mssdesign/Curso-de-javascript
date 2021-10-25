var Person = function (firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    var name = firstAndLast;
    
    this.getFullName = function () {
        return name;
    };

    this.getFirstName = function() {
        return name.split(' ').shift();
    };

    this.getLastName = function() {
        return name.split(' ').pop();
    };

    this.setFirstName = function(first) {
        name = name.replace(this.getFirstName(firstAndLast), first);
    };

    this.setLastName = function(last) {
        name = name.replace(this.getLastName(firstAndLast), last);
    }

    this.setFullName = function(newName) {
        name = newName;
    }
};

var bob = new Person('Bob Ross');
bob.setFirstName("Haskell");
console.log(bob.getFullName());










// var Person = function (firstAndLast) {
//     var fullname = firstAndLast;
//     // Only change code below this line
//     // Complete the method below and implement the others similarly
    
//     this.getFullName = function () {
//         return fullname;
//     };

//     this.getFirstName = function() {
//         return fullname.split(' ').shift();
//     };

//     this.getLastName = function() {
//         return fullname.split(' ').pop();
//     };

//     this.setFirstName = function(first) {
//         fullname = first + " " + this.getLastName(firstAndLast);
//     };

//     this.setLastName = function(last) {
//         fullname = this.getFirstName(firstAndLast) + " " + last;
//     };

//     this.setFullName = function(name) {
//         fullname = name;
//     };
// };

// var bob = new Person('Bob Ross');

// bob.setFirstName("Haskell");
// console.log(bob.getFullName());