//In this file, the components from html are targeted
//Also the tab changing the content is handeled in this page
//BookLIst
var bookList_tab = document.getElementById('bookList');
var bookList_div = document.getElementsByClassName('bookList')[0];
var bookList_content = document.getElementsByClassName('bookList_Content')[0];
// Add And Edit Book
var addBook_tab = document.getElementById('addBook');
var addBook_div = document.getElementsByClassName('addBook')[0];
var editBook_div = document.getElementsByClassName('editBook')[0];
// Favorite List
var favorite_tab = document.getElementById('favorites');
var favorite_div = document.getElementsByClassName('favorites')[0];
var favorites_content = document.getElementsByClassName('favorites_Content')[0];
//BUTTONS
var editButtons = document.getElementsByClassName('edit');
var deleteButtons = document.getElementsByClassName('delete');
var search_button = document.getElementById('search_button');
// FORMS
var bookForm_submit = document.getElementById('bookForm_submit');
var bookForm = document.getElementById('bookForm');
var formError = document.getElementById('error');
var bookForm_Edit = document.getElementById('bookForm_edit');
// Below are the function, to show and hide components, 
//  while pressing the tabs in navbar
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
// OnClick event handling to call above functions
bookList_tab.onclick = function (_) { return goToBookList(); };
addBook_tab.onclick = function (_) { return goToAddBook(); };
favorite_tab.onclick = function (_) { return goToFavorites(); };
