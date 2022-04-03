const bookList_tab = document.getElementById('bookList');
const addBook_tab = document.getElementById('addBook');
const favorite_tab = document.getElementById('favorites');

const bookList_div = document.getElementsByClassName('bookList')[0];
const bookList_content = document.getElementsByClassName('bookList_Content')[0];
const addBook_div = document.getElementsByClassName('addBook')[0];
const favorite_div = document.getElementsByClassName('favorites')[0];
const editBook_div = document.getElementsByClassName('editBook')[0];
const favorites_content = document.getElementsByClassName('favorites_Content')[0];

const search_button = document.getElementById('search_button');

//EDIT AND DELETE
const editButtons = document.getElementsByClassName('edit');
const deleteButtons = document.getElementsByClassName('delete');




// FOR FORM
const bookForm_submit = document.getElementById('bookForm_submit');
const bookForm = document.getElementById('bookForm');
const formError = document.getElementById('error');
const bookForm_Edit = document.getElementById('bookForm_edit');




function goToBookList() {
    addBook_div.classList.add('hide')
    editBook_div.classList.add('hide')
    favorite_div.classList.add('hide')
    bookList_div.classList.remove('hide')
}

function goToAddBook() {
    addBook_div.classList.remove("hide");
    bookList_div.classList.add("hide");
    editBook_div.classList.add('hide')
    favorite_div.classList.add("hide");
}

function goToFavorites() {
    addBook_div.classList.add("hide");
    editBook_div.classList.add('hide')
    bookList_div.classList.add("hide");
    favorite_div.classList.remove("hide");
}

function goToEditBook() {
    addBook_div.classList.add("hide");
    editBook_div.classList.remove('hide')
    bookList_div.classList.add("hide");
    favorite_div.classList.add("hide");
}

bookList_tab.onclick = (_) => goToBookList();
addBook_tab.onclick =  (_) => goToAddBook();
favorite_tab.onclick =  (_) => goToFavorites();