/**
 * Put here db connection
 */
import * as mongoose from "mongoose";
import * as logger from "winston";

const yourDbName = '';

export default mongoose.connect('mongodb://localhost/' + yourDbName, { useNewUrlParser: true })
    .then(() => logger.info('mongodb connected...'))
    .catch(err => logger.error(err.message));