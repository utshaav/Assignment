interface Book {
    ISBN: number;
    Title: string;
    Author: string;
    Publisher: string;
    PublicationDate: Date;
    NumberOfPages: number;
    Availability: "Paperback" | "eBook" | "Audiobook";
    EditionNumber?: number;
}

let book: Book = {
    Author: "Dale Carnegie",
    Availability: "Paperback",
    ISBN: 1345678905,
    NumberOfPages: 100,
    Publisher: "XAV HOUSE",
    Title: "The Leader In You",
    PublicationDate: new Date('03/03/1999'),
    EditionNumber: 1
}

class BookDetail {
    constructor() {
        this._bookList.push(book);
        this._favoriteList.push(book.ISBN);
        this.displayBookList();
        this.displayFavoriteBookList();
    }

    private _favoriteList: number[] = [];
    public get favoriteList(): number[] {
        return this._favoriteList;
    }
    public set favoriteList(v: number[]) {
        this._favoriteList = v;
    }

    private _bookList: Book[] = [];
    public get bookList(): Book[] {
        return this._bookList;
    }
    public set bookList(v: Book[]) {
        this._bookList = v;
    }

    // let bookList: Book[] = [];



    public addToBooklist(book: Book) {
        let flag: boolean = false;
        this._bookList.forEach(element => {
            if (element.ISBN == book.ISBN) {
                flag = true;
            }
        });
        if (flag) {
            formError.innerHTML = "ISBN number already exist"
        }
        else {
            this._bookList.push(book);
            (<HTMLFormElement>bookForm).reset();
            formError.innerHTML = ""
            goToBookList();
        }
    }

    public getBooklist() {
        return this._bookList
    }

    public displayBookList() {
        console.log(this._bookList)
        let divContent: string = '';
        this._bookList.forEach(element => {
            let checked: string = "";

            if (this._favoriteList.includes(element.ISBN)) {
                checked = "checked"
            }

            divContent += this.getTableRow(element, checked);
        });
        bookList_content.innerHTML = divContent;
    }

    public displayFavoriteBookList() {
        console.log(this._bookList)
        let divContent: string = '';
        this._bookList.forEach(element => {
            let checked: string = "";

            if (this._favoriteList.includes(element.ISBN)) {
                checked = "checked"
                divContent += this.getTableRow(element, checked);
            }
        });
        favorites_content.innerHTML = divContent;
    }

    public toggleFavorites(isbn: number) {
        if (this._favoriteList.includes(isbn)) {
            this._favoriteList = this._favoriteList.filter(item => item !== isbn);
        }
        else {
            this._favoriteList.push(isbn);
        }
        this.displayBookList();
        this.displayFavoriteBookList();
    }

    public search(isbn: number) {
        if (isbn === 0) {
            this.displayBookList();
        }
        else {
            let divContent: string = `<tr><td colspan="10">NOT FOUND</td></tr>`;
            this._bookList.forEach(element => {
                if (element.ISBN === isbn) {
                    let checked: string = "";
                    if (this._favoriteList.includes(element.ISBN)) {
                        checked = "checked";
                    }
                    divContent = this.getTableRow(element, checked)
                }
            });
            bookList_content.innerHTML = divContent;
        }

    }

    public RemoveBook(isbn: number) {
        this._bookList.forEach(element => {
            if (element.ISBN === isbn) {
                this._bookList = this._bookList.filter(item => item !== element)
                this.displayBookList();
                this.displayFavoriteBookList();
            }
        });
    }

   public EditBook(book: Book) {
    this._bookList.forEach(element => {
        debugger
        if (element.ISBN === book.ISBN) {
            element.Author = book.Author;
            element.Availability = book.Availability;
            element.EditionNumber = book.EditionNumber;
            element.NumberOfPages = book.NumberOfPages;
            element.PublicationDate = book.PublicationDate;
            element.Title = book.Title;
            element.Publisher = book.Publisher;
            this.displayBookList();
            this.displayFavoriteBookList();
        }
    });
   }

   public GetBook(isbn: number){
       this._bookList.forEach(e => {
           if (e.ISBN === isbn) {
                return e;
           }
       })
       return book;
   }

    private getTableRow(element: Book, checked: string): string {
        return `<tr>
                <td>${element.ISBN}</td>
                <td>${element.Title}</td>
                <td>${element.Author}</td>
                <td>${element.Publisher}</td>
                <td>${element.PublicationDate.toDateString()}</td>
                <td>${element.Availability}</td>
                <td>${element.NumberOfPages}</td>
                <td>${element.EditionNumber}</td>
                <td><input type="checkbox" class='select_favorite' onchange="toggleFavorites(${element.ISBN})" ${checked}></td>
                <td><i class="fa fa-trash delete" onclick="deleteBook(${element.ISBN})" ></i><i class="fa fa-pencil edit" onclick="editBook(${element.ISBN})"></i></td>
                </tr>`
    }
}