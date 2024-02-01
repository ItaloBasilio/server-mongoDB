require('dotenv').config();
const express = require('express');
const app = express();
require('./db/conn');

const cors = require('cors');

app.use(express.json());
app.use(cors());

const port = 8005;

app.listen(port, ()=>{
    console.log(`O servidor está conectado na porta ${port}`);
});