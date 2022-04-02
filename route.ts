let bookList_tab = document.getElementById('bookList');
let addBook_tab = document.getElementById('addBook');

let bookList_div = document.getElementsByClassName('bookList')[0];
let addBook_div = document.getElementsByClassName('addBook')[0];
bookList_tab.onclick = (_) => {
    addBook_div.classList.add('hide')
    bookList_div.classList.remove('hide')
}

addBook_tab.onclick = (_) => {
    addBook_div.classList.remove("hide");
    bookList_div.classList.add("hide");
}