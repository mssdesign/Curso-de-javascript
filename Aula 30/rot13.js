function rot13(str) {

    let alphabet = {'A': 'N', 'B': 'O', 'C': 'P', 'D': 'Q', 'E': 'R', 'F': 'S', 'G': 'T', 'H': 'U', 'I': 'V', 'J': 'W', 'K': 'X', 'L': 'Y', 'M': 'Z', 'N': 'A', 'O': 'B', 'P': 'C', 'Q': 'D', 'R': 'E', 'S': 'F', 'T': 'G', 'U': 'H', 'V': 'I', 'W': 'J', 'X': 'K', 'Y': 'L', 'Z': 'M', ' ': ' ', '!': '!', '.': '.', '?': '?'};

    let string = str.split('');

    return string.map(letter => {
        return alphabet[letter];
    }).join('');

}

console.log(rot13("SERR PBQR PNZC"));