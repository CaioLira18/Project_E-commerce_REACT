const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "banco",
});

app.use(express.json());
app.use(cors());

app.post("/register", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    
    db.query("SELECT * FROM usuarios WHERE email =  ?", [email], (err, result) => {
        if(err){
            res.send(err);
        }
        if(result.length == 0){
            bcrypt.hash(password, saltRounds, (err, hash) => {
                db.query("INSERT INTO usuarios (email, password) VALUES (?, ?)", [email, hash], (err, response) => {
                    if(err){
                        res.send(err);
                    }
    
                    res.send({msg: "Cadastrado com Sucesso"});
                });
            });
           
        } else {
            res.send({msg: "Usuario ja cadastrado"})
        }
    });
});

app.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    db.query("SELECT * FROM usuarios WHERE email = ? AND password = ?", [email, password], (err, result) => {
        if (err) {
            res.send(err);
        }
        if (result.length > 0){
            res.send({msg: "Usuario logado com sucesso"});
        } else {
            res.send({msg: "Usuario não encontrado"});

        }
    })
});

app.listen(3001, () => {
    console.log("Rodando na porta 3001");
});
