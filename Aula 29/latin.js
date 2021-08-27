function translatePigLatin(str) {

    let consonant = /[^aeiou]+/; //teste de consoante

    let first_char = str.match(consonant); //Encontra a primeira letra.

    if (consonant.test(first_char[0]) && first_char["index"] === 0) {
        return str.replace(first_char[0], '') + first_char[0] + 'ay';
    } else {
        return str + 'way';
    }
}

console.log(translatePigLatin("algorithm"));