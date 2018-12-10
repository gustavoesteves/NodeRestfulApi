import * as express from "express";
const app = express();

// to use req.body we need to declare
app.use(express.json());

const port = process.env.port || 3000;
app.listen(port);

interface Books {
    id: number;
    book: string;
}
const bookCollection: Books[] = [
    { id: 1, book: "O to doido do safalto" },
    { id: 2, book: "O menino do travessão" }];

export function crud() {

    app.get('/', (req, res) => {
        res.send('hello params');
    });

    app.get('/api/books', (req, res) => {
        res.send(bookCollection);
    });

    app.get('/api/books/:id', (req, res) => {
        const book = bookCollection.find(x => x.id === Number(req.params.id));
        if (!book) res.status(404).send('book not found');
        else res.send(book);
    });

    // test that post with Postman
    app.post('/api/books', (req, res) => {
        if (!req.body.book) {
            return res.status(400).send('Bad request: book name required')
        }
        const postBook: Books = {
            id: bookCollection.length + 1,
            book: req.body.book
        };
        bookCollection.push(postBook);
        res.send(bookCollection);
    });

    app.put('/api/books/:id', (req, res) => {
        const book = bookCollection.find(x => x.id === Number(req.params.id));

        // If not exist, 404
        if (!book) {
            return res.status(404).send('book not found');
        }

        // If invalid, 400
        if (!req.body.book) {
            return res.status(400).send('Bad request: book name required');
        }

        // Ok
        bookCollection.find(x => x.id === Number(req.params.id)).book = req.body.book;
        res.send(bookCollection);
    });

    app.delete('/api/books/:id', (req, res) => {
        const book = bookCollection.find(x => x.id === Number(req.params.id));

        // If not exist, 404
        if (!book) {
            return res.status(404).send('book not found');
        }

        //Ok
        const deleteBook = bookCollection.indexOf(book);
        bookCollection.splice(deleteBook, 1);

        res.send(bookCollection);
    });
}