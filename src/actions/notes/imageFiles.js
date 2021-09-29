
import Swal from "sweetalert2";
import { UploadFiles } from "../../helpers/UploadFiles";
import {  selectNote } from "./notes";

export const imageFiles = (fileImage, setImage, handleInputChange) => {
    
    return async(dispatch, getState) => {

        const {active} = getState().notes;
        const {date,desc,id,title} = active;;

        Swal.fire({
            title:"Subiendo imagen..",
            text: "Porfavor espere.",
            allowOutsideClick:false,
            didOpen: () => {
                Swal.showLoading()
            }
        });


        const URL = await UploadFiles(fileImage);

        setImage(URL);

        dispatch(  selectNote(id,title,desc,date,URL));
        
        const target={
            name:"URL",
            value: URL
        };

        handleInputChange({target});

        Swal.close();
    }

}
