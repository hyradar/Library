let myLibrary = [];

let readbutton = document.querySelector('.readbutton');
readbutton.addEventListener("click", changeRead);

function Book() {
    //the constructor
}

function addBookToLibrary() {
    //do stuff here
}

function changeRead (){
    let btn = document.querySelector('.readbutton');

    if (btn.innerHTML === 'Read') {
        btn.innerHTML = 'Unread';
    }
    else {
        btn.innerHTML = 'Read';
    }
}