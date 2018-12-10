import * as express from "express";
const app = express();

app.set('view engine', 'pug');
app.set('views', './src/04 - Templating engines/views');

app.get('/', (req, res) => {
    res.render('index', { title: 'Pub View Enginee', message: 'hello world' });
});

const port = process.env.port || 3000;

export function Templating() {
    app.listen(port, () => console.log('listening...'));
}