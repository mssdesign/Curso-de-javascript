let sampleWord = ['12345','astronaut', 'banan1', 'bana12', 'abc123', '8pass99', '1a2bcde', 'astr1on11aut'];

let gabarito = ['false', 'false', 'false', 'true', 'true', 'true', 'false', 'true'];

let pwRegex = /(?=\w{6})(?=\w*\d{2})/; // Change this line

for (var i = 0; i < sampleWord.length; i++) {
    let result = pwRegex.test(sampleWord[i]);
    console.log(`${sampleWord[i]} = ${gabarito[i]} -> ${result}`);
}

// /\w(?=\D{1,})+\w(?=\d{2})/  //FUNCIONA
// /(?=\w{5,})[a-z]+(?=\d{2})/ //FUNCIONA