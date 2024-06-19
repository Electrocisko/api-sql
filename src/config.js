import dotenv from "dotenv";
dotenv.config();

export default {
  app: {
    PORT: process.env.PORT || 3000,
  },
  db: {
    USER_DB: process.env.USER_DB,
    HOST_DB: process.env.HOST_DB,
    PASSWORD_DB: process.env.PASSWORD_DB,
    DATABASE_NAME: process.env.DATABASE_NAME,
    PORT_DB: process.env.PORT_DB,
  },
};
