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
            data:usuario
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