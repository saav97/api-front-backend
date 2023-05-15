const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const router = require('./../routes/usuarioRoute')


class Server {
    constructor(){
        this.app = express();
        this.routes();
        this.middlewares();
    }

    routes(){
        this.app.use('/api/usuarios',router);
    }

    middlewares(){
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(morgan());
    }

    listen(){
        this.app.listen(3000, ()=>{
            console.log("Servidor corriendo en el puerto 3000");
        })
    }

}

module.exports = Server;