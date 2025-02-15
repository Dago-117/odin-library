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
        tableBody.appendChild(row);
    }
}

generateTable();