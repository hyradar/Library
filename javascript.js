let myLibrary = [];

const theHobbit = Object.create(Book.prototype);
theHobbit.name = 'The Hobbit';
theHobbit.author = 'J.R.R. Tolkien';
theHobbit.status = 'Read';

function Book(name, author, status) {
    this.name = name;
    this.author = author;
    this.status = status;
}

Book.prototype.appendTable = function() {
    let myTable = document.querySelector('.bookshelf');
    const rowNode = document.createElement("tr");

    const bookData = document.createElement("td");
    const authorData = document.createElement("td");
    const statusData = document.createElement("td");
    const deleteData = document.createElement("td");
    const statusButton = document.createElement("button");
    statusButton.innerHTML = this.status;
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";

    const newRow = myTable.appendChild(rowNode);
    
    newRow.append(bookData, authorData, statusData, deleteData);
    bookData.innerHTML = this.name;
    authorData.innerHTML = this.author;
    statusData.append(statusButton);
    deleteData.append(deleteButton);

}

Book.prototype.addToLibrary = function() {
    myLibrary.push(this);
    console.log("adding "+ this.name +  " to library");
}

// Current Problem: Object still exists.
Book.prototype.removeFromLibrary = function() {
    myLibrary.pop(this);
    console.log("removing " + this.name + " from library");
}

Book.prototype.changeStatus = function() {

    if (this.status === "Read") {
        this.status = "Unread";
    }
    else {
        this.status = "Read";
    }
}

theHobbit.appendTable();
theHobbit.addToLibrary();
theHobbit.removeFromLibrary();