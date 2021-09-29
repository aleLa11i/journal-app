export const validNoteExists = (valid,id) => {
    
    var state = false;

    valid.forEach( child => {
        if(child.id === id)
        {
            state = true;
        }
    } )

    return state;

}
