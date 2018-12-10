import * as express from "express";
import { Auth } from "./middleware";
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('hello world');
});

/**
 * to protect some middleware we can put our Auth middleware on it
 */
app.get('/api/protected-middleware', Auth, (req, res) => {
    res.send('protected middleware...')
});

const port = process.env.port || 3000;
app.listen(port, () => console.log('listening...'));