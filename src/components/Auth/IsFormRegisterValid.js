import validator from 'validator';
import { removeErrorRegister, setErrorRegister } from '../../actions/auth/uiRegister';

export const IsFormRegisterValid = ({email,name,password,repeatPassword},dispatch) => {

    
    if( password !== repeatPassword ){
        const msj=(
        <div className="alert">
            Las contraseñas son diferentes.
        </div>)
    
        dispatch (setErrorRegister(msj));
        return false; 
    }

    if( validator.isEmpty(email) || validator.isEmpty(name)){
        const msj =(
        <div className="alert">
            No puedes dejar campos vacios.
        </div>) 
        dispatch (setErrorRegister(msj));
        return false; 
    }

    if(password.trim().length < 8){
        const msj =(
            <div className="alert">
                La contraseña debe ser mayor a 8.       
            </div>) 
        dispatch (setErrorRegister(msj));
        return false;
    }
    
    if(!validator.isEmail(email))
    {
        const msj = (
        <div className="alert">
            Email invalido.
        </div>) 
        dispatch (setErrorRegister(msj));
        return false;
    } 

    dispatch( removeErrorRegister(
    <div className="success">
        Registrado correctamente
    </div>));
    return true;
}
