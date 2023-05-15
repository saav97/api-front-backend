const usuarioModel = require('./../models/usuariosModel');

// los controladores se encargan de la parte logica

exports.getUsuarios = async (req, res)=>{
    //evaluamos el bloque dentro del try
    try {
        //obtenemos los datos desde el modelo
        const usuarios = await usuarioModel.obtenerUsuarios();
        //si todo va bien respondemos con los usuarios, del lado del cliente
        //lo obtenemos con json
        //status 200 que todo fue ok
        res.status(200).json({
            success:true,
            data:usuarios
        })

    } catch (error) {
        //si las instrucciones dentro del bloque try fallan, 
        //capturamos el error, lo mostramos en consola
        //y devolvemos la info del error al cliente
        console.error(error);
        res.status(500).json({
            success:false,
            message: 'Hubo un error al obtener los datos'
        })
    }
    

}



exports.getUserById = async(req, res)=>{
    //Obtengo el id enviado desde la ruta o cliente
    const idUser = req.params.id;
    try {

        //le decimos al models que busque al usuario con el id ingresado
        const usuario = await usuarioModel.getUserById(idUser)

        if(usuario.length<1){ //pregunto si existe el usuario
            res.status(404).json({
                success:false,
                mgs:`No existe usuario con el id: ${idUser}`
            })
        }
        //si todo va bien y existe el usuario =D
        res.status(200).json({
            success:true,
            usuario
        })
    } catch (error) {
        //si las instrucciones dentro del bloque try fallan, 
        //capturamos el error, lo mostramos en consola
        //y devolvemos la info del error al cliente
        console.error(error);
        res.status(500).json({
            success:false,
            message: 'Hubo un error al obtener los datos'
        })
    }
}