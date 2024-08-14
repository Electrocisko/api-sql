import pg from 'pg';
import dotenvConfig from './config.js';


export const pool =  new pg.Pool({
    user: dotenvConfig.db.PGUSER,
    host: dotenvConfig.db.PGHOST,
    password: dotenvConfig.db.PGPASSWORD,
    database: dotenvConfig.db.PGDATABASE,
    port: dotenvConfig.db.PGPORT,
    url: dotenvConfig.db.DATABASE_URL
})

