import express from 'express';
import dotenvConfig from './config.js'
import router from './routes/user.routes.js';

const PORT = dotenvConfig.app.PORT


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router)


app.listen(PORT, () => {
    console.log(`Servidor levantado en http://localhost:${PORT}`);
})