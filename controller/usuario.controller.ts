import { Request, Response }  from 'express'
import tbluser from '../model/usuario';

export const getUsers = async ( req : Request, res: Response) => {
    const usuario = await tbluser.findAll();
       
    return res.status(201).json({
        msg: 'Peticion get',
        usuario
    });

}

export const getUser = async( req : Request, res: Response) => {
    const { id } = req.params;
    
    const usuario = await tbluser.findByPk( id );

    if( usuario ){
        return res.status(201).json({
            msg: 'Peticion get id',
            usuario
        });
    }else {
        return res.status(401).json({
            msg: 'no exite usuario con el id ' + id
            
        });
    }


}

export const postUser = async ( req : Request, res: Response) => {
    const { body } = req;
    try {
        
        const existeEmail = await tbluser.findOne( {
            where: {
                Email : body.Email
            }
        })

        if( existeEmail ){
            return res.status(401).json({
                msg: 'el email ya existe',
                
            });
         
        }

        const usuario = await tbluser.create( body );
        return res.status(201).json({
            msg: 'User created succesfull',
            usuario
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Error, hable con el administrador',
            
        });
        
    }    


}

export const updateUser = async ( req : Request, res: Response) => {
    const { id  } = req.params;
    const { body } = req;

    try {
        const usuario  = await tbluser.findByPk( id );
               
        
        if( !usuario ){
            return res.status(404).json({
                msg: 'no existe el usuario con ese id, revise',
                
            });
        }

        await usuario.update( body );
        
        return res.status(201).json({
            msg: 'user updated successfully',
            usuario
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Error, hable con el administrador',
            
        });
        
    }    


}

export const deleteeUser = async ( req : Request, res: Response) => {
    const { id  } = req.params;
    
    try {
        const usuario  = await tbluser.findByPk( id );
               
        
        if( !usuario ){
            return res.status(404).json({
                msg: 'no existe el usuario con ese id, revise',
                
            });
        }
        
        //await usuario.destroy();
        await usuario.update( { Estado: false })
        
        return res.status(201).json({
            msg: 'user deleted successfully',
            usuario
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Error, hable con el administrador',
            
        });
        
    } 
    


}