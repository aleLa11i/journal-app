
export const loginReducer = ( state = {} , action ) => {

    switch (action.type) {
        case "login":
            return({
                id: action.payload.id,
                name: action.payload.name,
                email: action.payload.email,
                imageURL: action.payload.photoURL
            });
            
        case "logout":
            return {};

        default:
            return state;
    }

}