const initialState={
    notes: [],
    active: null
}

export const notesReducer = (state = initialState,action) => {

    switch (action.type) {
         case "New Note":
               return {
                   ...state,
                   active: action.payload
                } 

        case "Load notes":
            return {
                ...state,
                notes: action.payload
                } 

        case "Note upload":
            return {
                ...state,
                notes: state.notes.map(
                    note =>(note.id === action.payload.id)?action.payload.note:note   
                )} 
        case "Delete Note":
            return {
                ...state,
                active:null,
                notes: state.notes.filter(note => note.id !== action.payload.nid)  
                } 
        case "purchaseLogout":
            return{
                ...state,
                active: null,
                notes:[]
            }

        default:
            return state;
    }



}