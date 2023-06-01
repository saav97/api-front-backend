const db = require('./../config/db');

/**
 * 
 * @returns la lista de todos los usuarios
 */
exports.obtenerUsuarios = async ()=>{
    const [rows, fields] = await db.execute('SELECT id, username, email, rol FROM usuarios');
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

exports.addUser = async(user)=>{

    const [rows, fields] = await db.execute('INSERT INTO usuarios (username, email, password) values (?,?,?)', [user.username, user.email, user.password])
    console.log(rows);
    return rows;
} 

exports.updateUser = async(user)=>{
    console.log('Modelo')
    console.log(user);

    const [rows, fields] = await db.execute('UPDATE usuarios SET username = ?, password = ?, email=?, rol = ? where id = ?',[user.username, user.password, user.email, user.rol, user.id]);
    return rows;
}