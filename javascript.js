let myLibrary = [];

let theHobbit = Object.create(Book.prototype);
theHobbit.name = 'The Hobbit';
theHobbit.author = 'J.R.R. Tolkien';
theHobbit.status = 'Read';

function Book(name, author, status) {
    this.name = name;
    this.author = author;
    this.status = status;
}

Book.prototype.addBookToLibrary = function() {
    //do stuff here
}

Book.prototype.changeStatus = function() {

}

let readbutton = document.querySelector('.readbutton');
readbutton.addEventListener("click", createRow);

// Book.prototype.createRow = function() {
//     let myTable = document.querySelector('.bookshelf');
//     let row = myTable.appendChild(tr);
//     row.createElement(td); 
//     row.createElement(td);
//     row.createElement(td);
//     row.createElement(td);
//     readbutton.style.color = 'red';
// }

function createRow() {

    // Access to Button
    let btn = document.querySelector('.readbutton');
    btn.style.color = 'red';

    // Get Table and Define Elements
    let myTable = document.querySelector('.bookshelf');
    const rowNode = document.createElement("tr");

    const bookData = document.createElement("td");
    const authorData = document.createElement("td");
    const statusData = document.createElement("td");
    const deleteData = document.createElement("td");

    // Add Row 
    const newRow = myTable.appendChild(rowNode);
    newRow.className = 'newrow';

    let x = document.querySelector('.newrow');
    x.append(bookData, authorData, statusData, deleteData);
    bookData.innerHTML = "book";
    authorData.innerHTML = "author";
    statusData.innerHTML = "status";
    deleteData.innerHTML = "delete";

    // Add Data
    // let nameData = x.appendChild(dataNode);
    // let authorData = x.appendChild(dataNode);
    // let statusData = x.appendChild(dataNode);
    // let deleteData = x.appendChild(dataNode);
    
    // nameData.className = "newBook";
    // nameData.innerHTML = 'The Hobbit';
    
    // authorData.className = "author";
    // authorData.innerHTML = 'J.R.R. Tolkien';
    
    // statusData.className = "status";
    // statusData.innerHTML = 'Read';
    
    // deleteData.className = "delete";
    // deleteData.innerHTML = 'Delete';
    
}




// function changeStatus() {
//     let btn = document.querySelector('.readbutton');

//     if (btn.innerHTML === 'Read') {
//         btn.innerHTML = 'Unread';
//     }
//     else {
//         btn.innerHTML = 'Read';
//     }
// }
