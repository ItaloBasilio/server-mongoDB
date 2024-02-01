const mongoose = require('mongoose');

const DB = process.env.DATABASE;

// Vamos agora testar a conexao

mongoose.connect(DB).then(()=> console.log(" 🚀 Mongo DB conectado")).catch((error)=>console.log("errro" + error.message))
