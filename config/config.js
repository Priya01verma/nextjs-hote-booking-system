import DefaultConfig from "../config.json"

if (process.env.NODE_ENV) {
    const env = process.env.NODE_ENV.trim();
    envConfig = require(`../config.${env}.json`);
}