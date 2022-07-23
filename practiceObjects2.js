// the function book has no parameters
function Book() {

}
// it does have a function though 
Book.prototype.sayName = function() {
    return this.name;
}

// the function fantasy has 2 parameters 
function Fantasy(name) {
    this.name = name;
    this.genre = "fantasy";
}

function Crime(name) {
    this.name = name;
    this.genre = "crime";
}

// this sets the book prototype as the fantasy and crime
// functions prototype.
// doing this means that all the functions can be attached to one 
// prtotype. 
Fantasy.prototype = Object.create(Book.prototype);
Crime.prototype = Object.create(Book.prototype);

const book1 = new Fantasy("The hobbit");
console.log(book1.sayName());

const book2 = new Crime("perfect circle");
console.log(book2.sayName());
