var book = {
    Author: "Dale Carnegie",
    Availability: "Paperback",
    ISBN: 1345678905,
    NumberOfPages: 100,
    Publisher: "XAV HOUSE",
    Title: "The Leader In You",
    PublicationDate: new Date('03/03/1999')
};
var BookDetail = /** @class */ (function () {
    function BookDetail() {
        this._bookList = [];
        this._bookList.push(book);
    }
    Object.defineProperty(BookDetail.prototype, "bookList", {
        get: function () {
            return this._bookList;
        },
        set: function (v) {
            this._bookList.concat(v);
        },
        enumerable: false,
        configurable: true
    });
    // let bookList: Book[] = [];
    BookDetail.prototype.addToBooklist = function (book) {
        var flag = false;
        this._bookList.forEach(function (element) {
            if (element.ISBN == book.ISBN) {
                flag = true;
            }
        });
        if (flag) {
            return "ISBN ALREADY EXIST";
        }
        else {
            this._bookList.push(book);
            return "Updated Succesfully";
        }
    };
    BookDetail.prototype.getBooklist = function () {
        return this._bookList;
    };
    BookDetail.prototype.displayBookList = function () {
        console.log(this._bookList);
        var divContent = '';
        this._bookList.forEach(function (element) {
            // divContent += `<div class="card">
            //                 <div class="container">
            //                 <h4><b>${element.Title}</b></h4>
            //                 <p>ISBN: ${element.ISBN}</p>
            //                 <p>Author: ${element.Author}</p>
            //                 <p>Avaliable: ${element.Availability}</p>
            //                 <p>No of pages: ${element.NumberOfPages}</p>
            //                 <p>Publisher: ${element.Publisher}</p>
            //                 <p>Published Year: ${element.PublicationDate}</p>
            //                 <p>Edition Number: ${element.EditionNumber}</p>
            //                 </div>
            //                 </div>`
            divContent += "<tr>\n                            <td>".concat(element.ISBN, "</td>\n                            <td>").concat(element.Title, "</td>\n                            <td>").concat(element.Author, "</td>\n                            <td>").concat(element.Publisher, "</td>\n                            <td>").concat(element.PublicationDate, "</td>\n                            <td>").concat(element.Availability, "</td>\n                            <td>").concat(element.NumberOfPages, "</td>\n                            <td>").concat(element.EditionNumber, "</td>\n                            <td><input type=\"checkbox\" class='favorite' value=\"").concat(element.ISBN, "\"></td>\n                            </tr>");
        });
        bookList_content.innerHTML = divContent;
    };
    return BookDetail;
}());
var bookDetail = new BookDetail();
bookDetail.displayBookList();
var data = document.getElementById('bookForm_submit');
data.onsubmit = function (e) {
    debugger;
    e.preventDefault();
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
    return false; // prevent reload
};
function getString(name) {
    return document.getElementById(name).value;
}
function getStringFromDropDown(name) {
    return document.getElementById(name).value;
}
function getNumber(name) {
    var num = Number(document.getElementById(name).value);
    return num;
}
