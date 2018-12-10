import { IBook } from "./interfaces";
import { Book, Author, Editor } from "./models";

function postBook(book: IBook): Promise<any> {
    return new Promise((resolve, reject) => {
        book.save();
    });
}

const _book = new Book({
    title: 'Joao o grande linguarudo',
    editor: new Editor({
        name: 'Editora Atila',
        address: 'Rua Xambuci 132',
        phone: '+55 11 999 999 999',
        website: 'atila.com.br'
    }),
    author: [
        new Author({
            name: 'Zequinha o grande',
            bio: 'Fez nada ate entao',
            website: 'zequinhagrandao.com.br'
        }),
        new Author({
            name: 'Felizberto Araujo',
            bio: 'Catador de marimbondo em Alagoas',
            website: 'araujocatador.com.br'
        })
    ],
    price: 128
});

postBook(_book).then();