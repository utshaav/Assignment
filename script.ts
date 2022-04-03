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
    PublicationDate: new Date('03/03/1999')
}
class BookDetail {
    private _bookList: Book[] = [];
    public get bookList(): Book[] {
        return this._bookList;
    }
    public set bookList(v: Book[]) {
        this._bookList.concat(v);
    }

    constructor() {
        this._bookList.push(book);

    }
    // let bookList: Book[] = [];

   

    public addToBooklist(book: Book) : string {
        let flag : boolean = false;
        this._bookList.forEach(element => {
            if (element.ISBN == book.ISBN) {   
                flag = true;
            }
        });
        if(flag)
        {
            return "ISBN ALREADY EXIST"
        }
        else{
            this._bookList.push(book);
            return "Updated Succesfully"
        }
    }

    public getBooklist() {
        return this._bookList
    }

    public displayBookList() {
        console.log(this._bookList)
        let divContent : string = '';
        this._bookList.forEach(element => {
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
            divContent +=   `<tr>
                            <td>${element.ISBN}</td>
                            <td>${element.Title}</td>
                            <td>${element.Author}</td>
                            <td>${element.Publisher}</td>
                            <td>${element.PublicationDate}</td>
                            <td>${element.Availability}</td>
                            <td>${element.NumberOfPages}</td>
                            <td>${element.EditionNumber}</td>
                            <td><input type="checkbox" class='favorite' value="${element.ISBN}"></td>
                            </tr>`
        });
        bookList_content.innerHTML = divContent;
    }
}


const bookDetail: BookDetail = new BookDetail();
bookDetail.displayBookList();
const data = document.getElementById('bookForm_submit');

data.onsubmit = (e) => {
    debugger
    e.preventDefault();
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
    return false; // prevent reload
};

function getString(name: string): string {
    return (<HTMLInputElement>document.getElementById(name)).value;
}
function getStringFromDropDown(name: string): string {
    return (<HTMLSelectElement>document.getElementById(name)).value;
}
function getNumber(name: string): number {
    let num =  Number((<HTMLInputElement>document.getElementById(name)).value);
    return num;
}

