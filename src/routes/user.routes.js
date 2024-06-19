import {Router} from 'express';
import {pool} from '../db.js'

const router = Router();

router.get("/users", (req,res) => {
    res.json({
        message: "Users Page"
    })
})

router.get("/users/:id", (req,res) => {
    const id = req.params.id;
    res.json({
        message: "Obteniendo Usuario",
        id
    })
})

router.post("/users", (req,res) => {
    res.json({
        message: "Creando Usuarios"
    })
})

router.delete("/users/:id", (req,res) => {
    const id = req.params.id;
    res.json({
        message: "Borrando Usuario",
        id
    })
})

router.put("/users/:id", (req,res) => {
    const id = req.params.id;
    res.json({
        message: "Actualizando Usuario",
        id
    })
})




export default router