import * as express from "express";
const router = express.Router();

interface Books {
    id: number;
    book: string;
}
const bookCollection: Books[] = [
    { id: 1, book: "O to doido do safalto" },
    { id: 2, book: "O menino do travessão" }];

router.get('/', (req, res) => {
    res.send(bookCollection);
});

router.get('/:id', (req, res) => {
    const book = bookCollection.find(x => x.id === Number(req.params.id));
    if (!book) res.status(404).send('book not found');
    else res.send(book);
});

// test that post with Postman
router.post('/', (req, res) => {
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

router.put('/:id', (req, res) => {
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

router.delete('/:id', (req, res) => {
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

export default router;