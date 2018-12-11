import * as express from "express";
import { error } from "./middleware/error";
import Rejected from "./01 - Handling Rejected Promises/rejected";
import expressasync from "./03 - Express Async Error/expressasync";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/rejected', Rejected);
app.use('/api/expressasync', expressasync);
app.use(error);

const port = process.env.port || 3000;
app.listen(port, () => console.log('listening...'));