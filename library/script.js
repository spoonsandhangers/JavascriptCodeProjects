let myLibrary = [];

function Book(title, author,pagecount,read, id) {
    this.title = title;
    this.author = author;
    this.pagecount = pagecount;
    this.read = read;
    this.id = myLibrary.length;
}

Book.prototype.libraryPosition = function() {
    return this.id;
};

const addbook = document.getElementById("addbook-btn");
const displaybook = document.querySelector(".display-books");

addbook.addEventListener('click', addBookToLibrary);
displaybook.addEventListener('click', displaybooks);

function isRead() {
    const radios = document.getElementsByName('hasbeenread');
    for(let i=0; i < radios.length; i++){
        if(radios[i].checked){
            return radios[i].value;
        }
    }
}

function emptyTable() {
    const therows = document.getElementsByTagName("tr");
    
    for (var i =therows.length-1; i >= 1 ; i--){
        therows[i].remove();
    }
}

function addBookToLibrary() {
    
    const atitle = document.getElementById("booktitle").value;
    const aauthor = document.getElementById("author").value;
    const apagecount = document.getElementById("pagecount").value;
    const aread = isRead();

    const newBook = new Book(atitle, aauthor, apagecount, aread);
    myLibrary.push(newBook);

}

function displaybooks() {
    var booktable = document.querySelector("#books");
    emptyTable();

    booktable = document.querySelector("#books");
    var rowCount = booktable.rows.length;   
    
    for (var i =0; i < myLibrary.length; i++) {
        var row = booktable.insertRow(rowCount);
 
        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);

        cell0.innerHTML = myLibrary[i].title;
        cell1.innerHTML = myLibrary[i].author;
        cell2.innerHTML = myLibrary[i].pagecount;
        cell3.innerHTML = myLibrary[i].read;

        rowCount++;
    }
}