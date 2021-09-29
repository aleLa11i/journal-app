import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router} from 'react-router-dom'
import { JournalScreen } from '../components/Journal/JournalScreen'
import { AuthRouter } from './AuthRouter'
import { firebase } from '../firebase/firebaseConfig'   
import { login } from '../actions/auth/login'
import { PrivateRoute } from './PrivateRoute'
import { PubliceRoute } from './PublicRoute';
import { loadingNotes } from '../actions/notes/notes';

export const AppRouters = () => {

    const dispatch = useDispatch();
    const [check, setCheck] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    (useEffect(() => {
        firebase.auth().onAuthStateChanged( async user => {
            if(user?.uid){
                dispatch(   login(user.uid, user.displayName, user.email, user.photoURL));
                setIsLoggedIn(true);
                dispatch(   loadingNotes(user.uid, user.displayName));
            }  
            else{
                setIsLoggedIn(false);
            }
            
            setCheck(false);
        })
    }, [dispatch]) )

    if(check){
        return(
        <div className="loading-img">
            <img src="https://coresys.com.ar/Admin/uploads/cargando.gif" 
            alt="loading" />
            <h1>Cargando..</h1>
        </div>

        )
    }
    else{
        return (
        <Router>
            <PubliceRoute path="/auth" isAuthenticated={isLoggedIn} component={ AuthRouter } />
            <PrivateRoute exact path="/" isAuthenticated={isLoggedIn} component={ JournalScreen } />    
    
            {/* <Redirect to="/auth/login" /> */}
        </Router>
        )

    }

}
