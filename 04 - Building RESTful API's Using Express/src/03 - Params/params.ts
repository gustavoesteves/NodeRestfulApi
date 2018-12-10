import * as express from "express";
const app = express();
const port = process.env.port || 3000;
const books = [{id: 1, book: "O to doido do safalto"}, {id: 2, book: ""}];
app.listen(port);

/*
 we use route parameters to essential information
 eg: api/books/:id
 
 and query parameters for optional
 eg: api/books/:id?sortBy=book

 and we get query params like that
 eg: req.query;
*/

export function viewParams() {
    app.get('/', (req, res) => {
        res.send('hello params');
    });
    app.get('/api/books', (req, res) => {
        res.send(books);
    });
    app.get('/api/books/:id', (req, res) => {
        const book = books.find(x => x.id === Number(req.params.id));
        if (!book) res.status(404).send('book not found');
        else res.send(book);
    });
}