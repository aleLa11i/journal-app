import React from 'react';
import {Link} from 'react-router-dom';
import { useForm } from '../../Hooks/useForm';
import { IsFormRegisterValid } from './IsFormRegisterValid';
import {useDispatch, useSelector} from 'react-redux';
import { registerWithEmailAndPassword } from '../../actions/auth/register';

export const RegisterScreen = ({history}) => {

    const dispatch = useDispatch(); 
    const { msj} = useSelector(state => state.uiRegister);

    const [value,handleInputChange ] = useForm({
        email:"",
        name:"",
        password:"",
        repeatPassword:""
    })

    const {email, password,name} = value;

    const handleRegister = (e) => {
        e.preventDefault();
        

        if(IsFormRegisterValid(value,dispatch)){

            console.log("ok");
            dispatch(registerWithEmailAndPassword(email,password,name));
        }
    }

    return (
        <div className="animate__animated animate__zoomIn ; login">
            <h1 className="ml-5 color-dark-primary">Register</h1>
            <form className="login-form">
                
                <input
                type="text"
                className="login-input "
                name="name"
                placeholder="Ingrese el nombre"
                onChange={handleInputChange}
                >
                </input>

                <input
                type="text"
                className="login-input"
                name="email"
                placeholder="Ingrese el mail"
                onChange={handleInputChange}

                >
                </input>

                <input
                type="password"
                className="login-input "
                name="password"
                placeholder="Ingrese la contraseña"
                onChange={handleInputChange}

                >
                </input>

                <input
                type="password"
                className="login-input "
                name="repeatPassword"
                placeholder="Repita la contraseña"
                onChange={handleInputChange}

                >
                </input>

                <button
                    className="btn pointer hover-transform"
                    type="submit"
                    onClick={handleRegister}
                >
                    Enviar
                </button>
            </form>

            {   (msj)   }
            
            <Link 
                to="/auth/login"
                className="link"
            >
                Ya tengo una cuenta
            </Link>
        </div>
    )
}
