import pg from 'pg';
import dotenvConfig from './config.js';


export const pool =  new pg.Pool({
    user: dotenvConfig.db.USER_DB,
    host: dotenvConfig.db.HOST_DB,
    password: dotenvConfig.db.PASSWORD_DB,
    database: dotenvConfig.db.DATABASE_NAME,
    port: dotenvConfig.db.PORT_DB
})

