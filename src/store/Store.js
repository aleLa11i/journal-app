import { createStore, combineReducers, applyMiddleware} from 'redux';
import {loginReducer} from '../reducers/loginReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { uiRegisterReducer,uiLoginReducer } from '../reducers/uiReducer';
import { registerReducer } from '../reducers/registerReducer';
import { notesReducer } from '../reducers/notesReducer';

const reducer = combineReducers({
    login: loginReducer,
    uiLogin: uiLoginReducer,
    uiRegister: uiRegisterReducer,
    register: registerReducer,
    notes: notesReducer
})

const composeEnhancers = composeWithDevTools({});


export const store = createStore(
    reducer,
    composeEnhancers( applyMiddleware(thunk) )
  );
