let container = document.querySelector('#container');
let addButton = document.querySelector('#addButton');
let submitButton = document.querySelector('#submitButton');
let myLibrary = [];
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
book.prototype.readToggle = function() {
    if (this.read == 'read') {
        this.read = 'unread'
    }
    else {
        this.read = 'read'
    }
    displayBooks();
}
addBookToLibrary('The Hobbit','J.R.R Tolkien','295','read')
addBookToLibrary('One Hundred Years of Solitude','Gabriel Garcia Marquez','471','unread')
displayBooks();


submitButton.addEventListener("click", function() {
    if (document.forms.newBook.title.value && document.forms.newBook.author.value && document.forms.newBook.length.value && document.forms.newBook.readValue.value) {
        addBookToLibrary(document.forms.newBook.title.value, document.forms.newBook.author.value, document.forms.newBook.length.value, document.forms.newBook.readValue.value)
        displayBooks();
    }
    else {
        alert('Please enter book information!')
    }
})

addButton.addEventListener("click", function() {
    var formContainer = document.querySelector('.form-container')
    formContainer.style.display = 'block';
    var buttonContainer = document.querySelector('#addButton')
    buttonContainer.style.display = 'none';
})

// addBookToLibrary('The Hobbit','JRR','295','read')
// addBookToLibrary('GOT','JRR','125','not read')
// displayBooks();

function addBookToLibrary(title, author, pages, read) {
    var newBook = new book(title, author, pages, read);
    myLibrary.push(newBook);
}

function deleteBook(id) {
    myLibrary.splice(id,1)
    displayBooks();
}

function toggleRead(book) {
    if (book.read == 'read') {
        console.log('read')
        book.read = 'unread'
    }
    else {
        console.log('unread')
        book.read = 'read'
    }
    displayBooks();
}

function displayBooks() {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    for (let i = 0; i < myLibrary.length; i++) {
        var delButton = document.createElement("button");
        delButton.textContent = 'Delete';
        delButton.className = 'del-button';
        delButton.addEventListener("click", function() {
            deleteBook(i);
        })

        var readToggle = document.createElement("button");
        readToggle.textContent = 'Toggle Read';
        readToggle.className = 'read-toggle';
        readToggle.addEventListener("click", function() {
            myLibrary[i].readToggle();
        })

        var textTitle = document.createElement("div");
        textTitle.textContent = "Title: " + myLibrary[i].title;
        var textAuthor = document.createElement("div");
        textAuthor.textContent = "Author: " + myLibrary[i].author;
        var textLength = document.createElement("div");
        textLength.textContent = "Pages: " + myLibrary[i].pages;
        var textRead = document.createElement("div");
        textRead.textContent = "Status: " + myLibrary[i].read;

        var bookContainer = document.createElement("div");
        bookContainer.className = 'book-info';
        bookContainer.appendChild(textTitle);
        bookContainer.appendChild(textAuthor);
        bookContainer.appendChild(textLength);
        bookContainer.appendChild(textRead);

        var content = document.createElement("div");
        content.className = 'book';

        content.appendChild(bookContainer);
        content.appendChild(readToggle);
        content.appendChild(delButton);
        
        container.appendChild(content);
    }
    // myLibrary.forEach(function(item) {
    //     numBooks++;
    //     var content = document.createElement("div");
    //     var button = document.createElement("button");
    //     button.textContent = 'Delete Book';
    //     button.addEventListener("click", function() {
    //         var current = numBooks;
    //         console.log('hi test')
    //         console.log(item.id);
    //         deleteBook(current-1);
    //     })
    //     content.textContent = item.info();
    //     content.appendChild(button);
    //     container.appendChild(content);
    // }
    // )
}