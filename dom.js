import myLibrary from './library.js'

const tableBody = document.querySelector('tbody');

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
        const updateCell = document.createElement('td');
        updateCell.innerHTML = "<button class='edit'>Edit</button><button class = 'delete'>Delete</button>"
        updateCell.classList.add('update-cell');
        row.appendChild(updateCell);
        tableBody.appendChild(row);
    }
}



generateTable();