import * as express from "express";
import { info } from "winston";
import { logger } from "./startup/logger.startup";
import { config } from "./startup/config.startup";
import { db } from "./startup/db.startup";
import { routes } from "./startup/routes.startup";

const app = express();

logger();
config();
db();
routes(app);

const port = process.env.port || 3000;
export const server = app.listen(port, () => info('listening on port: ' + port));