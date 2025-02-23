import myLibrary from './library.js'

const tableBody = document.querySelector('tbody');
const modal = document.getElementById('edit-modal');
const modalContent = document.querySelector('.modal-content');
const submitBtn = modalContent.querySelector('#submit-button');
let selectedRow = null;
let selectedRowIndex = null;
const titleInput = modalContent.querySelector('#title');
const authorInput = modalContent.querySelector('#author');
const pagesInput = modalContent.querySelector('#pages');

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
        generateUpdateCell(row);
        tableBody.appendChild(row);
    }
}

const generateUpdateCell = row => {
    const updateCell = document.createElement('td');
    const editButton = document.createElement('button');
    const deleteButton = document.createElement('button');
    selectedRowIndex = row.id;
    editButton.textContent = 'Edit';
    deleteButton.textContent = 'Delete';
    editButton.classList.add('edit');
    deleteButton.classList.add('delete');
    updateCell.classList.add('update-cell');
    editFunctionality(editButton);
    deleteFunctionality(deleteButton);
    updateCell.appendChild(editButton);
    updateCell.appendChild(deleteButton);
    row.appendChild(updateCell);
}

const editFunctionality = (editButton) => {
    editButton.addEventListener('click', e => {
        selectedRow = e.target.closest('tr');
        selectedRowIndex = selectedRow.id;
        modal.style.display = 'flex';
        titleInput.value = myLibrary[selectedRowIndex].title;
        authorInput.value = myLibrary[selectedRowIndex].author;
        pagesInput.value = myLibrary[selectedRowIndex].pages;
    });
    document.addEventListener('click', e => {
        if (e.target === modal)
            modal.style.display = 'none';
    })
}

const deleteFunctionality = (deleteButton) => {
    deleteButton.addEventListener('click', e => {
        selectedRow = e.target.closest('tr');
        selectedRow.remove();

    })

}
submitBtn.addEventListener('click', () => {
    console.log("Row index is: " + selectedRowIndex);
    const rowCells = selectedRow.children;
    rowCells[0].innerText = titleInput.value;
    rowCells[1].innerText = authorInput.value;
    rowCells[2].innerText = pagesInput.value;
    modal.style.display = 'none';
})




generateTable();