
import {firebase} from '../../firebase/firebaseConfig';

export const registerWithEmailAndPassword = (email,password, name) => {
    console.log(name);
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email,password)
            .then( async ({user}) =>{

                await user.updateProfile({displayName: name});

                dispatch(
                    register( user.uid, user.displayName,email )
                );
            })
            .catch(e => console.log(e));
    }
}

const register = (id, name, email, photoURL = null) => {
    return{
        type:"register",
        payload: {
            id,
            name,
            email,
            photoURL
        }
    }
}
