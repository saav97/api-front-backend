const db = require('./../config/db');

/**
 * 
 * @returns la lista de todos los usuarios
 */
exports.obtenerUsuarios = async ()=>{
    const [rows, fields] = await db.execute('SELECT * FROM usuarios');
    console.log(rows);
    return rows;
};

/**
 * Este metodo busca en la base por id del usuario
 * @param {id} id del usuario a buscar 
 */
exports.getUserById = async(id)=>{
    const [rows, fields] = await db.execute('SELECT * FROM usuarios WHERE id=?',[id]);
    console.log(rows)
    return rows;
}