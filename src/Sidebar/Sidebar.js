import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../actions/auth/logout';
import { Items } from './Items';
import { startNewNote } from '../actions/notes/notes';
export const Sidebar = () => {

    const dispatch = useDispatch();
    const {notes} = useSelector(state => state.notes);
    const { name, imageURL } = useSelector(state => state.login);

    const handleInputClick = () => {
        dispatch( startLogout());
    }

    const handleNewJournal = () => {
        dispatch( startNewNote() );
    }

    return (
        <div className="animate__animated animate__slideInLeft animate__faster sidebar-conteiner">

            <div className="sidebar-user">

                <div className="sidebar-user-info">
                    <h3 className="color-light-grey">Bienvenido!</h3>
                    <h3 className="color-light-grey">{name.split(" ")[0]}</h3>
                    <button
                    className="btn background-light-grey"
                    onClick={handleInputClick}
                    >
                        <i className="fas fa-sign-out-alt" />
                        Logout
                    </button>
                </div>

                <img className="sidebar-user-image" src={  imageURL } />

            </div>

            <div 
            className="new-entry"
            onClick={handleNewJournal}
            > 
                <img src="https://image.flaticon.com/icons/png/512/117/117885.png" alt="img"/>
                <h3> Añadir nueva entrada</h3>
            </div>

            <div className="item-conteiner">
                
                {
                    notes.map(item=>{
                        return (
                            <Items Data={item} Key={item.date} />
                        )
                    })
                }
                
            </div>
            
        </div>
    )
}
