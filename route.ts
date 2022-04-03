const bookList_tab = document.getElementById('bookList');
const addBook_tab = document.getElementById('addBook');

const bookList_div = document.getElementsByClassName('bookList')[0];
const bookList_content = document.getElementsByClassName('bookList_Content')[0];
const addBook_div = document.getElementsByClassName('addBook')[0];
bookList_tab.onclick = (_) => {
    addBook_div.classList.add('hide')
    bookList_div.classList.remove('hide')
}

addBook_tab.onclick = (_) => {
    addBook_div.classList.remove("hide");
    bookList_div.classList.add("hide");
}