function fearNotLetter(str) {

    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    let arr = str.split('');

    let x = alphabet.indexOf(arr[0]);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== alphabet[x + i]) {
            return alphabet[x + i];
        }
    }
}

console.log(fearNotLetter("stvwx"));