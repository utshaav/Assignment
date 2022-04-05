//In this file, the components from html are targeted
//Also the tab changing the content is handeled in this page

//BookLIst
const bookList_tab = document.getElementById('bookList');
const bookList_div = document.getElementsByClassName('bookList')[0];
const bookList_content = document.getElementsByClassName('bookList_Content')[0];

// Add And Edit Book
const addBook_tab = document.getElementById('addBook');
const addBook_div = document.getElementsByClassName('addBook')[0];
const editBook_div = document.getElementsByClassName('editBook')[0];


// Favorite List
const favorite_tab = document.getElementById('favorites');
const favorite_div = document.getElementsByClassName('favorites')[0];
const favorites_content = document.getElementsByClassName('favorites_Content')[0];


//BUTTONS
const editButtons = document.getElementsByClassName('edit');
const deleteButtons = document.getElementsByClassName('delete');
const search_button = document.getElementById('search_button');




// FORMS
const bookForm_submit = document.getElementById('bookForm_submit');
const bookForm = document.getElementById('bookForm');
const formError = document.getElementById('error');
const bookForm_Edit = document.getElementById('bookForm_edit');



// Below are the function, to show and hide components, 
//  while pressing the tabs in navbar
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

// OnClick event handling to call above functions
bookList_tab.onclick = (_) => goToBookList();
addBook_tab.onclick =  (_) => goToAddBook();
favorite_tab.onclick =  (_) => goToFavorites();