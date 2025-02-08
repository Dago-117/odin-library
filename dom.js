import myLibrary from "./library.js";
import { Book } from "./library.js";

const table = document.querySelector('tbody');
const LIB_SIZE = myLibrary.length;
const newBtn = document.getElementById('add-book');
const submitBtn = document.getElementById('submit-button');
const cell = document.createElement('td');
const authorInput = document.getElementById('author');
const titleInput = document.getElementById('title');
const pagesInput = document.getElementById('pages');
const contextMenu = document.getElementsByClassName('context-menu');

for (let i = 0; i < LIB_SIZE; i++) {
    const book = myLibrary[i];
    const bookProps = Object.entries(book);
    const row = document.createElement('tr');

    bookProps.forEach(([key, value]) => {
        const cell = document.createElement('td');

        cell.innerText = value;
        if (key === 'title') {
            const contextMenuIcon = document.createElement('span');
            contextMenuIcon.classList.add('context-menu');
            contextMenuIcon.textContent = '⋮';
            cell.classList.add('title-cell');
            cell.appendChild(contextMenuIcon);
        }
        row.appendChild(cell);
    })
    table.appendChild(row);
}

newBtn.addEventListener('click', e => {
    modal.style.display = 'flex';  // Use flex to center the modal content
    modal.focus(); // Bring focus into the modal for accessibility
})

newBtn.addEventListener('mouseover', e => {
    newBtn.style.cursor = 'pointer';
})
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

submitBtn.addEventListener('click', e => {
    e.preventDefault();

    const row = document.createElement('tr');

    table.appendChild(row);
    const titleCell = document.createElement('td');
    titleCell.innerText = titleInput.value;
    row.appendChild(titleCell);

    const authorCell = document.createElement('td');
    authorCell.innerText = authorInput.value;
    row.appendChild(authorCell);

    const pagesCell = document.createElement('td');
    pagesCell.innerText = pagesInput.value;
    row.appendChild(pagesCell);
    modal.style.display = 'none';
})

const menus = document.getElementsByClassName('context-menu');

for (let menu of menus) {
    menu.addEventListener('click', e => {
        console.log("Clicked on the menu")
    })
}