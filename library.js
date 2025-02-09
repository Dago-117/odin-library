export class Book {
    static idCounter = 0;
    constructor(title, author, pages) {
        this.id = Book.idCounter++;
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.haveRead = false;
    }

    set newTitle(newTitle) {
        this.title = newTitle;
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
export default myLibrary;