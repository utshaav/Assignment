//A sample book
var book = {
    Author: "Dale Carnegie",
    Availability: "Paperback",
    ISBN: 1345678905,
    NumberOfPages: 100,
    Publisher: "XAV HOUSE",
    Title: "The Leader In You",
    PublicationDate: new Date('03/03/1999'),
    EditionNumber: 1
};
// All the function related to book is defined in this class
var BookDetail = /** @class */ (function () {
    function BookDetail() {
        //Property to store favorite books
        this._favoriteList = [];
        //Property to store books
        this._bookList = [];
        //Add the default book
        this._bookList.push(book);
        //Added default book to the favorite list
        this._favoriteList.push(book.ISBN);
        this.displayBookList();
        this.displayFavoriteBookList();
    }
    Object.defineProperty(BookDetail.prototype, "favoriteList", {
        get: function () {
            return this._favoriteList;
        },
        set: function (v) {
            this._favoriteList = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BookDetail.prototype, "bookList", {
        get: function () {
            return this._bookList;
        },
        set: function (v) {
            this._bookList = v;
        },
        enumerable: false,
        configurable: true
    });
    // let bookList: Book[] = [];
    //Adds to the list of book
    BookDetail.prototype.addToBooklist = function (book) {
        var flag = false;
        this._bookList.forEach(function (element) {
            if (element.ISBN == book.ISBN) {
                flag = true;
            }
        });
        if (flag) {
            formError.innerHTML = "ISBN number already exist";
        }
        else {
            this._bookList.push(book);
            bookForm.reset();
            formError.innerHTML = "";
            goToBookList();
        }
    };
    //Returns the list of books
    BookDetail.prototype.getBooklist = function () {
        return this._bookList;
    };
    //This function create a table for the books in the booklist and displays it in the html page
    BookDetail.prototype.displayBookList = function () {
        var _this = this;
        console.log(this._bookList);
        var divContent = '';
        this._bookList.forEach(function (element) {
            var checked = "";
            if (_this._favoriteList.includes(element.ISBN)) {
                checked = "checked";
            }
            divContent += _this.getTableRow(element, checked);
        });
        bookList_content.innerHTML = divContent;
    };
    //This function create a table for the books in the favorite and displays it in the favorite tab
    BookDetail.prototype.displayFavoriteBookList = function () {
        var _this = this;
        console.log(this._bookList);
        var divContent = '';
        this._bookList.forEach(function (element) {
            var checked = "";
            if (_this._favoriteList.includes(element.ISBN)) {
                checked = "checked";
                divContent += _this.getTableRow(element, checked);
            }
        });
        favorites_content.innerHTML = divContent;
    };
    //This function will add the book to favoritelist if it is not in the list,
    //And remove the book from favorite list if the book is already in favorite list
    BookDetail.prototype.toggleFavorites = function (isbn) {
        if (this._favoriteList.includes(isbn)) {
            this._favoriteList = this._favoriteList.filter(function (item) { return item !== isbn; });
        }
        else {
            this._favoriteList.push(isbn);
        }
        this.displayBookList();
        this.displayFavoriteBookList();
    };
    //This method will search book by isbn number and display it in the table
    BookDetail.prototype.search = function (isbn) {
        var _this = this;
        if (isbn === 0) {
            this.displayBookList();
        }
        else {
            var divContent_1 = "<tr><td colspan=\"10\">NOT FOUND</td></tr>";
            this._bookList.forEach(function (element) {
                if (element.ISBN === isbn) {
                    var checked = "";
                    if (_this._favoriteList.includes(element.ISBN)) {
                        checked = "checked";
                    }
                    divContent_1 = _this.getTableRow(element, checked);
                }
            });
            bookList_content.innerHTML = divContent_1;
        }
    };
    //This method will delete the book
    BookDetail.prototype.RemoveBook = function (isbn) {
        var _this = this;
        this._bookList.forEach(function (element) {
            if (element.ISBN === isbn) {
                _this._bookList = _this._bookList.filter(function (item) { return item !== element; });
                _this.displayBookList();
                _this.displayFavoriteBookList();
            }
        });
    };
    //This method will edit the book
    BookDetail.prototype.EditBook = function (book) {
        var _this = this;
        this._bookList.forEach(function (element) {
            debugger;
            if (element.ISBN === book.ISBN) {
                element.Author = book.Author;
                element.Availability = book.Availability;
                element.EditionNumber = book.EditionNumber;
                element.NumberOfPages = book.NumberOfPages;
                element.PublicationDate = book.PublicationDate;
                element.Title = book.Title;
                element.Publisher = book.Publisher;
                _this.displayBookList();
                _this.displayFavoriteBookList();
            }
        });
    };
    //This metgod will return a book by isbn number
    BookDetail.prototype.GetBook = function (isbn) {
        this._bookList.forEach(function (e) {
            if (e.ISBN === isbn) {
                return e;
            }
        });
        return book;
    };
    //This method will create a table row for a book
    //deletebook(isbn), editbook(isbn) and toggleFavorites(isbn) are called on on click of respective elements and icons
    BookDetail.prototype.getTableRow = function (element, checked) {
        return "<tr>\n                <td>".concat(element.ISBN, "</td>\n                <td>").concat(element.Title, "</td>\n                <td>").concat(element.Author, "</td>\n                <td>").concat(element.Publisher, "</td>\n                <td>").concat(element.PublicationDate.toDateString(), "</td>\n                <td>").concat(element.Availability, "</td>\n                <td>").concat(element.NumberOfPages, "</td>\n                <td>").concat(element.EditionNumber, "</td>\n                <td><input type=\"checkbox\" class='select_favorite' onchange=\"toggleFavorites(").concat(element.ISBN, ")\" ").concat(checked, "></td>\n                <td><i class=\"fa fa-trash delete\" onclick=\"deleteBook(").concat(element.ISBN, ")\" ></i><i class=\"fa fa-pencil edit\" onclick=\"editBook(").concat(element.ISBN, ")\"></i></td>\n                </tr>");
    };
    return BookDetail;
}());
