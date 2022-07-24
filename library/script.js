// empty library array
let myLibrary = [];

// book count set to zero
let count = 0;

// book class 
function Book(title, author,pagecount,read) {
    this.title = title;
    this.author = author;
    this.pagecount = pagecount;
    this.read = read;
    this.id = count;
}

// book prototype with unused method
Book.prototype.libraryPosition = function() {
    return this.id;
};

// 2 buttons and their event listeners.
const addbook = document.getElementById("addbook-btn");
const displaybook = document.querySelector(".display-books");

addbook.addEventListener('click', addBookToLibrary);
displaybook.addEventListener('click', displaybooks);

// this function prints the contents of the library to the console.
function printbooks(){
    for (let i = 0; i < myLibrary.length; i++){
        console.log(myLibrary[i]);
    }
}

// returns the value of the radio button that is selected.
function isRead() {
    const radios = document.getElementsByName('hasbeenread');
    for(let i=0; i < radios.length; i++){
        if(radios[i].checked){
            return radios[i].value;
        }
    }
}

// function to remove all rows from the table.
function emptyTable() {
    const therows = document.getElementsByTagName("tr");
    
    for (var i =therows.length-1; i >= 1 ; i--){
        therows[i].remove();
    }
}

// function to delete a book when the delete button 
// for that book is pressed.
function deleteBook(id){
    for (let i=0; i < myLibrary.length; i++){
        
        if (myLibrary[i].id === id){
            myLibrary.splice(i,1);
            displaybooks();
            break;
        }
    }
    
}

// adds a book to the library array 
// collects the infotiormation from the input fields
// creates a book object
// adds the book object to the library.
function addBookToLibrary() {
    
    const atitle = document.getElementById("booktitle").value;
    const aauthor = document.getElementById("author").value;
    const apagecount = document.getElementById("pagecount").value;
    const aread = isRead();

    const newBook = new Book(atitle, aauthor, apagecount, aread);
    count++;
    myLibrary.push(newBook);
    console.log(myLibrary);

}

// adds a listener to every delete button
// so that the correct book object is deleted when 
// a button is pressed.
function addListenersDelete(){
    for (let i=0; i < myLibrary.length; i++){
        if (document.getElementById(myLibrary[i].id) !== null){
        document.getElementById(myLibrary[i].id).addEventListener('click', function(){
            deleteBook(myLibrary[i].id);
        })
    }
    }
}

// displays all the book objects in the array
// in a table on the weboage.
function displaybooks() {
    printbooks();
    var booktable = document.querySelector("#books");
    emptyTable();

    booktable = document.querySelector("#books");
    var rowCount = booktable.rows.length;   
    
    
    for (var i =0; i < myLibrary.length; i++) {
        var row = booktable.insertRow(rowCount);
        var delbtn = `<button id="${myLibrary[i].id}">Delete</button>`   

        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);
        var cell4 = row.insertCell(4);

        cell0.innerHTML = myLibrary[i].title;
        cell1.innerHTML = myLibrary[i].author;
        cell2.innerHTML = myLibrary[i].pagecount;
        cell3.innerHTML = myLibrary[i].read;
        cell4.innerHTML = delbtn

        rowCount++;
    }
    addListenersDelete();
}