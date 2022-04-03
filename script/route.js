var bookList_tab = document.getElementById('bookList');
var addBook_tab = document.getElementById('addBook');
var favorite_tab = document.getElementById('favorites');
var bookList_div = document.getElementsByClassName('bookList')[0];
var bookList_content = document.getElementsByClassName('bookList_Content')[0];
var addBook_div = document.getElementsByClassName('addBook')[0];
var favorite_div = document.getElementsByClassName('favorites')[0];
var editBook_div = document.getElementsByClassName('editBook')[0];
var favorites_content = document.getElementsByClassName('favorites_Content')[0];
var search_button = document.getElementById('search_button');
//EDIT AND DELETE
var editButtons = document.getElementsByClassName('edit');
var deleteButtons = document.getElementsByClassName('delete');
// FOR FORM
var bookForm_submit = document.getElementById('bookForm_submit');
var bookForm = document.getElementById('bookForm');
var formError = document.getElementById('error');
var bookForm_Edit = document.getElementById('bookForm_edit');
function goToBookList() {
    addBook_div.classList.add('hide');
    editBook_div.classList.add('hide');
    favorite_div.classList.add('hide');
    bookList_div.classList.remove('hide');
}
function goToAddBook() {
    addBook_div.classList.remove("hide");
    bookList_div.classList.add("hide");
    editBook_div.classList.add('hide');
    favorite_div.classList.add("hide");
}
function goToFavorites() {
    addBook_div.classList.add("hide");
    editBook_div.classList.add('hide');
    bookList_div.classList.add("hide");
    favorite_div.classList.remove("hide");
}
function goToEditBook() {
    addBook_div.classList.add("hide");
    editBook_div.classList.remove('hide');
    bookList_div.classList.add("hide");
    favorite_div.classList.add("hide");
}
bookList_tab.onclick = function (_) { return goToBookList(); };
addBook_tab.onclick = function (_) { return goToAddBook(); };
favorite_tab.onclick = function (_) { return goToFavorites(); };
