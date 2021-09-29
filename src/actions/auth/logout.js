import { firebase } from '../../firebase/firebaseConfig';

export const startLogout = () => {
    return async (dispatch) => {

        await firebase.auth().signOut();
        dispatch( logout());
        dispatch( purchaseLogout());
    }
}


const logout = () => {
    return ({
        type: "logout"
    })
}

const purchaseLogout = () => {
    return ({
        type: "purchaseLogout"
    })
}
