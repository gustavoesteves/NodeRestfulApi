/**
 * Put here all configurations of Environment
 * that should be setting on config directory
 */
import { get } from "config";

export function config() {
    if (!get('jwtPrivateKey')) {
        throw new Error('FATAL ERROR: jwtPrivateKey is not set.');
    }
}