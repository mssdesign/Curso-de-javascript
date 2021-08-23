// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(bookList, bookName) {
    var listNew = bookList.slice()
    listNew.push(bookName);
    return listNew;

    // Change code above this line
}

// Change code below this line
function remove(bookList, bookName) {
    var listNewer = bookList.slice()
    var book_index = listNewer.indexOf(bookName);
    if (book_index >= 0) {

        listNewer.splice(book_index, 1);
        return listNewer;

        // Change code above this line
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);