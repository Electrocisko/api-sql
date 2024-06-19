import express from 'express';


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.listen(3000, () => {
    console.log("Servidor levantado en http://localhost:3000");
})