import myLibrary from "./library.js";
import { Book } from "./library.js";

const table = document.querySelector('tbody');
const NUM_COLUMNS = Object.keys(Book).length;
const LIB_SIZE = myLibrary.length;
const newBtn = document.getElementById('add-book');




for (let i = 0; i < LIB_SIZE; i++) {
    const book = myLibrary[i];
    const bookProps = Object.entries(book);
    const row = document.createElement('tr');
    bookProps.forEach(([key, value]) => {
        const cell = document.createElement('td');
        cell.innerText = value;
        row.appendChild(cell);
    })
    table.appendChild(row);
}

newBtn.addEventListener('click', e => {
    
    const row = document.createElement('tr');
    const cell = document.createElement('td');
})

newBtn.addEventListener('mouseover', e => {
    newBtn.style.cursor = 'pointer';

})