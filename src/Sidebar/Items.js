
import React from 'react';
import moment from 'moment';
import { selectNote } from '../actions/notes/notes';
import { useDispatch } from 'react-redux';
import "moment/locale/es"

moment.locale("es");


export const Items = ({Data,Key}) => {

    console.log(Key)
    const dispatch = useDispatch();
    const {title,desc,date,id,URL} = Data;
    const m = moment(date);
    const handleInput = () => {
        dispatch(   selectNote(id,title,desc,date,URL));
    }


    return (
        <div 
        className="sidebar-item"  
        onClick={handleInput}
        key={Key}
        >
            <img 
            src={URL?URL:"https://i.pinimg.com/564x/89/f1/64/89f16427098d3a0e757045b521144bac.jpg"}
            alt={"img-icon"} />
            <div>
                <h2> {title} </h2>
                <b> {   m.format('dddd') }  </b>
                <b> {   m.format('MMMM Do YYYY')  }  </b>
                <a> {   m.format('h:mm:ss a')  }  </a>
            </div>
        </div>
    )
}
