
import {firebase, googleAuthProvider} from '../../firebase/firebaseConfig';
import { uiFinishLoading, uiStartLoading } from './uiLogin';


const validError= (err,dispatch) => {
    const {code} = err;
    console.log(err);

    switch (code) {

        case "auth/invalid-email":
            return  dispatch(   uiFinishLoading (
            <div className="alert">
                Dirección de correo errónea.
            </div>));

        case "auth/wrong-password":
            return  dispatch(   uiFinishLoading (
            <div className="alert">
                La contraseña no es válida.
            </div>));

        case "auth/user-not-found":
            return  dispatch(   uiFinishLoading (
            <div className="alert">
                Usuario no encontrado.
            </div>));
    
        default:
            return  dispatch(   uiFinishLoading (
            <div className="alert">
                Error en el logeo
            </div>));    
    }

    
}



export const startLoginEmailPassword = (email, password) =>{

    return (dispatch) => {

        dispatch(   uiStartLoading() );

        firebase.auth().signInWithEmailAndPassword(email,password)
            .then(({user})=>{
                const {displayName, email, photoURL, uid} = user;
                dispatch(  login(uid,displayName,email,photoURL));
                dispatch(   uiFinishLoading (
                <div className="success">
                    Logeado exitosamente!
                </div>));
            })
            .catch( err=>dispatch(validError(err,dispatch)));
    }
}

export const startGoogleLogin = () => {
    return(dispatch) => {

        firebase.auth().signInWithPopup(googleAuthProvider)
            .then( ({user}) =>{
                const {displayName, email, photoURL, uid} = user;
                dispatch(  login(uid,displayName,email,photoURL));
            })
}}


export const login = (id, name, email, photoURL) => {
    return{
        type:"login",
        payload: {
            id,
            name,
            email,
            photoURL
        }
    }
}