/**
 * Put here db connection
 * mongodb://localhost/<databaseName>
 */
import { connect } from "mongoose";
import { error, info } from "winston";
import { get } from "config";

export function db() {
    connect(get('db'), { useNewUrlParser: true })
        .then(() => info(`mongodb connected ${get('db')}...`))
        .catch(err => error(err.message));
} 