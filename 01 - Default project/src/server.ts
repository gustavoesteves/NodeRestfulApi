import * as express from "express";
import { logger } from "./startup/logger";
import { config } from "./startup/config";
import { routes } from "./startup/routes";
import { info } from "winston";

const app = express();
logger();
// config();
routes(app);

const port = process.env.port || 3000;
export const server = app.listen(port, () => info('listening on port: ' + port));