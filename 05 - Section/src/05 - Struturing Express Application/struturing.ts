import * as express from "express";
import Index from "./routes/index";
import Books from "./routes/books";
const app = express();

app.use(express.json());

app.use('/', Index);
app.use('/api/books', Books);

const port = process.env.port || 3000;

export function Struturing() {
    app.listen(port, () => console.log('listening...'));
}