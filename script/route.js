var bookList_tab = document.getElementById('bookList');
var addBook_tab = document.getElementById('addBook');
var bookList_div = document.getElementsByClassName('bookList')[0];
var bookList_content = document.getElementsByClassName('bookList_Content')[0];
var addBook_div = document.getElementsByClassName('addBook')[0];
bookList_tab.onclick = function (_) {
    addBook_div.classList.add('hide');
    bookList_div.classList.remove('hide');
};
addBook_tab.onclick = function (_) {
    addBook_div.classList.remove("hide");
    bookList_div.classList.add("hide");
};
