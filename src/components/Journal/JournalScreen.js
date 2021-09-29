import React from 'react';
import { useDispatch } from 'react-redux';
import { removeErrorLogin } from '../../actions/auth/uiLogin';
import { removeErrorRegister } from '../../actions/auth/uiRegister';
import { Sidebar } from '../../Sidebar/Sidebar';
import { NotesScreen } from '../Notes/NotesScreen';
import { NothingSelected } from './NothingSelected';
import { useSelector } from 'react-redux';


export const JournalScreen = () => {

    const {active}= useSelector(state => state.notes);
    const dispatch = useDispatch();

    dispatch(removeErrorLogin(""));
    dispatch(removeErrorRegister(""));

    return (
        <div className="journal-conteiner">

            <Sidebar />

            {
                
                (active)?
                (<NotesScreen />):
                <NothingSelected />
            }
 
        </div>
    )
}
