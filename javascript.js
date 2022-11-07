
class Book {
    constructor(name, author, status) {
        this.name = name;
        this.author = author;
        this.status = status;
    }
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
        statusButton.addEventListener('click', function (event) {
            changeStatus(myLibrary, this);
        }); 
        deleteButton.innerHTML = 'Delete';
        deleteButton.addEventListener('click', function(){
            removeFromLibrary(myLibrary, deleteButton.dataset.index)
        });
        
        //Use this index to know which book in the array to delete
        deleteButton.dataset.index = i;
        statusButton.dataset.index = i;
    } 
}

function addToLibrary(event, myLibrary) {
    event.preventDefault();
    const form = document.querySelector('form');
    let bookVal = form.elements['book'].value;
    let authorVal = form.elements['author'].value;
    let statusVal = form.elements['status'].value;

    //Fix Capitalization of form status value
    if (statusVal === 'notread') {
        statusVal = 'Not Read';
    }
    else if (statusVal === 'read') {
        statusVal = 'Read';
    }
    
    let newBook = new Book(bookVal, authorVal, statusVal);

    form.reset();
    myLibrary.push(newBook);
    updateTable(myLibrary);
}

function removeFromLibrary(myLibrary, index) {
    
    //2nd paramater means remove only one item
    myLibrary.splice(index, 1);
    updateTable(myLibrary);
}

function changeStatus(myLibrary, button) {

    //get button index
    const index = button.dataset.index;

    //Changes status
    if (myLibrary[index].status === "Read") {
        myLibrary[index].status = "Not Read";
    }
    else {
        myLibrary[index].status = "Read";
    }

    //change button HTML based on new status
    button.innerHTML = myLibrary[index].status;
}

//Program Begins

let myLibrary = [];

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 'Read');
const Hithchikers = new Book('Hitchhikers Guide to the Galaxy', 'Douglas Adams', 'Read');
const Fahrenheit451 = new Book('Fahrenheit 451', 'Ray Bradbury', 'Not Read');

const subButton = document.querySelector('.submitbutton');
subButton.addEventListener('click', function(){
    addToLibrary(event, myLibrary);
});


myLibrary.push(theHobbit);
myLibrary.push(Hithchikers);
myLibrary.push(Fahrenheit451);

updateTable(myLibrary);