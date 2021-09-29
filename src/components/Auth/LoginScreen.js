import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { useForm } from '../../Hooks/useForm';
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth/login';

export const LoginScreen = ({history}) => {

    const dispatch = useDispatch();
    const { loading,msj } = useSelector(state => state.uiLogin);

    const [value,handleInputChange ] = useForm({
        email:"",
        password:"",
        name:"",

    })

    const {email,password} = value;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch( startLoginEmailPassword(email,password) );
    }

    const handleGoogleLogin = () => {
        dispatch( startGoogleLogin());
    }
   
    

    return (
        <div className="animate__animated animate__zoomIn animate__faster login">
            <h1 className="ml-5 color-dark-primary">Login</h1>
            <form className="login-form" >
                <input
                    type="text"
                    name="email"
                    className="login-input "
                    placeholder="Ingrese el mail"
                    onChange={e => handleInputChange(e)}
                >
                </input>

                <input
                    type="password"
                    name="password"
                    className="login-input "
                    placeholder="Ingrese la contraseña"
                    onChange={e => handleInputChange(e)}
                >
                </input>

                <button
                    name="login"
                    className="btn"
                    type="submit"
                    onClick={handleLogin}
                    disabled={ loading}
                >
                    Enviar
                </button>


            </form>

            {   (msj)   }

            <div 
            onClick={handleGoogleLogin}
            className="google-btn">

                <div className="google-icon-wrapper">
                    <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                </div>

                <p className="btn-text">    <b>Ingresa con Google</b>   </p>

            </div>

            <Link
            className="link" 
            to="/auth/register">
                Todavia no tiene una cuenta?
            </Link>
        </div>
    )
}
