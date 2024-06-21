import {Router} from 'express';
import {pool} from '../db.js'

const router = Router();

router.get("/users", async (req,res) => {
    try {
        const data = await pool.query('SELECT * FROM users;')
        res.json({
            message: "Users Page",
            users: data.rows
        })
    } catch (error) {
        res.json({
            error: error.message
        })
    }


})

router.get("/users/:id", async (req,res) => {
    try {
        const id = req.params.id;
        const data = await pool.query(`SELECT * from users WHERE id=${id};`);
        res.json({
            message: "Obteniendo Usuario",
            user: data.rows
        })
    } catch (error) {
        res.json({
            error: error.message
        })
    }

})

router.post("/users",async  (req,res) => {
    try {
        const {name, email} = req.body;
        const response  = await pool.query(`INSERT INTO users (name,email) VALUES ('${name}','${email}');`)
        res.json({
            message: "Creando Usuarios",
            response
        })
    } catch (error) {
        res.json({
            error: error.message
        })
    }
})

router.delete("/users/:id", async  (req,res) => {
try {
    const id = req.params.id;
    const response = await pool.query(`DELETE FROM users WHERE id=${id};`)
    res.json({
        message: "Borrando Usuario",
        response
    })
} catch (error) {
    res.json({
        error: error.message
    })
}
})

router.put("/users/:id", async (req,res) => {
try {
    const id = req.params.id;
    const {name, email} = req.body;
    
   const user = (await pool.query(`SELECT * from users WHERE id=${id};`)).rows[0];

    if (!user) return (res.json({
        message: "user no exist"
    }))
  
    if (name) user.name = name;
    if (email) user.email = email;
    if (!name && !email) return (
        res.json({
            message: "No data"
        })
    )

    const response = await pool.query(`UPDATE users SET name='${user.name}', email='${user.email}' WHERE id=${id} RETURNING *;`)


    res.json({
        message: "Actualizando Usuario",
       result: response.rows[0]
    })
} catch (error) {
    res.json({
        error: error.message
    })
}
})




export default router