let username = ['JACK', 'J', 'Jo', 'Oceans11', 'RegexGuru', '007', '9', 'A1', 'BadUs3rnam3', 'Z97', 'c57bT3', 'AB1', 'J%4'];
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i // Change this line


for (i = 0; i < username.length; i++) {
    let result = userCheck.test(username[i])
    console.log(`${username[i]} = ${result}`)
}
// /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i