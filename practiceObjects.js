function Book(title, author,pagecount,read) {
    this.title = title;
    this.author = author;
    this.pagecount = pagecount;
    this.read = read;
    this.info = function() {
        const theinfo = "Title: "+ this.title + " Author: " + this.author +
                        " Number of pages: " + this.pagecount + " Already read?: " + this.read;
        return theinfo
    }
}

const theHobbit = new Book("the Hobbit", "JRR Tolkien", "2000", "yes");
console.log(theHobbit.info()); 