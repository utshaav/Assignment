

const bookDetail: BookDetail = new BookDetail();



// Form Handeling

function submitHandler(event) {
    const book: Book = {
        Author: getString('Author'),
        Availability: getStringFromDropDown('Availability') as "eBook" | "Audiobook" | "Paperback",
        ISBN: getNumber("ISBN"),
        NumberOfPages: getNumber("NumberOfPages"),
        PublicationDate: new Date(getString("PublicationDate")),
        Publisher: getString('Publisher'),
        Title: getString("Title"),
        EditionNumber: getNumber("EditionNumber")
    }
    bookDetail.addToBooklist(book);
    bookDetail.displayBookList();
    event.preventDefault();
    return false; // prevent reload
};

function getString(name: string): string {
    return (<HTMLInputElement>document.getElementById(name)).value;
}
function getStringFromDropDown(name: string): string {
    return (<HTMLSelectElement>document.getElementById(name)).value;
}
function getNumber(name: string): number {
    let val = (<HTMLInputElement>document.getElementById(name)).value
    let num: number;
    if (val === undefined) {
        num = 1
    } else {
        num = Number(val)
    }
    return num;
}

function setValue(name:string, value: any) {
    (<HTMLInputElement>document.getElementById(name)).value = value
}

bookForm.addEventListener('submit', submitHandler)

// For adding and removing favorites
function toggleFavorites(isbn: number) {
    bookDetail.toggleFavorites(isbn);
}

//For Search
search_button.onclick = (_) => {
    bookDetail.search(getNumber("search_input"));
}

//For delete
function deleteBook(isbn: number) {
    if (window.confirm("Do you really want to delete?")) {
        bookDetail.RemoveBook(isbn);
    }
}

// For Edit
function editBook(isbn: number){
    debugger
    let book : Book = bookDetail.GetBook(isbn);
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
    debugger
    const book: Book = {
        Author: getString('Author_Edit'),
        Availability: getStringFromDropDown('Availability_Edit') as "eBook" | "Audiobook" | "Paperback",
        ISBN: getNumber("ISBN_Edit"),
        NumberOfPages: getNumber("NumberOfPages_Edit"),
        PublicationDate: new Date(getString("PublicationDate_Edit")),
        Publisher: getString('Publisher_Edit'),
        Title: getString("Title_Edit"),
        EditionNumber: getNumber("EditionNumber_Edit")
    }
    bookDetail.EditBook(book);
    bookDetail.displayBookList();
    event.preventDefault();
    goToBookList();
    return false; // prevent reload
};