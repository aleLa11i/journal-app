import Swal from "sweetalert2";
import { db } from "../../firebase/firebaseConfig";
import { useForm } from "../../Hooks/useForm";
import { validNoteExists } from "./validNoteExists";



export const startNewNote = (handleInputChange) => {


    return (dispatch, getState) => {

        const {id} = getState().login;

        const newNote = {
            id: `${Math.random()}`,
            title:"",
            desc:"",
            date: "",
            URL:""
        }

        dispatch( activeNote(id,newNote));
    }

    handleInputChange({target:{
        name:"desc",
        value: ""
    }})
    handleInputChange({target:{
        name:"title",
        value: ""
    }})
}

export const CreateNewNote = ({id:nid,title,desc,date,image}) => {

    return async(dispatch, getState) => {

        const {id,name} = getState().login;

        const newNote = {
            title,
            desc,
            date: new Date().getTime(), 
            URL:image
        }

        const valid = await db.collection(`${name}-${id}/journal/notes`).get();

        if(validNoteExists(valid,nid))
        {
            Swal.fire({
                title:"Actualizando nota..",
                text: "Porfavor espere.",
                allowOutsideClick:false,
                didOpen: () => {
                    Swal.showLoading();
                }
            })
            await db.doc(`${name}-${id}/journal/notes/${nid}`).update(newNote);;
            dispatch( activeNote(nid,newNote));
            dispatch(  refreshNotes( nid,newNote));

            Swal.close();
            
        }
        else
        {
            Swal.fire({
                title:"Creando nota..",
                text: "Porfavor espere.",
                allowOutsideClick:false,
                didOpen: () => {
                    Swal.showLoading()
                }
            })
            await db.collection(`${name}-${id}/journal/notes`).add( newNote);
            dispatch(loadingNotes(id,name))

            Swal.close();
            
        }
        
        
    }

}

export const selectNote = (id,title,desc,date,URL="") => {
    

    return async(dispatch, getState) => {

        const newNote = {
            id,
            title,
            desc,
            date,
            URL
        }

        dispatch( activeNote(id,newNote));

}}

export const startDeleteNote = ({id:nid}) => {

    return async(dispatch, getState) => {

        const {id,name} = getState().login;

        Swal.fire({
            title:"Eliminando nota..",
            text: "Porfavor espere.",
            allowOutsideClick:false,
            didOpen: () => {
                Swal.showLoading()
            }
        });
        
        await db.doc(`${name}-${id}/journal/notes/${nid}`).delete();
        
        dispatch(deleteNote(nid));

        Swal.close();
    }
}


export const activeNote = (id,note) => {
    

    return {
        type: "New Note",
        payload:{
            id,
            ...note
        }
    };
}



const loadNotes = async (id) => {

    const notes = await db.collection(`${id}/journal/notes`).get();
    const note = [];

    notes.forEach( child => {
        note.push({
            id: child.id,
            ...child.data()})
    } )

    return note;

}

export const loadingNotes =  (id,name) => {

    return async(dispatch) => {

        const note = await loadNotes(name+"-"+id);
        dispatch(  allNotesOfUser(note));
    }

}

export const allNotesOfUser = (note) => {
    return {
        type: "Load notes",
        payload:note
    }
}

export const refreshNotes = (id,note) => {
    
    return {
        type: "Note upload",
        payload: {
            id,
            note:{
                id,
                ...note
            }
        }
    }
}

export const deleteNote = (nid) => {
   
    return {
        type: "Delete Note",
        payload: {
            nid
        }
    }
}



