import myLibrary from "./library.js";

const tableBody = document.querySelector('tbody');
const addNewBookBtn = document.getElementById('add-book');
const submitBtn = document.getElementById('submit-button');
const authorInput = document.getElementById('author');
const titleInput = document.getElementById('title');
const pagesInput = document.getElementById('pages');
const contextMenuIcons = document.getElementsByClassName('context-menu-icon');
const contextMenu = document.getElementById('context-menu');
const editOption = document.getElementById('edit');
const deleteOption = document.getElementById('delete');
let rowIndex = 0;
let selectedRow = null;

for (const book of myLibrary) {
    const bookProps = Object.entries(book);
    const row = document.createElement('tr');

    bookProps.forEach(([key, value]) => {
        const cell = document.createElement('td');
        if (key === 'id') return;
        cell.innerText = value;
        if (key === 'title') {
            row.id = `${value}${rowIndex}`
            const contextMenuIcon = document.createElement('span');
            contextMenuIcon.classList.add('context-menu-icon');
            contextMenuIcon.textContent = '⋮';
            cell.classList.add('title-cell');
            cell.appendChild(contextMenuIcon);
        }
        row.appendChild(cell);
    })
    tableBody.appendChild(row);
    rowIndex++;
}

addNewBookBtn.addEventListener('click', e => {
    modal.style.display = 'flex';  // Use flex to center the modal content
    modal.focus(); // Bring focus into the modal for accessibility
});

addNewBookBtn.addEventListener('mouseover', e => {
    addNewBookBtn.style.cursor = 'pointer';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

submitBtn.addEventListener('click', e => {
    e.preventDefault();

    const row = document.createElement('tr');

    tableBody.appendChild(row);
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
});


for (let icon of contextMenuIcons) {
    icon.addEventListener('click', e => {
        const rect = icon.getBoundingClientRect();
        contextMenu.style.top = `${rect.bottom}px`;
        contextMenu.style.left = `${rect.left}px`;
        contextMenu.classList.add('context-menu');
        console.log("Clicked on the menu icon")
        contextMenu.classList.remove('hide');
        e.stopPropagation();
        selectedRow = e.target.closest('tr');
    })
}

document.addEventListener('click', e => {
    contextMenu.classList.add('hide');
})

editOption.addEventListener('click', e => {
    editOption(selectedRow);
})

function editRow(row) {

}

function deleteRow(row) {
    row.remove();
}
