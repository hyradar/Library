let myLibrary = [];

const theHobbit = Object.create(Book.prototype);
theHobbit.name = 'The Hobbit';
theHobbit.author = 'J.R.R. Tolkien';
theHobbit.status = 'Read';

const Hithchikers = Object.create(Book.prototype);
Hithchikers.name = 'Hitchhikers Guide to the Galaxy';
Hithchikers.author = 'Douglas Adams';
Hithchikers.status = 'Read';

const Fahrenheit451 = Object.create(Book.prototype);
Fahrenheit451.name = 'Fahrenheit 451';
Fahrenheit451.author = 'Ray Bradbury';
Fahrenheit451.status = 'Not Read';

function Book(name, author, status) {
    this.name = name;
    this.author = author;
    this.status = status;
}

function updateTable(array) {
    
    let myTable = document.querySelector('.tableData');
    
    //Remove old table
    myTable.replaceChildren();
    
    for (let i = 0; i < array.length; i++) {
        
        //Create new elements each loop
        let rowNode = document.createElement("tr");
        let bookData = document.createElement("td");
        let authorData = document.createElement("td");
        let statusData = document.createElement("td");
        let deleteData = document.createElement("td");
        let statusButton = document.createElement("button");
        let deleteButton = document.createElement("button");
        
        //Adding row + data elements
        let newRow = myTable.appendChild(rowNode);
        newRow.append(bookData, authorData, statusData, deleteData);
        statusData.append(statusButton);
        deleteData.append(deleteButton);

        //Assigning values
        bookData.innerHTML = array[i].name;
        authorData.innerHTML = array[i].author;
        statusButton.innerHTML = array[i].status;
        //add functionality to update read button
        deleteButton.innerHTML = 'Delete';
        deleteButton.addEventListener('click', function(){
            removeFromLibrary(myLibrary, deleteButton.dataset.index)
        });
        
        //Use this index to know which book in the array to delete
        deleteButton.dataset.index = i;
    } 
}

Book.prototype.addToLibrary = function() {
    myLibrary.push(this);
    console.log("adding "+ this.name +  " to library");
}

function removeFromLibrary(myLibrary, index) {
    
    //2nd paramater means remove only one item
    myLibrary.splice(index, 1);
    updateTable(myLibrary);
}

Book.prototype.changeStatus = function() {

    if (this.status === "Read") {
        this.status = "Unread";
    }
    else {
        this.status = "Read";
    }
}

const form = document.querySelector('.form');

theHobbit.addToLibrary();
Hithchikers.addToLibrary();
Fahrenheit451.addToLibrary();

updateTable(myLibrary);