// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

function lookUpProfile(name, prop) {

// Only change code below this line
for (var x = 0; x < contacts.length; x++){
    if (contacts[x].firstName === name) {
        if (contacts[x].hasOwnProperty(prop)) {
            console.log(contacts[x][prop]);
        } else {
            console.log("No such property");
        }
    }
}
console.log("No such contact");
// Only change code above this line
}


// function lookUpProfile(name, prop) {

// // Only change code below this line
//     for (var i = 0; i < contacts.length; i++) {

//         if(contacts[i]["firstName"] === name && contacts[i].hasOwnProperty(prop)) {

//             console.log(contacts[i][prop])

//         } else if (contacts[i]["firstName"] === name && contacts[i].hasOwnProperty(prop) === false) {
        
//             console.log('No such property')

//         } else {

//             console.log('No such contact')

//         }
//     }
// // Only change code above this line
// }

lookUpProfile("Kristian", "lastName");