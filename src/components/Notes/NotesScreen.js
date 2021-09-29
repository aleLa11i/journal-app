import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CreateNewNote, selectNote, startDeleteNote, startNewNote } from '../../actions/notes/notes';
import { useForm } from '../../Hooks/useForm';
import moment from 'moment';
import { imageFiles } from '../../actions/notes/imageFiles';

export const NotesScreen = () => {

    const dispatch = useDispatch();
    const {active} = useSelector(state => state.notes);
    const [value,handleInputChange,reset] = useForm(active);
    var { id,title, desc,URL,date } = value;
    const activeId = useRef(active.id);
    
    const [image, setImage] = useState(active.URL);
    console.log(active.desc)

    useEffect(() => {
        if( active.id !== activeId.current)
        {
            reset(active);
            activeId.current = active.id;
            setImage(active.URL);
        }
    }, [active,reset])
    
    useEffect(() => {
        dispatch(   selectNote(id,title,desc,date,URL));
    }, [value,id,title,desc,date,URL,dispatch]);




    const handleInputSave = async () => {
        await dispatch(   CreateNewNote({id,title, desc,date,image}));
        dispatch(   startNewNote());
    }

    const handleInputPicture = () => {
        document.querySelector("#fileSelector").click();
    }

    const inputFileChange = (e) => {
        
       const fileImage = e.target.files[0];
       if(fileImage){
            dispatch(imageFiles(fileImage,setImage,handleInputChange));
       }
    }

    const handleDelete = () => {
        dispatch( startDeleteNote({id}) );
    }

    return (
        <div className="note-screen">
            <div className="note-bar">
                <h3> 
                {
                    (active.date==="")?
                    moment().format("dddd DD/MM/YYYY h:mm:ss a"):
                    moment(active.date).format("dddd DD/MM/YYYY h:mm:ss a")
                } 
                </h3>

                <div>
                    <button 
                    className="btn"
                    onClick={ handleInputPicture }
                    >
                        Subir imagen
                    </button>

                    <input 
                    id="fileSelector"
                    type="file"
                    name="URL"
                    style={{ display: 'none' }}
                    onChange={ inputFileChange }
                    />
                    
                    <button 
                    className="btn"
                    onClick={handleInputSave}
                    >
                        Guardar nota
                    </button>
                </div>
            </div>
            
            <div className="notes-form ">

                <input
                    name="title"                
                    className="animate__animated animate__slideInRight animate__faster note-form-tittle"
                    type="text"
                    value={title}
                    placeholder="Coloque su maravilloso titulo"
                    onChange={handleInputChange}
                />

                <textarea
                    name="desc"
                    value={desc}
                    className="animate__animated animate__slideInRight animate__faster note-form-textarea"
                    placeholder="Que se te ocurrió el día de hoy??"
                    onChange={handleInputChange}

                >
                </textarea>

                <div className="animate__animated animate__slideInRight animate__faster note-form-image" >
                    <img 
                        src={active.URL}
                        alt=""   
                    />
                </div>


                {
                    (active.id!=="")&&

                    (<div 
                        className="note-form-delete"
                        onClick={ handleDelete }
                    >
                        <img src="https://image.flaticon.com/icons/png/512/25/25008.png" alt="trash-img" />  
                    </div>) 
                }

            </div>  
        </div>
    )
}
