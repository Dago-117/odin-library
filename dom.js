import myLibrary from './library.js'

const tableBody = document.querySelector('tbody');
const modal = document.getElementById('edit-modal');
const modalContent = document.querySelector('.modal-content');

const generateTable = () => {
    for (let book of myLibrary) {
        const row = document.createElement('tr');
        for (let key in book) {
            const cell = document.createElement('td');
            if (key === 'id')
                continue;
            if (key === 'pages')
                cell.style.textAlign = 'center';
            cell.textContent = book[key];
            row.appendChild(cell);
        }
        row.id = book.id;
        generateUpdateColumn(row);
        tableBody.appendChild(row);
    }
}

const generateUpdateColumn = row => {
    const updateCell = document.createElement('td');
    const editButton = document.createElement('button');
    const deleteButton = document.createElement('button');
    const rowIndex = row.id;
    editButton.textContent = 'Edit';
    deleteButton.textContent = 'Delete';
    editButton.classList.add('edit');
    deleteButton.classList.add('delete');
    updateCell.classList.add('update-cell');
    editFunctionality(editButton, rowIndex);
    updateCell.appendChild(editButton);
    updateCell.appendChild(deleteButton);
    row.appendChild(updateCell);
}

const editFunctionality = (editButton, rowIndex) => {
    const titleInput = modalContent.querySelector('#title');
    const authorInput = modalContent.querySelector('#author');
    const pagesInput = modalContent.querySelector('#pages');

    editButton.addEventListener('click', () => {
        console.log("Edit button has been clicked!")
        modal.style.display = 'flex';
        titleInput.value = myLibrary[rowIndex].title;
        authorInput.value = myLibrary[rowIndex].author;
        pagesInput.value = myLibrary[rowIndex].pages;

        
    });
    document.addEventListener('click', e => {
        if (e.target === modal)
            modal.style.display = 'none';
    })

}


generateTable();

