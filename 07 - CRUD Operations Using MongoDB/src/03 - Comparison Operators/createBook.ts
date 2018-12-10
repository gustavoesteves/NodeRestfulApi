import { Book } from "../00 - Interfaces Models/model";

/*
* Create Book and data, just once
*/

const newBook = new Book({
    title: 'Joquinha no asfalto',
    editor: 'Santa Cruz das Almas',
    author: 'Jose Vieira Simao',
    price: 123
});
const newBook1 = new Book({
    title: 'A sentinela dorminhoca',
    editor: 'Santa Cruz das Almas',
    author: 'Sergio Sampaio',
    price: 83
});
const newBook2 = new Book({
    title: 'Santa, vem de longe, vem do alto',
    editor: 'Santa Cruz das Almas',
    author: 'Irma Matilda',
    price: 75
});
const newBook3 = new Book({
    title: 'O missionario sem botas',
    editor: 'Santa Cruz das Almas',
    author: 'Carlos Henrique Joaquim',
    price: 102
});

export function saveBook() {
    newBook.save((err) => {
        if (err) return console.log(err);
    });
    newBook1.save((err) => {
        if (err) return console.log(err);
    });
    newBook2.save((err) => {
        if (err) return console.log(err);
    });
    newBook3.save((err) => {
        if (err) return console.log(err);
    });
}