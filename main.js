const mylibrary = [];

class Book {
    constructor(title, author, pages) {
        this._title = title;
        this._author = author;
        this._pages = pages;
        this._haveRead = false;
    }
}

const myLibrary = [
    new Book("The Great Gatsby", "F. Scott Fitzgerald", 180),
    new Book("To Kill a Mockingbird", "Harper Lee", 281),
    new Book("1984", "George Orwell", 328),
    new Book("Moby-Dick", "Herman Melville", 635),
    new Book("Pride and Prejudice", "Jane Austen", 279),
    new Book("The Catcher in the Rye", "J.D. Salinger", 277),
    new Book("The Hobbit", "J.R.R. Tolkien", 310),
    new Book("Fahrenheit 451", "Ray Bradbury", 194),
    new Book("Brave New World", "Aldous Huxley", 311),
    new Book("War and Peace", "Leo Tolstoy", 1225)
];

console.log(myLibrary);