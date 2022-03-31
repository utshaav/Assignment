import {Book} from './typeDefination';

let bookList : Book[] = [];

let book: Book = {
    Author : "Utsav Kuinkel",
    Availability : "Paperback",
    ISBN:1345678905,
    NumberOfPages: 10,
    Publisher: "XAV HOUSE",
    Title : "Kusum Thusum lol",
    PublicationDate: new Date()
}

bookList.push(book);

function addToBooklist(book: Book) {
    bookList.push(book);
  }

