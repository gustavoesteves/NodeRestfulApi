import * as express from "express";
import * as config from "config";
import * as jwt from "jsonwebtoken";

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    const token = jwt.sign({ email: 'juquinha@gmail.com' }, config.get('jwtPrivateKey'));
    res.header('x-auth-token', token).send();
});

const port = process.env.port || 3000;
app.listen(port);

export default app;