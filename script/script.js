var bookDetail = new BookDetail();
// Form Handeling
function submitHandler(event) {
    var book = {
        Author: getString('Author'),
        Availability: getStringFromDropDown('Availability'),
        ISBN: getNumber("ISBN"),
        NumberOfPages: getNumber("NumberOfPages"),
        PublicationDate: new Date(getString("PublicationDate")),
        Publisher: getString('Publisher'),
        Title: getString("Title"),
        EditionNumber: getNumber("EditionNumber")
    };
    bookDetail.addToBooklist(book);
    bookDetail.displayBookList();
    event.preventDefault();
    return false; // prevent reload
}
;
function getString(name) {
    return document.getElementById(name).value;
}
function getStringFromDropDown(name) {
    return document.getElementById(name).value;
}
function getNumber(name) {
    var val = document.getElementById(name).value;
    var num;
    if (val === undefined) {
        num = 1;
    }
    else {
        num = Number(val);
    }
    return num;
}
function setValue(name, value) {
    document.getElementById(name).value = value;
}
bookForm.addEventListener('submit', submitHandler);
// For adding and removing favorites
function toggleFavorites(isbn) {
    bookDetail.toggleFavorites(isbn);
}
//For Search
search_button.onclick = function (_) {
    bookDetail.search(getNumber("search_input"));
};
//For delete
function deleteBook(isbn) {
    if (window.confirm("Do you really want to delete?")) {
        bookDetail.RemoveBook(isbn);
    }
}
// For Edit
function editBook(isbn) {
    debugger;
    var book = bookDetail.GetBook(isbn);
    setValue("Title_Edit", book.Title);
    setValue("ISBN_Edit", book.ISBN);
    setValue("Author_Edit", book.Author);
    setValue("Publisher_Edit", book.Publisher);
    setValue("NumberOfPages_Edit", book.NumberOfPages);
    setValue("PublicationDate_Edit", book.PublicationDate);
    goToEditBook();
}
bookForm_Edit.addEventListener('submit', submitEditHandler);
function submitEditHandler(event) {
    debugger;
    var book = {
        Author: getString('Author_Edit'),
        Availability: getStringFromDropDown('Availability_Edit'),
        ISBN: getNumber("ISBN_Edit"),
        NumberOfPages: getNumber("NumberOfPages_Edit"),
        PublicationDate: new Date(getString("PublicationDate_Edit")),
        Publisher: getString('Publisher_Edit'),
        Title: getString("Title_Edit"),
        EditionNumber: getNumber("EditionNumber_Edit")
    };
    bookDetail.EditBook(book);
    bookDetail.displayBookList();
    event.preventDefault();
    goToBookList();
    return false; // prevent reload
}
;
