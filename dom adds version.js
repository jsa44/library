let container = document.querySelector('#container');
let addButton = document.querySelector('#addButton');
let submitButton = document.querySelector('#submitButton');
let myLibrary = [];
let clickCount = 0;

function book(title, author, pages, read) {
    // constructor
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
book.prototype.info = function() {
    return (this.title + " by " + this.author + ", " + this.pages + " pages, " + this.read);
}

submitButton.addEventListener("click", function() {
    console.log(document.forms.newBook.title.value)
})

addButton.addEventListener("click", function() {
    console.log('hi2')
    clickCount ++;
    if (clickCount == 1) {
        var container = document.querySelector('#add-container');
        var finishButton = document.createElement("button");

        for (let i = 0; i < book.length; i++) {
            var newInput = book.constructor.name;
            console.log(i);
            console.log(newInput);
        }

        var titleInput = document.createElement("input")
        titleInput.id = 'title';
        var authorInput = document.createElement("input")
        authorInput.id = 'author';
        var lengthInput = document.createElement("input")
        lengthInput.id = 'length';
        var readInput = document.createElement("input")
        readInput.id = 'read';
        
        finishButton.textContent = 'Add above book to Library';
        finishButton.addEventListener("click", () => {
            var newTitle = document.querySelector('#title').value;
            console.log('hi3')
            console.log(newTitle)
        });
        
        container.appendChild(titleInput);
        container.appendChild(finishButton);
    }
})

addBookToLibrary('The Hobbit','JRR','295','read')
addBookToLibrary('GOT','JRR','125','not read')
displayBooks();

function addBookToLibrary(title, author, pages, read) {
    var newBook = new book(title, author, pages, read);
    myLibrary.push(newBook);
}

function displayBooks() {
    myLibrary.forEach(function(item) {
        var content = document.createElement("div");
        var button = document.createElement("button");
        content.textContent = item.info();
        content.appendChild(button);
        container.appendChild(content);
    }
    )
}