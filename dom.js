import myLibrary from "./library.js";
import { Book } from "./library.js";

const table = document.querySelector('table');
const NUM_COLUMNS = Object.keys(Book).length;
const LIB_SIZE = myLibrary.length;


for (let i = 0; i < LIB_SIZE; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < 4; j++) {
        const cell = document.createElement('td');
        cell.innerText = myLibrary[i].title;
        row.appendChild(cell);
    }
    table.appendChild(row);
}

