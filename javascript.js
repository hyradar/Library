let myLibrary = [];

let readbutton = document.querySelector('.readbutton');
// readbutton.addEventListener("click", createRow());

function Book(name, author, status) {
    this.name = name;
    this.author = author;
    this.status = status;
}

const theHobbit = Object.create(Book.prototype);
theHobbit.name = 'The Hobbit';
theHobbit.author = 'J.R.R. Tolkien';
theHobbit.status = 'Read';


Book.prototype.addBookToLibrary = function() {
    myLibrary.push(this);
}

Book.prototype.changeStatus = function() {

    if (this.status === "Read") {
        this.status = "Unread";
    }
    else {
        this.status = "Read";
    }
}


theHobbit.addBookToLibrary();
console.log(myLibrary);


// Proof of concept for adding row
/* function createRow() {

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
    
    newRow.append(bookData, authorData, statusData, deleteData);
    bookData.innerHTML = "book";
    authorData.innerHTML = "author";
    statusData.innerHTML = "status";
    deleteData.innerHTML = "delete";
    
}
*/