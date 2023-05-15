const db = require('./../config/db');


exports.obtenerUsuarios = async ()=>{
    const [rows, fields] = await db.execute('SELECT * FROM usuarios');
    console.log(rows);
    return rows;
};